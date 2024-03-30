---
title: 盘点库位检索
desc: 盘点库位检索
name: LocCheckSearch
columnCount: 2
sqlId: LocCheckSearch
type: widget
navIgnore: false
tags:
  - wms/widget/LocCheckSearch
---

## 库区检索
>[!widget] LocCheckSearch  
> 盘点库位检索  
> 
> sqlId: LocCheckSearch
  
### SQL
```sql
select bl.location_id, bl.location_code from bas_location bl
        inner join bas_location_group_rel blgr on blgr.location_id = bl.location_id
        <where>
            --@ and bl.wh_id = #{wh_id, javaType=long}
            --@ and blgr.loc_group_id = #{loc_group_id, javaType=long}
            --# and bl.#
        </where>
```

### 字段
总共 `2` 个

| 字段  | 描述  |
| --- | --- |
| location_id | 货位id |
| location_code | 货位编号 |

