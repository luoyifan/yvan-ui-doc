---
title: D_OWNER
desc: 货主
type: dict
tags:
  - wms
  - dict
  - dynamic
  - sql_dynamic
---
#wms/dict/dynamic

# title
>[!dict] D_OWNER
> 货主

# 查询语句
```sql
select t.owner_id dict_value, t.owner_name dict_text from bas_owner t
```
