---
title: dev_print_template_use_scope
desc: 打印模板使用范围
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] dev_print_template_use_scope
> 打印模板使用范围

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| scope_id | int8 |  | 使用范围ID | √ | √ |  |
| template_id | int8 |  | 打印模板ID |  |  |  |
| target_type | varchar | 255 | 目标类型 |  |  |  |
| target_id | int8 |  | 目标ID |  |  |  |
| sort_no | int4 |  | 排序号 |  |  |  |
| is_enable | varchar | 50 | 是否启用 |  |  | [[dict.IS_ENABLE]] |
| remark | varchar | 40960 | 备注 |  |  |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |

