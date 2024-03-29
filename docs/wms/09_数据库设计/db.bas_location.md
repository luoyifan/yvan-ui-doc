---
title: bas_location
desc: 货位
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] bas_location
> 货位

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| loc_id | int8 |  | 库位ID | √ | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| wh_area_id | int8 |  | 库区ID |  | √ |  |
| loc_code | varchar | 128 | 库位编号 |  | √ |  |
| loc_name | varchar | 255 | 库位名称 |  | √ |  |
| loc_type | varchar | 50 | 库位类型 |  | √ | [[dict.LOC_TYPE]] |
| loc_env | varchar | 50 | 库存环境 |  | √ | [[dict.LOC_ENV]] |
| loc_use | varchar | 50 | 库位使用方式 |  | √ | [[dict.LOC_USE]] |
| pick_order | varchar | 255 | 拣货顺序 |  | √ |  |
| road_code | varchar | 128 | 巷道编号 |  | √ |  |
| row_no | varchar | 2 | 排 |  | √ |  |
| column_no | varchar | 2 | 列 |  | √ |  |
| cno | varchar | 2 | 层数 |  | √ |  |
| floors | varchar | 255 | 楼层 |  | √ |  |
| deep_group | varchar | 128 | 深位组 |  | √ |  |
| deep_no | int4 |  | 深位号 |  | √ |  |
| is_lock | varchar | 50 | 是否锁定 |  | √ | [[dict.SYS_YES_NO]] |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.SYS_YES_NO]] |
| shelves_order | varchar | 255 | 上架顺序 |  | √ |  |
| mixed_product_limit | int4 |  | 混放产品限制 |  | √ |  |
| mixed_lot_limit | int4 |  | 混放批次限制 |  | √ |  |
| volume_limit | numeric |  | 体积限制 |  | √ |  |
| volume_surplus | numeric |  | 剩余体积 |  | √ |  |
| weight_limit | numeric |  | 重量限制 |  | √ |  |
| weight_surplus | numeric |  | 剩余重量 |  | √ |  |
| qty_limit | numeric |  | 数量限制 |  | √ |  |
| qty_surplus | numeric |  | 剩余数量 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| loc_length | numeric |  | 长 |  | √ |  |
| loc_width | numeric |  | 宽 |  | √ |  |
| loc_height | numeric |  | 高 |  | √ |  |
| loc_volume_total | numeric |  | 体积 |  | √ |  |
| loc_remark | varchar | 255 | 备注 |  | √ |  |
| region_id | int8 |  | 区域ID |  |  |  |
#wms/db/基础数据
