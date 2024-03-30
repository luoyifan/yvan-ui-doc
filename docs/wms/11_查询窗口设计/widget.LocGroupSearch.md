---
title: 库位组检索
desc: 库位组检索
name: LocGroupSearch
columnCount: 4
sqlId: selectLocGroup
type: widget
navIgnore: false
tags:
  - wms/widget/LocGroupSearch
---

## 库区检索
>[!widget] LocGroupSearch  
> 库位组检索  
> 
> sqlId: selectLocGroup
  
### SQL
```sql
select *
        from bas_location_group
        where is_enable = '0001'
        --@ and wh_id = #{wh_id}
        --% AND loc_group_name like #{group_name}
        --% AND loc_group_name like #{__queryValue}
        --# and bas_location_group.#
```

### 字段
总共 `4` 个

| 字段  | 描述  |
| --- | --- |
| loc_group_id | 库位组ID |
| wh_id | 仓库ID |
| loc_group_name | 库位组名称 |
| loc_classify | 库位组类型 |

