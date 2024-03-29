---
title: rule_ui_cmp
desc: UI规则客户自定义表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_ui_cmp
> UI规则客户自定义表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| version_id | int8 |  | 功能模块版本ID | √ | √ |  |
| page_id | int8 |  | 功能ID | √ | √ |  |
| ui_block | varchar | 255 | 功能块 | √ | √ |  |
| ui_key | varchar | 255 | 组件key | √ | √ |  |
| create_by | varchar | 255 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| is_override | varchar | 50 | 是否覆盖功能 |  |  | [[dict.IS_ENABLE]] |
| cust_display_label | varchar | 255 | 中文描述 |  |  |  |
| cust_ui | varchar | 40960 | 字段描述JSON |  |  |  |
| is_hidden | varchar | 50 | 是否隐藏 |  |  | [[dict.IS_ENABLE]] |
| is_required | varchar | 50 | 是否必填 |  |  | [[dict.IS_ENABLE]] |

