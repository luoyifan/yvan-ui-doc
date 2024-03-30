---
title: pickFinish
desc: 2.2.4-拣货完成
type: connector
apiType: Method
system: 
date: 2024-03-29 10:56
author: yvan
url: /wms/Test3@pickFinish
tags: 
  - wms/connector
  - wms/connector2-业务接口/2_2-出库
  - wms/connector/wms/Test3@pickFinish
---

# title
> [!connector] URL: /wms/Test3@pickFinish
> 描述: 2.2.4-拣货完成
> 
> 名称: pickFinish
> 
> 内部方法：null
> 
> 内部编号: 756362f9-9b22-46e1-86f5-d180e014637e


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

