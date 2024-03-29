---
title: task_js_job
desc: js脚本任务
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] task_js_job
> js脚本任务

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 主键id | √ | √ |  |
| namespace | varchar | 63 | 命名空间 |  | √ |  |
| job_id | int8 |  | 任务ID |  | √ |  |
| content | text |  | 文件内容 |  |  |  |
| read_only | int2 |  | 读写权限：0-可读可写，1-只读 |  | √ |  |
| create_at | timestamp |  | 创建时间 |  | √ |  |
| update_at | timestamp |  | 更新时间 |  |  |  |
#wms/db/基础数据
