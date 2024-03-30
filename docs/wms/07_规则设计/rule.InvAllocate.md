---
title: 库存分配
desc: 库存分配
name: InvAllocate
type: rule
navIgnore: false
version: 1
tags:
  - wms/rule/InvAllocate
---

## 库位分配  
>[!rule] InvAllocate  
> 库存分配  
>   
> 版本: 1 
  
### 说明  
```text
库存分配包含
1.按分配维度分配
2.分配维度中含库存是否需要满足、分配方式、目标包装级别、是否自动补货
3.先检查当前明细行是否需要分配前合并(拣货模式+合并类型)，1-分配前合并 先合并在分配 2-分配后合并 先分配后打包在一个任务中
4.先设置整个的挂起维度，
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
      "title" : "库存过滤条件"
    },
    "orderSql" : {
      "valueType" : "string",
      "title" : "库存排序条件"
    },
    "allocMode" : {
      "valueType" : "dict",
      "title" : "分配模式",
      "dict" : "ALLOC_MODE"
    },
    "invAllocMode" : {
      "valueType" : "dict",
      "title" : "库存匹配模式",
      "dict" : "INV_ALLOC_MODE"
    },
    "targetPackLevel" : {
      "valueType" : "dict",
      "title" : "目标包装级别",
      "dict" : "PACK_LEVEL"
    },
    "packLevel" : {
      "valueType" : "dict",
      "title" : "包装级别",
      "dict" : "PACK_LEVEL"
    },
    "autoRep" : {
      "valueType" : "boolean",
      "title" : "是否自动补货"
    },
    "isSplit" : {
      "valueType" : "boolean",
      "title" : "是否允许拆分"
    },
    "isOnWay" : {
      "valueType" : "boolean",
      "title" : "是否在途优先"
    },
    "orderType" : {
      "valueType" : "dict",
      "title" : "订单类型",
      "dict" : "ORDER_TYPE"
    }
  }
}
}
```

