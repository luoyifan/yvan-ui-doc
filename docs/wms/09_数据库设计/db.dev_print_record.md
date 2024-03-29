---
title: dev_print_record
desc: 打印记录表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] dev_print_record
> 打印记录表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| print_record_id | int8 |  | 打印记录ID | √ | √ |  |
| page_code | varchar | 255 | 单据编码 |  |  |  |
| wh_id | int8 |  | 仓库ID |  |  |  |
| project_id | int8 |  | 项目ID |  |  |  |
| print_task_id | int8 |  | 打印任务ID |  |  |  |
| print_plan_id | int8 |  | 打印场景ID |  |  |  |
| print_plan_code | int8 |  | 打印场景编码 |  |  |  |
| print_plan_name | int8 |  | 打印场景名称 |  |  |  |
| print_template_id | int8 |  | 打印模板ID |  |  |  |
| print_template_code | varchar | 255 | 打印模板编码 |  |  |  |
| print_template_name | varchar | 255 | 打印模板名称 |  |  |  |
| print_terminal_id | int8 |  | 打印终端ID |  |  |  |
| print_terminal_name | varchar | 255 | 打印终端名称 |  |  |  |
| print_condition | varchar | 255 | 打印条件 |  |  |  |
| print_params | varchar | 40960 | 打印参数 |  |  |  |
| file_path | varchar | 255 | 打印文件地址 |  |  |  |
| print_state | varchar | 50 | 打印状态 |  |  |  |
| printer_name | varchar | 255 | 打印机名称 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |

