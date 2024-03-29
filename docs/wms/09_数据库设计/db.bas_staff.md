---
title: bas_staff
desc: 职员基础资料
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] bas_staff
> 职员基础资料

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| staff_id | int8 |  | 职员ID | √ | √ |  |
| staff_no | varchar | 128 | 职员编号 |  |  |  |
| staff_gender | varchar | 255 | 性别 |  |  |  |
| staff_email | varchar | 255 | 邮箱 |  |  |  |
| staff_mobile | varchar | 255 | 企业用户电话 |  |  |  |
| staff_name | varchar | 255 | 用户名称 |  |  |  |
| status | varchar | 50 | 状态编码 |  |  | [[dict.IS_ENABLE]] |
| user_id | int8 |  | 用户ID |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
