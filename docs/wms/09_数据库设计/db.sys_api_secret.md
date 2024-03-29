---
title: sys_api_secret
desc: 调度器
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] sys_api_secret
> 调度器

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 主键id | √ | √ |  |
| name | varchar | 128 | api密钥名称 |  | √ |  |
| enable | int4 |  | 是否启用(1:启用，0:禁用) |  | √ |  |
| key | varchar | 128 | key |  | √ |  |
| token | varchar | 255 | token |  | √ |  |
| description | varchar | 511 | 描述 |  |  |  |
| create_at | timestamp |  | 创建时间 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| update_at | timestamp |  | 更新时间 |  | √ |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |

