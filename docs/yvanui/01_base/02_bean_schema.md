---
tags:
  - schema
title: BeanSchema数据结构描述
---

# 介绍

BeanSchema 是框架用来描述接口数据结构的一种格式

特性

- 它是 JsonSchema 格式的变种. 可以生成 JsonSchema 格式
- 用来描述接口、工作流方法的定义，比如每个API或方法的输入参数、返回值等信息

# 字段说明

| 字段         | 说明        | 示例                                                                   |
| ---------- | --------- | -------------------------------------------------------------------- |
| title      | 属性标签      | 比如{title:'商品Id'}                                                     |
| valueType  | 属性值类型     | 取值范围:string/number/boolean/date/datetime/id/search/dict/object/array |
| dict       | 字典编码      | valueType == 'dict' 时生效                                              |
| widget     | 数据窗口编码    | valueType == 'id' 或 'search' 时生效                                     |
| lookme     | 数据窗口回填字段名 | valueType == 'id' 或 'search' 时生效                                     |
| properties | 下一级属性集    | valueType == 'object' 时生效                                            |
| items      | 表示数组元素类型  | valueType == 'array' 时生效                                             |
| required   | 是否必填      |                                                                      |

# 示例1: 上架规则入口参数

```JSON
{
  "valueType": "object",
  "title": "输入参数",
  "properties": {
    "item_id": {
      "title": "商品Id",
      "valueType": "id",
      "widget": "ItemSearch",
      "lookme": "item_id"
    },
    "qty": {
      "title": "商品数量",
      "valueType": "'number'}"
    },
    "order_type": {
      "title": "订单类型",
      "valueType": "dict",
      "dict": "ORDER_TYPE"
    },
    "order_biz_type": {
      "title": "订单业务类型",
      "valueType": "dict",
      "dict": "ORDER_BIZ_TYPE"
    },
    "whole": {
      "title": "是否整件",
      "valueType": "dict",
      "dict": "SYS_YES_NO"
    },
    "put_intent": {
      "title": "入库意向",
      "valueType": "dict",
      "dict": "PUT_INTENT"
    }
  }
}
```

## 示例2: 上架规则返回值

```JSON
{
  "valueType": "object",
  "properties": {
    "success": {
      "title": "是否成功",
      "valueType": "boolean"
    },
    "msg": {
      "title": "后台消息",
      "valueType": "string"
    },
    "data": {
      "title": "货位编号",
      "valueType": "id"
    }
  }
}
```

## 示例3: 综合

```JSON
{
  "valueType": "object",
  "title": "输入参数",
  "properties": {
    "item_id": {
      "title": "商品Id",
      "valueType": "id",
      "widget": "ItemSearch",
      "lookme": "item_id"
    },
    "qty": {
      "title": "商品数量",
      "valueType": "number"
    },
    "order_type": {
      "title": "订单类型",
      "valueType": "dict",
      "dict": "ORDER_TYPE"
    },
    "order_biz_type": {
      "title": "订单业务类型",
      "valueType": "dict",
      "dict": "ORDER_BIZ_TYPE"
    },
    "spNames": {
      "title": "商品名数组",
      "valueType": "array",
      "items": {
        "valueType": "string",
        "title": "商品名称"
      }
    },
    "spObject": {
      "title": "商品",
      "valueType": "object",
      "properties": {
        "name": {
          "title": "商品名",
          "valueType": "string"
        },
        "category": {
          "title": "商品类型",
          "valueType": "string"
        }
      }
    },
    "spArray": {
      "title": "商品数组",
      "valueType": "array",
      "items": {
        "title": "商品",
        "valueType": "object",
        "properties": {
          "item_name": {
            "title": "商品名",
            "valueType": "string"
          },
          "item_category": {
            "title": "商品类型",
            "valueType": "string"
          }
        }
      }
    }
  }
}
```