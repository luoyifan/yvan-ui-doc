---
title: tool.print
desc: 1.5.2-打印调试信息
type: connector
apiType: Method
system: 
date: 2024-03-29 10:56
author: yvan
url: /wms/tool/BpmnUtils@print
tags: 
  - wms/connector
  - wms/connector1-通用接口/1_5-其他
  - wms/connector/wms/tool/BpmnUtils@print
---

# title
> [!connector] URL: /wms/tool/BpmnUtils@print
> 描述: 1.5.2-打印调试信息
> 
> 名称: tool.print
> 
> 内部方法：com.galaxis.wms.tool.BpmnUtils@print
> 
> 内部编号: 9c115657-5212-42d4-a4c9-ca8c95f1ee6f


# 请求
> [!info] 数据结构
```beanSchema
{
  "root": {
  "valueType" : "object",
  "properties" : { }
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

