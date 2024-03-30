---
title: 库位分配
desc: 库位分配
name: LocDispatch
type: rule
navIgnore: false
version: 4
tags:
  - wms/rule/LocDispatch
---

## 库位分配  
>[!rule] LocDispatch  
> 库位分配  
>   
> 版本: 4 
  
### 说明  
```text
1.如若要指定库区入库：订单界面选择库区传入 规则不直接写死库区
    2.规则when的条件以及明细中的whereSql 只允许在LocationDispatchParam实体、item、lot、loc、area、wh表中存在的字段做条件，其余在实现代码中均不会处理 有特殊需要必须调整程序 否则会报错
    3.分巷道还是具体库位由系统传入参数决定，规则只做实现
    4.上架规则适用于：入库、出库补货、移库等业务的库存上架中的库位分配 规则通过when中的类型进行区分
    5.库位深度为顺序执行,靠外层为1依次递加。
```

### 入口参数
```beanSchema
{
  "root": {
  "valueType" : "object",
  "title" : "入口参数",
  "uiEditor" : "",
  "properties" : {
    "put_intent" : {
      "valueType" : "dict",
      "dict" : "PUT_INTENT",
      "title" : "入库意向"
    },
    "quality_status" : {
      "valueType" : "dict",
      "dict" : "INV_QUALITY_STATUS",
      "title" : "质检状态"
    },
    "PilerDistPhase" : {
      "valueType" : "dict",
      "dict" : "PILER_DIST_PHASE",
      "title" : "立库分配阶段"
    },
    "ShuttleDistPhase" : {
      "valueType" : "dict",
      "title" : "密集库分配阶段",
      "dict" : "SHUTTLE_DIST_PHASE"
    }
  }
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
      "title" : "库位条件"
    },
    "orderSql" : {
      "valueType" : "string",
      "title" : "库位排序"
    },
    "locId" : {
      "valueType" : "string",
      "title" : "库位ID"
    },
    "steps" : {
      "valueType" : "array",
      "title" : "算法步骤",
      "items" : {
        "valueType" : "object",
        "title" : "步骤内容",
        "properties" : {
          "putAlgorithmLocat" : {
            "valueType" : "dict",
            "title" : "货位限制条件",
            "dict" : "PUT_ALGORITHM_LOCAT"
          },
          "option" : {
            "valueType" : "array",
            "items" : {
              "valueType" : "dict",
              "title" : "空间限制条件",
              "dict" : "PUT_ALGORITHM_SPACE"
            },
            "title" : "空间限制条件内容"
          }
        }
      }
    }
  }
}
}
```

