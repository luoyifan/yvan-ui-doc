---
title: pilerInboundBCRArrived
desc: 2.1.3-嘉兴-立体库-到达托盘立体库入库口
type: connector
apiType: Method
system: 
date: 2024-03-29 10:56
author: yvan
navIgnore: true
url: /wms/Test2@pilerInboundBCRArrived
tags: 
  - wms/connector
  - wms/connector2-业务接口/2_1-入库
  - wms/connector/wms/Test2@pilerInboundBCRArrived
---

### 2.1.3-嘉兴-立体库-到达托盘立体库入库口
> [!connector] URL: /wms/Test2@pilerInboundBCRArrived
> 描述: 2.1.3-嘉兴-立体库-到达托盘立体库入库口
> 
> 名称: pilerInboundBCRArrived
> 
> 内部方法：null
> 
> 内部编号: f22cecd9-6826-4487-956f-69ecd8c32e6a


#### 请求
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

