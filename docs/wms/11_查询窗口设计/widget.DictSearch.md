---
title: 字典项检索
desc: 字典项检索
name: DictSearch
columnCount: 3
sqlId: DictSearch
type: widget
navIgnore: false
tags:
  - wms/widget/DictSearch
---

## 库区检索
>[!widget] DictSearch  
> 字典项检索  
> 
> sqlId: DictSearch
  
### SQL
```sql
select dict_code, dict_desc, dict_type, is_dynamic from sys_dictionary
        --# and #
```

### 字段
总共 `3` 个

| 字段  | 描述  |
| --- | --- |
| dict_code | 字典编号 |
| dict_desc | 字典描述 |
| dict_type | 字典类别 |

