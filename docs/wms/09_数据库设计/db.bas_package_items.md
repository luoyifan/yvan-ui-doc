---
title: bas_package_items
desc: 产品包装控制属性
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_package_items
> 产品包装控制属性

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| pack_id | int8 |  | 包装ID | √ | √ |  |
| item_id | int8 |  | 商品ID |  | √ |  |
| sort_num | int4 |  | 序号 |  | √ |  |
| pack_level | varchar | 50 | 包装级别 | √ | √ | [[dict.BAS_PACK_LEVEL]] |
| pack_meas | int4 |  | 包装规格 |  | √ |  |
| base_unit | varchar | 50 | 基准单位 |  | √ | [[dict.SYS_YES_NO]] |
| pack_unit | varchar | 50 | 包装单位 |  | √ |  |
| pack_material | varchar | 50 | 包装材料 |  | √ |  |
| gross_weight | numeric |  | 毛重 |  | √ |  |
| net_weight | numeric |  | 净重 |  | √ |  |
| tare_weight | numeric |  | 皮重 |  | √ |  |
| pack_length | numeric |  | 长 |  | √ |  |
| pack_width | numeric |  | 宽 |  | √ |  |
| pack_height | numeric |  | 高 |  | √ |  |
| pack_volume | numeric |  | 体积 |  | √ |  |
| pack_weight | numeric |  | 重量 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.YESNO]] |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |

