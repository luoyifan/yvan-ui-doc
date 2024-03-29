---
title: rule_ui_version
desc: 功能模块版本
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_ui_version
> 功能模块版本

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| version_id | int8 |  | 主键 | √ | √ |  |
| version_name | varchar | 255 | 版本名称 |  |  |  |
| rule_order | int4 |  | 顺序 |  |  |  |
| rule_condition | varchar | 40960 | 适用条件 |  |  |  |
| is_enable | varchar | 50 | 启用 |  |  | [[dict.IS_ENABLE]] |
| create_by | varchar | 255 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

