---
title: task_java_job
desc: js脚本任务
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] task_java_job
> js脚本任务

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 主键id | √ | √ |  |
| namespace | varchar | 63 | 命名空间 |  | √ |  |
| job_id | int8 |  | 任务ID |  | √ |  |
| is_static | int2 |  | 是否是静态方法(函数)，0：非静态，1：静态 |  | √ |  |
| class_name | varchar | 255 | java class全路径 |  | √ |  |
| class_method | varchar | 63 | java class method |  | √ |  |
| create_at | timestamp |  | 创建时间 |  | √ |  |
| update_at | timestamp |  | 更新时间 |  |  |  |

