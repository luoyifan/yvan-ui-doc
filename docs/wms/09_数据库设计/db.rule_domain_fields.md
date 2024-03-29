---
title: rule_domain_fields
desc: 领域规则字段
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_domain_fields
> 领域规则字段

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| dm_table | varchar | 255 | 领域Key | √ | √ |  |
| dm_field | varchar | 255 | 物理字段 | √ | √ |  |
| dm_field_type | varchar | 255 | 领域用途 | √ | √ |  |
| dm_field_order | int4 |  | 顺序 |  |  |  |
| dm_field_is_enable | varchar | 50 | 启用 |  |  | [[dict.IS_ENABLE]] |
| dm_field_label | varchar | 255 | 中文描述 |  |  |  |
| dm_field_ui | varchar | 40960 | 编辑模式 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |

