---
title: 库区检索
desc: 库区检索
name: AreaSearch
columnCount: 6
sqlId: selectArea
type: widget
navIgnore: false
tags:
  - wms/widget/AreaSearch
---

## 库区检索
>[!widget] AreaSearch  
> 库区检索  
> 
> sqlId: selectArea
  
### SQL
```sql
select a.*
        from bas_wh_area a
        where a.is_enable = '0001'
        --@ and a.wh_id = #{wh_id, javaType=long}
        --% and (a.wh_area_code like #{wh_area_code} or a.wh_area_name like #{wh_area_code})
        --# and A.#
```

### 字段
总共 `6` 个

| 字段  | 描述  |
| --- | --- |
| wh_area_id | 库区ID |
| wh_id | 仓库ID |
| wh_area_code | 库区编号 |
| wh_area_name | 库区名称 |
| wh_area_classify | 库区分类 |
| director | 负责人 |

