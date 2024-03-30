---
title: 批属性查询
desc: 批属性查询
name: InvLotAttSearch
columnCount: 12
sqlId: InvLotAttSearch
type: widget
navIgnore: false
tags:
  - wms/widget/InvLotAttSearch
---

## 库区检索
>[!widget] InvLotAttSearch  
> 批属性查询  
> 
> sqlId: InvLotAttSearch
  
### SQL
```sql
select a.*,b.item_code,b.item_name
from inv_lot_att a
inner join bas_item b on a.item_id = b.item_id
where (1=1
--@ or a.lot_id = #{old_lot_id}::numeric
)
--@ and a.item_id = #{item_id}::numeric
--@ and a.lot_id = #{lot_id}::numeric
--% and (a.lot_no like #{lot_no} or a.production_date like #{lot_no} or a.valid_until like #{lot_no} or a.project_code like #{lot_no} or a.version like #{lot_no} or a.inventory_loc like #{lot_no})
--@ and exists(select 1 from inv_loc_primary where a.lot_id = lot_id and primary_code = #{primary_code})
--@ and exists(select 1 from inv_lot_loc where a.lot_id = lot_id and loc_id = #{loc_id}::numeric)
```

### 字段
总共 `12` 个

| 字段  | 描述  |
| --- | --- |
| lot_id | 批属性id |
| parent_lot_id | 上游批次ID |
| item_id | 产品ID |
| pack_id | 包装ID |
| item_code | 商品编号 |
| item_name | 商品名称 |
| lot_no | 批号 |
| production_date | 生产日期 |
| valid_until | 有效期至 |
| project_code | 项目号 |
| version | 版本号 |
| inventory_loc | 库存地点 |

