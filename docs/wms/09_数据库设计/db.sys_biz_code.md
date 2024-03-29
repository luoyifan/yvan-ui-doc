---
title: sys_biz_code
desc: 业务编码表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] sys_biz_code
> 业务编码表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 主键id | √ | √ |  |
| code_name | varchar | 127 | 编码名称 |  | √ |  |
| pattern | varchar | 127 | 编码规则表达式 |  | √ |  |
| sequence | int8 |  | 序列值 |  | √ |  |
| reset_pattern | varchar | 127 | 重置sequence值的表达式，使用Java日期格式化字符串 |  |  |  |
| reset_flag | varchar | 127 | 重置sequence值标识，此字段值变化后则需要重置 |  | √ |  |
| description | varchar | 511 | 说明 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| create_by | varchar | 64 |  |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| update_by | varchar | 64 |  |  | √ |  |

