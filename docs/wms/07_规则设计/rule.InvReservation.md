---
title: 库存预占
desc: 库存预占
name: InvReservation
type: rule
navIgnore: false
version: 2
tags:
  - wms/rule/InvReservation
---

## 库位分配  
>[!rule] InvReservation  
> 库存预占  
>   
> 版本: 2 
  
### 说明  
```text
库存预占规则 主要负责指定库存的预占维度 通常是通过库区类型等方式区分
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
    "allocLevel" : {
      "valueType" : "dict",
      "title" : "分配占用维度",
      "dict" : "INV_LEVEL"
    },
    "preAllocLevel" : {
      "valueType" : "dict",
      "title" : "预分配占用维度",
      "dict" : "INV_LEVEL"
    },
    "invOccupationType" : {
      "valueType" : "dict",
      "title" : "库存占用类型",
      "dict" : "INV_OCCUPATION_TYPE"
    }
  }
}
}
```

