---
title: 盘点录入库位检索
desc: 盘点录入库位检索
name: CheckInputLoctionSearch
columnCount: 45
sqlId: CheckInputLoctionSearch
type: widget
navIgnore: false
tags:
  - wms/widget/CheckInputLoctionSearch
---

## 库区检索
>[!widget] CheckInputLoctionSearch  
> 盘点录入库位检索  
> 
> sqlId: CheckInputLoctionSearch
  
### SQL
```sql
select dci.cou_no, dci.cou_code, dci.cou_line_status, dci.cou_line_no, dci.region_id, dci.wh_area_id,
        dci.road_code, dci.location_id, dci.lpn,
        dci.trace_id, dci.owner_id, dci.item_id, dci.pack_unit, dci.lot_id, dci.upn, dci.stock_qty, dci.actual_qty,
        dci.differ_qty, dci.operator,
        dci.task_start_time, dci.task_end_time, dci.quality_status, dci.is_extract, dci.create_by, dci.create_at,
        dci.update_by, dci.update_at,
        ila.lot01, ila.lot02, ila.lot03, ila.lot04, ila.lot05, ila.lot06, ila.lot07, ila.lot08, ila.lot09, ila.lot10,
        ila.lot11, ila.lot12,
        bw.wh_name, bo.owner_name, bo.owner_code, bl.location_code, bi.item_name, bi.item_code
        from doc_cou_items dci
        inner join bas_location bl on bl.location_id = dci.location_id
        inner join bas_wh bw on bw.wh_id = bl.wh_id
        inner join bas_item bi on bi.item_id = dci.item_id
        inner join bas_owner bo on bo.owner_id = dci.owner_id
        inner join inv_lot_att ila on ila.lot_id = dci.lot_id
        where
        dci.cou_line_status = '0001'
        --@ and dci.cou_no = #{cou_no, javaType=long}
        --% and (bi.item_code like #{__queryValue} or bl.location_code like #{__queryValue} or bi.item_name like
        #{__queryValue})
        --# and #
```

### 字段
总共 `45` 个

| 字段  | 描述  |
| --- | --- |
| location_code | 货位编号 |
| item_name | 商品名称 |
| item_code | 商品编号 |
| owner_name | 货主名称 |
| cou_line_no | 行号 |
| lot01 | 批次号 |
| lot02 | 生产日期 |
| lot03 | 有效期 |
| stock_qty | 库存数量 |
| lot04 | null |
| lot05 | null |
| lot06 | null |
| lot07 | null |
| lot08 | null |
| lot09 | null |
| lot10 | null |
| lot11 | null |
| lot12 | null |
| cou_no | null |
| cou_code | null |
| cou_line_status | null |
| region_id | null |
| wh_area_id | null |
| road_code | null |
| location_id | null |
| lpn | null |
| trace_id | null |
| owner_id | null |
| item_id | null |
| pack_unit | null |
| lot_id | null |
| upn | null |
| actual_qty | 实盘数量 |
| differ_qty | null |
| operator | null |
| task_start_time | null |
| task_end_time | null |
| quality_status | null |
| is_extract | null |
| create_by | null |
| create_at | null |
| update_by | null |
| update_at | null |
| wh_name | null |
| owner_code | null |

