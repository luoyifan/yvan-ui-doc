---
title: bas_location_group_rel
desc: 货位组货位关系表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] bas_location_group_rel
> 货位组货位关系表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| loc_id | int8 |  | 库位ID | √ | √ |  |
| loc_group_id | int8 |  | 逻辑库位组ID | √ | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
