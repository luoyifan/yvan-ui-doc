---
title: bas_wh_area
desc: 库区
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] bas_wh_area
> 库区

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| wh_area_id | int8 |  | 库区ID | √ | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| wh_area_code | varchar | 255 | 库区编号 |  | √ |  |
| wh_area_name | varchar | 255 | 库区名称 |  | √ |  |
| wh_area_type | varchar | 50 | 库区类型 |  | √ |  |
| is_enable | varchar | 50 | 状态 |  | √ | [[dict.IS_ENABLE]] |
| create_by | varchar | 64 | create_by |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| region_id | int8 |  | 区域ID |  |  |  |
#wms/db/基础数据
