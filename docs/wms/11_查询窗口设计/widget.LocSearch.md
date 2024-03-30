---
title: 货位检索
desc: 货位检索
name: LocSearch
columnCount: 18
sqlId: selectLoc
type: widget
navIgnore: false
tags:
  - wms/widget/LocSearch
---

## 库区检索
>[!widget] LocSearch  
> 货位检索  
> 
> sqlId: selectLoc
  
### SQL
```sql
select bl.*, ba.wh_area_name, ba.wh_area_code
        from bas_location bl
        inner join bas_wh_area ba on bl.wh_area_id = ba.wh_area_id
        where bl.is_enable = '0001'
        --@ and bl.wh_id = #{wh_id, javaType=long}
        --@ and bl.wh_area_id = #{area_id, javaType=long}
        --% and bl.loc_code like #{loc_code}
        order by bl.loc_code asc
```

### 字段
总共 `18` 个

| 字段  | 描述  |
| --- | --- |
| loc_id | 库位ID |
| wh_id | 仓库ID |
| wh_area_id | 库区ID |
| loc_code | 库位编号 |
| loc_type | 库位类型 |
| loc_env | 库存环境 |
| loc_use | 库位使用方式 |
| wh_area_name | 库区名称 |
| wh_area_code | 库区编号 |
| road_code | 巷道号 |
| row_no | 排 |
| cno | 层 |
| column_no | 列 |
| length | 长 |
| width | 宽 |
| highly | 高 |
| volume_limit | 体积 |
| weight_limit | 重量 |

