---
title: 业务可追踪日志
date: 2024-09-02
author: yvan
---

# 业务可追踪日志特性
专门用来解决规则引擎、接口平台、工作流等特定功能，能够在页面上提供用户（或实施团队）能查询和追踪日志的功能；

与传统系统日志的不同点是：他是独立存储的（保存在MongoDB中）并且在界面上能够查询和追踪。

虽然会带来一部分性能损失，但他能在复杂的分布式部署生产环境中，提供实时的集中系统日志追踪特性；
并且不会影响正常的业务事务提交

## API设计
他隐含在正常的日志API中，调用 slf4j 的 log.info / log.error / log.fail / log.warn 都会被记录，
当开启某个线程槽开关之后，当前线程的日志都会被记录

核心类: com.yvan.core.BizLogMark
静态方法：
- 开启某个业务主题的日志记录, startRecord("业务类型", "业务实例Id")
- 关闭某个业务主题的日志记录, stop("业务类型")
- 清空所有业务主题记录, stopAll()

### 测试用例1
```java
// 不记录到业务日志，仅记录系统日志
log.info("logTest {}", "Record1");


// 开启业务日志记录, BizType=Rule, BizKey=Putaway
BizLogMark.startRecord("Bpmn", "FlowA");

// 记录 Bpmn/FlowA 业务日志
log.info("logTest {}", "Record2");

// 同时开启了BizType=Rule, BizKey=Putaway 的业务日志记录
BizLogMark.startRecord("Rule", "Putaway");

// 应当同时记录2份业务日志记录：Bpmn/FlowA业务日志，和 Rule/Putaway业务日志
log.info("logTest {}", "Record3");

// 停止记录 biz_type="Bpmn" biz_key="FlowA" 的记录, 并开启 biz_type="Bpmn" biz_key="FlowB" 的记录
BizLogMark.startRecord("Bpmn", "FlowB");

// 应当同时记录2份业务日志记录：Bpmn/FlowB，和 Rule/Putaway 业务日志
log.info("logTest {}", "Record5");

// 停止 Bpmn 主题日志记录
BizLogMark.stop("Bpmn");

// 应当记录 Rule/Putaway 业务日志
log.info("logTest {}", "Record6");

// 停止全部主题日志记录
BizLogMark.stopAll();

// 不记录到业务日志，仅记录系统日志
log.info("logTest {}", "Record7");
```

## 数据结构设计
- server 服务器名，比如 comput-1
```
// 取值方法
java.net.InetAddress.getLocalHost().getHostName()
```

- thread 线程名, 比如 http-nio-8085-exec-8
```
// 取值方法
Thread.currentThread().getName()
```

- logger 日志发生所在的类, 如: p6spy / com.galaxis.wms.Test
- bizType 业务类型, 是在业务中 startRecord 的参数1
- bizKey 业务Id, 是在业务中 startRecord 的参数2
- level 日志级别, 如: info / warn / error / fail
- time 日志发生的时间，精确到毫秒
```
格式为 yyyy-MM-dd HH:mm:ss.SSS
2024-03-01 17:01:43.992
```
- msg 日志内容，可以带回车键

比如：
```JSON
{
    "server": "comput-1"
    "thread": "http-nio-8085-exec-8",
    "logger": "com.galaxis.wms.Test",
    "bizType": "Bpmn",
    "bizKey": "FlowA",
    "level": "info",
    "time": "2024-03-01 17:01:43.992",
    "msg": "log1\nlog2\nlog3"
}
```

向 MongoDb 中插入数据(示例)
```java
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS")
LocalDateTime localDateTime = LocalDateTime.parse("2024-03-01 17:01:43.992", formatter);
Date date = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant())

MongoDatabase database = mongoClient.getDatabase("wms85std");

MongoCollection<Document> collection = database.getCollection("logs");

// 数据将在插入后一小时过期
// 创建TTL索引，假设我们将在每条记录上使用一个名为"expireAt"字段来表示其过期时间
Bson ttlIndex = Indexes.ascending("expireAt");
        collection.createIndex(
                ttlIndex,
                new IndexOptions().expireAfterSeconds(3600));

Document logEntry = new Document()
                .append("id", "雪花ID")
                .append("server", "comput-1")
                .append("thread", "http-nio-8085-exec-8")
                .append("logger", "com.galaxis.wms.Test")
                .append("biz_type", "Bpmn")
                .append("biz_key", "FlowA")
                .append("level", "info")
                .append("time", date)
                .append("msg", "log1\nlog2\nlog3")
                .append("expireAt", new Date(new Date().getTime() + 3600 * 1000)); // 设置一个小时后的过期时间

collection.insertOne(logEntry);
```

## 日志查询方法
### getBizKeys 查询某个业务类型所有业务实例Id
URL: /api/com/yvan/studio/LogUtil@getBizKeys

请求内容:
- **startAt** 选填项， 开始时间, 精确到秒
- **server** 选填项，查询某个服务器, 全匹配模式，不用做包含查询
- **bizType** bizType 过滤文本，全匹配模式，不用做包含查询
```JSON
{
    "startAt": "2023-03-05 00:00:00",
    "server": "comput-a",
    "bizType": "Bpmn"
}
```

返回内容:
```JSON
{
    "success": true,
    "data": [
        {
            "bizKey": "Flow-1",
            "startId": "11111"
        },
        {
            "bizKey": "Flow-2",
            "startId": "112"
        },
        {
            "bizKey": "Flow-3",
            "startId": "113"
        }
    ]
}
```


### tail 末尾追踪
URL: /api/com/yvan/studio/LogUtil@tail

参数
- **startId** 最小雪花ID
- **msg** msg过滤文本, 包含式查询
- **bizType** bizType 过滤文本，全匹配模式，不用做包含查询
- **bizKey** bizKey 过滤文本，全匹配模式，不用做包含查询
- **level** level 过滤文本，全匹配模式，不用做包含查询
- **server** server 过滤文本，全匹配模式，不用做包含查询
- **logger** logger 过滤文本，全匹配模式，不用做包含查询
- **thread** thread 过滤文本，全匹配模式，不用做包含查询

```JSON
{
    "startId": "111222",
    "msg": "",
    "bizType": "Bpmn",
    "bizKey": "FlowA",
    "level": "info",
    "server": "comput-a",
    "logger": "com.galaxis.wms.Biz1",
    "thread": "p6spy"
}
```

### cat 查询整个内容
URL: /api/com/yvan/studio/LogUtil@cat

从第一行开始查, 带上分页功能 offset/limit
```JSON
{
    "msg": "",
    "bizType": "Bpmn",
    "bizKey": "FlowA",
    "level": "info",
    "server": "comput-a",
    "logger": "com.galaxis.wms.Biz1",
    "thread": "p6spy",
    "offset": "100",
    "limit": "50"
}
```