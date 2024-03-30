---
title: ctuAgvTransportAdd
desc: 3.7.1-料箱搬运任务添加
type: connector
apiType: External
system: RCS
date: 2024-03-29 10:56
author: yvan
url: /rcs/ctuAgvTransportAdd
tags: 
  - wms/connector
  - wms/connector3-WCS接口/3_7-ctu(包含三层飞梭)
  - wms/connector/rcs/ctuAgvTransportAdd
---

# title
> [!connector] URL: /rcs/ctuAgvTransportAdd
> 描述: 3.7.1-料箱搬运任务添加
> 
> 名称: ctuAgvTransportAdd
> 
> 内部方法：com.galaxis.wms.connector.RCS@ctuAgvTransportAdd
> 
> 内部编号: e621272f-594a-4b03-8f00-b60ac64ec190


# 请求
> [!info] 数据结构
```beanSchema
{
  "root": {
  "valueType" : "object",
  "properties" : {
    "reqCode" : {
      "title" : "请求编号",
      "valueType" : "string",
      "desc" : "请求编号，每个请求都要一个唯一编号，同一个请求重复提交，使用同一编号"
    },
    "reqTime" : {
      "title" : "请求时间戳",
      "valueType" : "string",
      "desc" : "请求时间戳，格式: “yyyy-MM-dd HH:mm:ss”"
    },
    "data" : {
      "valueType" : "array",
      "items" : {
        "valueType" : "object",
        "properties" : {
          "taskNo" : {
            "title" : "任务号",
            "valueType" : "string",
            "required" : true
          },
          "priority" : {
            "title" : "优先级",
            "valueType" : "number",
            "required" : true
          },
          "startLocation" : {
            "title" : "起始点位",
            "valueType" : "string",
            "required" : true
          },
          "endLocation" : {
            "title" : "目标点位",
            "valueType" : "string",
            "required" : true
          },
          "containerCode" : {
            "title" : "容器号",
            "valueType" : "string",
            "required" : true
          }
        }
      }
    }
  }
}
}
```
> [!example] 请求示例 1
```json
{
  "reqCode": "tghol-002",
  "reqTime": "2024-03-26 12:12:10",
  "data": [
    {
      "taskNo": "TASK-24-03-26-15-000001",
      "priority": 1,
      "startLocation": "ZT00001",
      "endLocation": "LOC0001",
      "containerCode": "Z00001"
    },
    {
      "taskNo": "TASK-24-03-26-15-000002",
      "priority": 1,
      "startLocation": "ZT00002",
      "endLocation": "LOC0002",
      "containerCode": "Z00002"
    },
    {
      "taskNo": "TASK-24-03-26-15-000003",
      "priority": 1,
      "startLocation": "ZT00003",
      "endLocation": "LOC0003",
      "containerCode": "Z00003"
    }
  ]
}
```

# 响应
> [!info] 数据结构
```beanSchema
{
"root": {
  "valueType" : "object",
  "properties" : {
    "success" : {
      "title" : "状态标记",
      "valueType" : "number",
      "desc" : "返回状态，0 表示成功、大于0表示失败"
    },
    "msg" : {
      "title" : "消息",
      "valueType" : "string",
      "desc" : "一般在success字段返回大于0的时候，返回错误信息"
    },
    "reqCode" : {
      "title" : "请求编号",
      "valueType" : "string",
      "desc" : "返回请求时的 reqCode"
    },
    "data" : {
      "valueType" : "array",
      "items" : {
        "valueType" : "object",
        "properties" : { }
      }
    }
  }
}
}
```
> [!example] 响应示例 1
```json
{
  "success": 0,
  "msg": "",
  "data": null,
  "reqCode": "tghol-002"
}
```

