---
title: 批次分配
desc: 批次分配
name: LotAllocate
type: rule
navIgnore: false
version: 1
tags:
  - wms/rule/LotAllocate
---

## 库位分配  
>[!rule] LotAllocate  
> 批次分配  
>   
> 版本: 1 
  
### 说明  
```text
批次分配规则
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
    "orderBy" : {
      "valueType" : "string",
      "title" : "排序条件"
    },
    "whereBy" : {
      "valueType" : "string",
      "title" : "过滤条件"
    }
  }
}
}
```

