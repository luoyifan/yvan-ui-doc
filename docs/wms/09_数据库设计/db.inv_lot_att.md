---
title: inv_lot_att
desc: 库存批属性资料
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] inv_lot_att
> 库存批属性资料

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| lot_id | int8 |  | 批属性id | √ | √ |  |
| parent_lot_id | int8 |  | 上游批次ID |  | √ |  |
| item_id | int8 |  | 产品ID |  | √ |  |
| pack_id | int8 |  | 包装ID |  | √ |  |
| lot_no | varchar | 255 | 批号 |  |  |  |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| production_date | varchar | 255 | 生产日期 |  |  |  |
| valid_until | varchar | 255 | 有效期至 |  |  |  |
| project_code | varchar | 255 | 项目号 |  |  |  |
| version | varchar | 255 | 版本号 |  |  |  |
| inventory_loc | varchar | 255 | 库存地点 |  |  |  |

