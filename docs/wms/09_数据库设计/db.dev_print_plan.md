---
title: dev_print_plan
desc: 打印场景
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] dev_print_plan
> 打印场景

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| print_plan_id | int8 |  | 打印场景ID | √ | √ |  |
| wh_id | int8 |  | 仓库ID |  |  |  |
| project_id | int8 |  | 项目ID |  |  |  |
| print_plan_code | varchar | 128 | 打印场景编码 |  |  |  |
| print_plan_name | varchar | 128 | 打印场景名称 |  |  |  |
| is_enable | varchar | 50 | 是否启动 |  | √ | [[dict.IS_ENABLE]] |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |
#wms/db/基础数据
