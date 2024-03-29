---
title: task_shell_job
desc: js脚本任务
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] task_shell_job
> js脚本任务

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 主键id | √ | √ |  |
| namespace | varchar | 63 | 命名空间 |  | √ |  |
| job_id | int8 |  | 任务ID |  | √ |  |
| shell_type | varchar | 15 | shell脚本类型：bash|sh|ash|powershell|cmd|python|node|deno|php |  | √ |  |
| shell_charset | varchar | 15 | 执行终端的字符集编码，如：“UTF-8” |  |  |  |
| shell_timeout | int4 |  | 执行超时时间，单位：秒，默认：“10分钟” |  | √ |  |
| content | text |  | 文件内容 |  |  |  |
| read_only | int2 |  | 读写权限：0-可读可写，1-只读 |  | √ |  |
| create_at | timestamp |  | 创建时间 |  | √ |  |
| update_at | timestamp |  | 更新时间 |  |  |  |

