---
title: 分配合并
desc: 分配合并
name: AllocateMerge
type: rule
navIgnore: false
version: 1
tags:
  - wms/rule/AllocateMerge
---

## 库位分配  
>[!rule] AllocateMerge  
> 分配合并  
>   
> 版本: 1 
  
### 说明  
```text
在某条件下合并商品、批次等信息进行库存分配
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
    "isMerge" : {
      "valueType" : "boolean",
      "title" : "是否合并分配"
    }
  }
}
}
```

