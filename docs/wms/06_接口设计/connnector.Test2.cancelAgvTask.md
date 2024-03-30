---
title: Test2.cancelAgvTask
desc: 2.1.2-嘉兴-立体库-取消AGV任务(测试)
type: connector
apiType: Method
system: 
date: 2024-03-29 10:56
author: yvan
url: /wms/Test2@cancelAgvTask
tags: 
  - wms/connector
  - wms/connector2-业务接口/2_1-入库
  - wms/connector/wms/Test2@cancelAgvTask
---

# title
> [!connector] URL: /wms/Test2@cancelAgvTask
> 描述: 2.1.2-嘉兴-立体库-取消AGV任务(测试)
> 
> 名称: Test2.cancelAgvTask
> 
> 内部方法：null
> 
> 内部编号: 202089d4-bc8d-4c88-98de-cc3c39017f94


# 请求
> [!info] 数据结构
```beanSchema
{
  "root": {
  "valueType" : "object",
  "properties" : {
    "container_code" : {
      "valueType" : "string",
      "title" : "容器编号"
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

