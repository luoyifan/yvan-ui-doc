---
title: bas_location_group
desc: 货位组
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] bas_location_group
> 货位组

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| loc_group_id | int8 |  | 库位组ID | √ | √ |  |
| wh_id | int8 |  | 仓库ID |  |  |  |
| loc_group_code | varchar | 128 | 库位组编号 |  |  |  |
| loc_group_name | varchar | 255 | 库位组名称 |  |  |  |
| loc_group_type | varchar | 50 | 库位组类型 |  |  | [[dict.BAS_LOC_GROUP_TYPE]] |
| remark | varchar | 255 | 备注 |  |  |  |
| is_enable | varchar | 50 | 是否启用 |  |  | [[dict.SYS_YES_NO]] |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
