---
title: 用户检索
desc: 用户检索
name: UserSearch
columnCount: 4
sqlId: selectUser
type: widget
navIgnore: false
tags:
  - wms/widget/UserSearch
---

## 库区检索
>[!widget] UserSearch  
> 用户检索  
> 
> sqlId: selectUser
  
### SQL
```sql
SELECT DISTINCT
        a.user_id,
        a.user_code,
        a.user_name,
        a.is_enable
        FROM
        bas_user a
        WHERE
        a.is_enable = '0001'
        ${@com.galaxis.wms.ext.Sql@phrase('AND', 'a.user_name like', 'a.user_code like')}
        --# and a.#
```

### 字段
总共 `4` 个

| 字段  | 描述  |
| --- | --- |
| user_id | 角色id |
| user_code | 角色编号 |
| user_name | 角色名称 |
| is_enable | 是否启用 |

