---
title: sys_operator_log
desc: 操作日志
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] sys_operator_log
> 操作日志

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| log_id | int8 |  | 日志ID | √ | √ |  |
| log_at | timestamptz |  | 日志发生时间 |  | √ |  |
| log_by | varchar | 64 | 日志发生人 |  | √ |  |
| log_term_ip | varchar | 50 | 终端IP |  | √ |  |
| log_term_name | varchar | 50 | 终端名称 |  | √ |  |
| log_operator | varchar | 50 | 操作类型 |  | √ |  |
| log_data_type | varchar | 50 | 数据类型 |  | √ |  |
| log_data_id | varchar | 256 | 数据主键ID |  | √ |  |
| log_data_before | varchar | 40960 | 数据修改前 |  | √ |  |
| log_data_after | varchar | 40960 | 数据修改后 |  | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |

