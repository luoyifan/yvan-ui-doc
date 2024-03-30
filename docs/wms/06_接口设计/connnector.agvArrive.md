---
title: agvArrive
desc: 2.2.3-侧叉搬运完成
type: connector
apiType: Method
system: 
date: 2024-03-29 10:56
author: yvan
navIgnore: true
url: /wms/Test3@agvArrive
tags: 
  - wms/connector
  - wms/connector2-业务接口/2_2-出库
  - wms/connector/wms/Test3@agvArrive
---

### 2.2.3-侧叉搬运完成
> [!connector] URL: /wms/Test3@agvArrive
> 描述: 2.2.3-侧叉搬运完成
> 
> 名称: agvArrive
> 
> 内部方法：null
> 
> 内部编号: 2391f985-3e14-4005-9114-93e5daf94f61


#### 请求
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

