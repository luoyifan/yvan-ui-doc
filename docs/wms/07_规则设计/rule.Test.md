---
title: 测试
desc: 测试
name: Test
type: rule
navIgnore: false
version: 21
tags:
  - wms/rule/Test
---

## 库位分配  
>[!rule] Test  
> 测试  
>   
> 版本: 21 
  
### 说明  
```text
1.如若要指定库区入库：订单界面选择库区传入 规则不直接写死库区
2.规则when的条件以及明细中的whereSql 只允许在LocationDispatchParam实体、item、lot、loc、area、wh表中存在的字段做条件，其余在实现代码中均不会处理 有特殊需要必须调整程序 否则会报错
3.分巷道还是具体库位由系统传入参数决定，规则只做实现
4.上架规则适用于：入库、出库补货、移库等业务的库存上架中的库位分配 规则通过when中的类型进行区分

```

### 入口参数
```beanSchema
{
  "root": {
  "valueType" : "object",
  "title" : "输入参数",
  "properties" : {
    "item_id" : {
      "title" : "商品Id",
      "valueType" : "id",
      "widget" : "ItemSearch",
      "lookme" : "item_id"
    },
    "qty" : {
      "title" : "商品数量",
      "valueType" : "number"
    },
    "order_type" : {
      "title" : "订单类型",
      "valueType" : "dict",
      "dict" : "ORDER_TYPE"
    },
    "order_biz_type" : {
      "title" : "订单业务类型",
      "valueType" : "dict",
      "dict" : "ORDER_BIZ_TYPE"
    },
    "whole" : {
      "title" : "是否整件",
      "valueType" : "dict",
      "dict" : "SYS_YES_NO"
    },
    "put_intent" : {
      "title" : "入库意向",
      "valueType" : "dict",
      "dict" : "PUT_INTENT"
    },
    "piler_dist_phase" : {
      "valueType" : "dict",
      "dict" : "PILER_DIST_PHASE",
      "title" : "托盘立库分配阶段"
    },
    "shuttle_dist_phase" : {
      "valueType" : "dict",
      "title" : "密集库分配阶段",
      "dict" : "SHUTTLE_DIST_PHASE"
    },
    "item_physi_spect" : {
      "valueType" : "dict",
      "dict" : "ITEM_PHYSI_SPEC",
      "title" : "商品物理特性"
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
      "title" : "库位过滤条件",
      "valueType" : "sqlWhere",
      "sqlDbTables" : [ ]
    },
    "orderSql" : {
      "title" : "库位排序条件",
      "valueType" : "sqlOrder"
    },
    "locId" : {
      "title" : "固定库位ID",
      "valueType" : "id"
    },
    "steps" : {
      "title" : "算法步骤",
      "valueType" : "array",
      "items" : {
        "valueType" : "object",
        "properties" : {
          "type" : {
            "valueType" : "dict",
            "title" : "类型",
            "dict" : "PUT_ALGORITHM_LOCAT"
          },
          "option" : {
            "valueType" : "array",
            "items" : {
              "valueType" : "dict",
              "dict" : "PUT_ALGORITHM_SPACE"
            }
          }
        }
      }
    }
  },
  "uiEditor" : "Putaway"
}
}
```

