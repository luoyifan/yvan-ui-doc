---
title: 容器库位库存
desc: 容器库位库存
name: InvPrimary
columnCount: 36
sqlId: selectInvPrimary
type: widget
navIgnore: false
tags:
  - wms/widget/InvPrimary
---

## 库区检索
>[!widget] InvPrimary  
> 容器库位库存  
> 
> sqlId: selectInvPrimary
  
### SQL
```sql
select
a.*,b.loc_code,b.loc_type,b.loc_use,c.wh_area_name,c.wh_area_type,d.item_code,d.item_name,d.item_classify,e.*,'1' as inv_primary_code,a.lot_id as old_lot_id
from inv_loc_primary a
inner join bas_location b on b.loc_id = a.loc_id
inner join bas_wh_area c on c.wh_area_id = b.wh_area_id
inner join bas_item d on d.item_id = a.item_id
inner join inv_lot_att e on e.lot_id = a.lot_id
where (a.qty-a.qty_pre_allocated-a.qty_allocated-a.qty_on_hold-a.qty_lock-a.qty_rep_out-a.qty_move_out-a.qty_loss > 0
--@ or a.loc_id = #{old_loc_id}::numeric
)
--@ and a.loc_id = #{loc_id}::numeric
--% and b.loc_code like #{loc_code}
--% and a.primary_code like #{primary_code}
--@ and a.item_id = #{item_id}::numeric
--@ and a.wh_id = #{wh_id}::numeric
--@ and a.owner_id = #{owner_id}::numeric
```

### 字段
总共 `36` 个

| 字段  | 描述  |
| --- | --- |
| wh_id | 仓库ID |
| owner_id | 货主ID |
| item_id | 产品ID |
| lot_id | 批属性ID |
| loc_id | 库位ID |
| wh_area_name | 库区名称 |
| loc_code | 库位编号 |
| loc_use | 库位使用方式 |
| loc_type | 库位类型 |
| primary_code | 容器 |
| item_code | 产品编号 |
| item_name | 产品名称 |
| item_classify | 产品分类 |
| quality_status | 质量状态 |
| qty | 库存数量 |
| lot_no | 批号 |
| production_date | 生产日期 |
| valid_until | 有效期至 |
| project_code | 项目号 |
| version | 版本号 |
| inventory_loc | 库存地点 |
| qty_in | 计划入库数量 |
| qty_pre_allocated | 预分配数量 |
| qty_allocated | 分配数量 |
| qty_on_hold | 冻结数量 |
| qty_lock | 锁定数量 |
| qty_rep_in | 计划补入数量 |
| qty_rep_out | 计划补出数量 |
| qty_move_in | 计划移入数量 |
| qty_move_out | 计划移出数量 |
| qty_profit | 计划溢数量 |
| qty_loss | 计划损数量 |
| parent_lot_id | 上游批次ID |
| pack_id | 包装ID |
| inv_primary_code | 是否选择 |
| old_lot_id | 原批次Id |

