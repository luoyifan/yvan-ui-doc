---
title: bas_item
desc: 产品资料基础属性
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_item
> 产品资料基础属性

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| item_id | int8 |  | 产品ID | √ | √ |  |
| item_code | varchar | 128 | 产品编号 |  | √ |  |
| item_name | varchar | 255 | 产品名称 |  | √ |  |
| item_desc | varchar | 255 | 产品描述 |  | √ |  |
| item_specification | varchar | 255 | 产品规格 |  | √ |  |
| item_classify | varchar | 50 | 产品分类 |  | √ |  |
| item_category | varchar | 50 | 产品类别 |  | √ |  |
| item_abc | varchar | 50 | 产品ABC |  | √ | [[dict.BAS_ITEM_ABC]] |
| is_cable | varchar | 50 | 是否线缆 |  | √ | [[dict.SYS_YES_NO]] |
| owner_id | int8 |  | 货主ID |  | √ |  |
| logogram | varchar | 255 | 助记码 |  | √ |  |
| manufacturer | varchar | 255 | 厂家 |  | √ |  |
| origin | varchar | 255 | 产地 |  | √ |  |
| approval_no | varchar | 255 | 批准文号 |  | √ |  |
| stock_env | varchar | 50 | 库存环境 |  | √ |  |
| item_physi_spec | varchar | 50 | 物理特殊性 |  | √ |  |
| manage_lot | varchar | 50 | 管理批号 |  | √ |  |
| manage_upn | varchar | 50 | 管理唯一码 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.SYS_IS_ENABLE]] |
| create_by | varchar | 255 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 255 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |

