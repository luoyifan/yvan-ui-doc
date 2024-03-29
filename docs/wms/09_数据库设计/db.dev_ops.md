---
title: dev_ops
desc: 运维OPS
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] dev_ops
> 运维OPS

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| ops_id | numeric |  | 主键 | √ | √ |  |
| name | varchar | 128 | 操作名称 |  | √ |  |
| cmd_tpl | varchar | 2048 | 命令行模板 |  |  |  |
| host | varchar | 64 | 远程机器 |  |  |  |

