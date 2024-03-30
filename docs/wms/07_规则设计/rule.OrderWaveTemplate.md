---
title: 订单波次模板
desc: 订单波次模板
name: OrderWaveTemplate
type: rule
navIgnore: false
version: 4
tags:
  - wms/rule/OrderWaveTemplate
---

## 库位分配  
>[!rule] OrderWaveTemplate  
> 订单波次模板  
>   
> 版本: 4 
  
### 说明  
```text
1.波次模板 针对波次是否自动组建、自动分配、自动打包的处理
2.波次模板 如果是自动组建波次 检查组建订单数量
```

### 入口参数
```beanSchema
{
  "root": {
  "valueType" : "object",
  "title" : "入口参数",
  "properties" : {
    "order_type" : {
      "valueType" : "dict",
      "title" : "订单类型"
    },
    "order_biz_type" : {
      "valueType" : "dict",
      "title" : "订单业务类型"
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
    "createWaveNum" : {
      "valueType" : "int",
      "title" : "每次组建波次的条目数"
    },
    "hangType" : {
      "valueType" : "dict",
      "title" : "挂起类型",
      "dict" : "HANG_TYPE"
    },
    "argPriority" : {
      "valueType" : "dict",
      "title" : "分配优先级",
      "dict" : "ARG_PRIORITY"
    },
    "steps" : {
      "valueType" : "object",
      "title" : "出库步骤",
      "properties" : {
        "waveMode" : {
          "valueType" : "dict",
          "title" : "波次创建模式",
          "dict" : "OUT_STEPS_TYPE"
        },
        "allocMode" : {
          "valueType" : "dict",
          "title" : "分配模式",
          "dict" : "OUT_STEPS_TYPE"
        },
        "taskMode" : {
          "valueType" : "dict",
          "title" : "任务下发模式",
          "dict" : "OUT_STEPS_TYPE"
        }
      }
    }
  }
}
}
```

