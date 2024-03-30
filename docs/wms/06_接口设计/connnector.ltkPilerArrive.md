---
title: ltkPilerArrive
desc: 2.2.2-堆垛机到达
type: connector
apiType: Method
system: 
date: 2024-03-29 10:56
author: yvan
url: /wms/Test3@ltkPilerArrive
tags: 
  - wms/connector
  - wms/connector2-业务接口/2_2-出库
  - wms/connector/wms/Test3@ltkPilerArrive
---

# title
> [!connector] URL: /wms/Test3@ltkPilerArrive
> 描述: 2.2.2-堆垛机到达
> 
> 名称: ltkPilerArrive
> 
> 内部方法：null
> 
> 内部编号: e2b53b8f-14c1-4dad-bac5-2225a52b7fab


# 请求
> [!info] 数据结构
```beanSchema
{
  "root": {
  "valueType" : "object",
  "properties" : {
    "container_code" : {
      "valueType" : "string"
    }
  }
}
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

