---
title: 区域检索
desc: 区域检索
name: RegionSearch
columnCount: 3
sqlId: RegionSearch
type: widget
navIgnore: false
tags:
  - wms/widget/RegionSearch
---

## 库区检索
>[!widget] RegionSearch  
> 区域检索  
> 
> sqlId: RegionSearch
  
### SQL
```sql
select region_id,region_name,region_code from bas_region
        <where>
            --@ and wh_id = #{wh_id, javaType=long}
            ${@com.galaxis.wms.ext.Sql@phrase('AND', 'region_code like', 'region_name like')}
            --# and #
        </where>
```

### 字段
总共 `3` 个

| 字段  | 描述  |
| --- | --- |
| region_id | 区域ID |
| region_code | 区域编号 |
| region_name | 区域名称 |

