---
title: pilerFinish
desc: 2.1.4-堆垛机完成
type: connector
apiType: Method
system: 
date: 2024-03-29 10:56
author: yvan
navIgnore: true
url: /wms/Test2@pilerFinish
tags: 
  - wms/connector
  - wms/connector2-业务接口/2_1-入库
  - wms/connector/wms/Test2@pilerFinish
---

### 2.1.4-堆垛机完成
> [!connector] URL: /wms/Test2@pilerFinish
> 描述: 2.1.4-堆垛机完成
> 
> 名称: pilerFinish
> 
> 内部方法：null
> 
> 内部编号: 7b4223a3-2361-4da1-ad9e-51f34aed59cf


#### 请求
> [!info] 数据结构
```beanSchema
{
  "root": {
  "valueType" : "object",
  "properties" : {
    "start_pos_code" : {
      "valueType" : "string",
      "title" : "起始点位"
    },
    "container_code" : {
      "valueType" : "string",
      "title" : "容器号"
    },
    "target_pos_code" : {
      "valueType" : "string",
      "title" : "目标点位"
    },
    "task_code" : {
      "valueType" : "string",
      "title" : "任务号"
    }
  }
}
}
```

#### 响应
> [!info] 数据结构
```beanSchema
{
"root": {
  "valueType" : "object",
  "properties" : {
    "success" : {
      "title" : "是否成功",
      "valueType" : "boolean"
    },
    "msg" : {
      "title" : "消息说明",
      "valueType" : "string"
    },
    "data" : {
      "title" : "消息内容",
      "valueType" : "object",
      "properties" : { }
    }
  }
}
}
```

