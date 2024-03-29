---
title: sys_param
desc: 系统参数表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] sys_param
> 系统参数表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| param_code | varchar | 255 | 系统参数编号 | √ | √ |  |
| param_name | varchar | 255 | 系统参数名称 |  | √ |  |
| param_type | varchar | 50 | 参数类型 |  | √ | [[dict.SYSTEM_PARAM]] |
| param_value | varchar | 255 | 默认值 |  |  |  |
| param_fact_model | varchar | 255 | 参数计算模型 |  |  |  |
| param_desc | varchar | 255 | 系统参数描述 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

