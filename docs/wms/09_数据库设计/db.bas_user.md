---
title: bas_user
desc: 用户
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_user
> 用户

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| user_id | int8 |  | 用户ID | √ | √ |  |
| user_code | varchar | 255 | 用户编码 |  | √ |  |
| user_name | varchar | 255 | 用户名称 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| org_id | int8 |  | 组织机构ID |  |  |  |
| staff_no | varchar | 255 | 职员工号 |  |  |  |

