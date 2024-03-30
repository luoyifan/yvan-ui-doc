---
title: 移库库位检索
desc: 移库库位检索
name: LocChangeSearch
columnCount: 6
sqlId: selectChangeLoc
type: widget
navIgnore: false
tags:
  - wms/widget/LocChangeSearch
---

## 库区检索
>[!widget] LocChangeSearch  
> 移库库位检索  
> 
> sqlId: selectChangeLoc
  
### SQL
```sql
SELECT
        TA.location_code,
        TA.wh_area_id,
        TA.loc_id,
        TA.locat_category,
        tb.wh_area_code,
        tb.wh_area_name
        FROM
        bas_location ta
        inner join bas_wh_area tb on ta.wh_area_id = tb.wh_area_id
        WHERE ta.is_enable = '0001'
        and (TA.is_lock = '0000' or ta.is_lock is null)
        --@ and ta.locat_type = #{locat_type}
        and TA.wh_id = #{wh_id} :: numeric

        --@ and tb.wh_area_id = #{wh_area_id} :: numeric
        --@ and ta.loc_id != #{loc_id_from} :: numeric
        --# and ta.#
        ${@com.galaxis.wms.ext.Sql@phrase('AND', 'ta.location_code like')}
```

### 字段
总共 `6` 个

| 字段  | 描述  |
| --- | --- |
| location_code | 移入货位 |
| wh_area_id | 移入区域ID |
| wh_area_name | 移入区域名称 |
| wh_area_code | 移入区域编号 |
| loc_id | 目的货位内码 |
| locat_category | 库位分类 |

