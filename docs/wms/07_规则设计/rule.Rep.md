---
title: 补货
desc: 补货
name: Rep
type: rule
navIgnore: false
version: 1
tags:
  - wms/rule/Rep
---

## 库位分配  
>[!rule] Rep  
> 补货  
>   
> 版本: 1 
  
### 说明  
```text
补货规则包含 1.主动补货 2.分配时自动补货
```

### 入口参数
```beanSchema
{
  "root": {
  "valueType" : "object",
  "title" : "入口参数",
  "properties" : { }
}
}
```
### 出口参数
```beanSchema
{
"root": {
  "valueType" : "object",
  "title" : "返回结果",
  "properties" : {
    "whereSql" : {
      "valueType" : "string",
      "title" : "过滤条件"
    },
    "orderSql" : {
      "valueType" : "string",
      "title" : "排序条件"
    },
    "allocMode" : {
      "valueType" : "dict",
      "title" : "分配模式",
      "dict" : "ALLOC_MODE"
    },
    "invAllocMode" : {
      "valueType" : "dict",
      "dict" : "INV_ALLOC_MODE",
      "title" : "库存分配模式"
    },
    "packLevel" : {
      "valueType" : "dict",
      "title" : "包装级别",
      "dict" : "PACK_LEVEL"
    },
    "isOnWay" : {
      "valueType" : "boolean",
      "title" : "是否在途优先"
    },
    "invLevel" : {
      "valueType" : "dict",
      "title" : "库存占用级别",
      "dict" : "INV_LEVEL"
    },
    "isSplit" : {
      "valueType" : "boolean",
      "title" : "是否允许拆分"
    }
  }
}
}
```

