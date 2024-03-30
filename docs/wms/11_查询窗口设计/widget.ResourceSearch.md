---
title: 菜单检索
desc: 菜单检索
name: ResourceSearch
columnCount: 3
sqlId: ResourceSearch
type: widget
navIgnore: false
tags:
  - wms/widget/ResourceSearch
---

## 库区检索
>[!widget] ResourceSearch  
> 菜单检索  
> 
> sqlId: ResourceSearch
  
### SQL
```sql
select
        resource_id,
        resource_name,
        resource_url
        from sys_resource
        where resource_type = 'vjsonFile'
        ${@com.galaxis.wms.ext.Sql@phrase('AND', 'resource_name like')}
        --# and #
        order by resource_id
```

### 字段
总共 `3` 个

| 字段  | 描述  |
| --- | --- |
| resource_id | 菜单ID |
| resource_name | 菜单名称 |
| resource_url | 菜单URL |

