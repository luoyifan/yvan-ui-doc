---
title: 数据库表查询
desc: 数据库表查询
name: DevTableSearch
columnCount: 4
sqlId: DevTableSearch
type: widget
navIgnore: false
tags:
  - wms/widget/DevTableSearch
---

## 库区检索
>[!widget] DevTableSearch  
> 数据库表查询  
> 
> sqlId: DevTableSearch
  
### SQL
```sql
select * from dev_table
        where 1 = 1
        --% and table_name like #{__queryValue}
        --# and #
```

### 字段
总共 `4` 个

| 字段  | 描述  |
| --- | --- |
| table_name | 数据表名 |
| schema_name | 数据库schema名称 |
| description | 描述 |
| attributes | 表属性 |

