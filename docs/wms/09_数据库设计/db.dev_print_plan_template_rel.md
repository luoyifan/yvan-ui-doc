---
title: dev_print_plan_template_rel
desc: 打印场景模板关系表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] dev_print_plan_template_rel
> 打印场景模板关系表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | PK | √ | √ |  |
| print_plan_id | int8 |  | 打印场景ID |  |  |  |
| print_template_id | int8 |  | 打印模板ID |  |  |  |
| print_terminal_id | int8 |  | 打印终端ID |  |  |  |
| print_mode | int4 |  | 打印模式 |  |  |  |
| print_condition | varchar | 255 | 打印条件 |  |  |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |
#wms/db/基础数据
