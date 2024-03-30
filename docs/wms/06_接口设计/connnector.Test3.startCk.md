---
title: Test3.startCk
desc: 2.2.1-嘉兴-立体库-出库(测试)
type: connector
apiType: Method
system: 
date: 2024-03-29 10:56
author: yvan
navIgnore: true
url: /wms/Test3@startCk
tags: 
  - wms/connector
  - wms/connector2-业务接口/2_2-出库
  - wms/connector/wms/Test3@startCk
---

### 2.2.1-嘉兴-立体库-出库(测试)
> [!connector] URL: /wms/Test3@startCk
> 描述: 2.2.1-嘉兴-立体库-出库(测试)
> 
> 名称: Test3.startCk
> 
> 内部方法：null
> 
> 内部编号: 8d14b66d-974f-4652-802a-284609b09efa


#### 请求
> [!info] 数据结构
```beanSchema
{
  "root": {
  "valueType" : "object",
  "properties" : {
    "container_code" : {
      "valueType" : "string",
      "title" : "托盘Code"
    },
    "loc_id" : {
      "valueType" : "id",
      "title" : "库位ID"
    },
    "target_loc_id" : {
      "valueType" : "id",
      "title" : "目标库位ID"
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

