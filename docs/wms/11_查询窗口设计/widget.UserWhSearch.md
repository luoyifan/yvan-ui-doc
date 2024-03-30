---
title: 用户仓库检索
desc: 用户仓库检索
name: UserWhSearch
columnCount: 5
sqlId: UserWhSearch
type: widget
navIgnore: false
tags:
  - wms/widget/UserWhSearch
---

## 库区检索
>[!widget] UserWhSearch  
> 用户仓库检索  
> 
> sqlId: UserWhSearch
  
### SQL
```sql
select
        b.*
        from bas_user_owner_rel a left join bas_wh b on (a.wh_id = b.wh_id)
        where a.user_id=#{user_id, javaType=long}
        --# and a.#
        order by a.wh_id
```

### 字段
总共 `5` 个

| 字段  | 描述  |
| --- | --- |
| wh_id | 仓库ID |
| wh_name | 仓库名称 |
| logogram | 助记码 |
| director | 负责人 |
| address | 仓库地址 |

