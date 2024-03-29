---
title: sys_rule_define
desc: 规则定义
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] sys_rule_define
> 规则定义

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| rule_code | varchar | 255 | 规则编码 | √ | √ |  |
| rule_name | varchar | 255 | 规则中文 |  | √ |  |
| rule_content | varchar | 409600 | 规则内容 |  |  |  |
| rule_dsl_content | varchar | 409600 | 规则编译后内容 |  |  |  |
| rule_version | int8 |  | 规则版本 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
