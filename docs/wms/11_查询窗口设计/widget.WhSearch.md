---
title: 仓库检索
desc: 仓库检索
name: WhSearch
columnCount: 6
sqlId: selectWh
type: widget
navIgnore: false
tags:
  - wms/widget/WhSearch
---

## 库区检索
>[!widget] WhSearch  
> 仓库检索  
> 
> sqlId: selectWh
  
### SQL
```sql
select * from bas_wh where is_enable = '0001'
        ${@com.galaxis.wms.ext.Sql@phrase('AND', 'wh_code like', 'wh_name like')}
```

### 字段
总共 `6` 个

| 字段  | 描述  |
| --- | --- |
| wh_id | 仓库ID |
| wh_code | 仓库编码 |
| wh_name | 仓库名称 |
| org_code | 物流公司编码 |
| org_name | 物流公司名称 |
| org_contact_name | 联系人 |

