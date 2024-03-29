---
title: dev_print_task
desc: 打印任务表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] dev_print_task
> 打印任务表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| print_task_id | int8 |  | 打印任务ID | √ | √ |  |
| wh_id | int8 |  | 仓库ID |  |  |  |
| project_id | int8 |  | 项目ID |  |  |  |
| print_plan_id | int8 |  | 打印场景ID |  |  |  |
| print_template_id | int8 |  | 打印模板ID |  |  |  |
| print_terminal_id | int8 |  | 打印终端ID |  |  |  |
| printer_name | varchar | 255 | 打印机名称 |  |  |  |
| print_params | varchar | 255 | 打印参数 |  |  |  |
| print_state | int4 |  | 打印状态 |  |  |  |
| error_count | int4 |  | 打印错误次数 |  |  |  |
| file_path | varchar | 255 | 文件地址 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |
#wms/db/基础数据
