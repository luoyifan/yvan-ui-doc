---
title: LtkWorkflow.startInboundWithAgv
desc: 2.1.1-1-嘉兴-立体库-入库开始(使用侧叉搬运)
type: connector
apiType: Method
system: 
date: 2024-03-29 10:56
author: yvan
navIgnore: true
url: /wms/inbound/workflow/LtkWorkflow@startInboundWithAgv
tags: 
  - wms/connector
  - wms/connector2-业务接口/2_1-入库
  - wms/connector/wms/inbound/workflow/LtkWorkflow@startInboundWithAgv
---

### 2.1.1-1-嘉兴-立体库-入库开始(使用侧叉搬运)
> [!connector] URL: /wms/inbound/workflow/LtkWorkflow@startInboundWithAgv
> 描述: 2.1.1-1-嘉兴-立体库-入库开始(使用侧叉搬运)
> 
> 名称: LtkWorkflow.startInboundWithAgv
> 
> 内部方法：null
> 
> 内部编号: 18c26a85-1585-4ebe-8de4-423bca659c6b


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

