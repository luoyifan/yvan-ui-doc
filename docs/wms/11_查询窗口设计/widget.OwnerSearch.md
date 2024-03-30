---
title: 货主检索
desc: 货主检索
name: OwnerSearch
columnCount: 13
sqlId: selectOwner
type: widget
navIgnore: false
tags:
  - wms/widget/OwnerSearch
---

## 库区检索
>[!widget] OwnerSearch  
> 货主检索  
> 
> sqlId: selectOwner
  
### SQL
```sql
SELECT a.owner_id, a.owner_code, a.owner_name, a.logogram, a.contact, a.telephone, a.province, a.city, a.zip,
        a.address,
        a.remark, a.is_default_owner, a.is_enable
        FROM bas_owner a
        WHERE a.is_enable = '0001'
        --@ and a.onwer_id = #{onwer_id, javaType=long}
        --% and a.onwer_code like #{onwer_code}
        --% and a.onwer_name like #{onwer_name}
```

### 字段
总共 `13` 个

| 字段  | 描述  |
| --- | --- |
| owner_id | 货主ID |
| owner_code | 货主编号 |
| owner_name | 货主名称 |
| logogram | 助记码 |
| contact | 联系人 |
| telephone | 电话 |
| province | 省 |
| city | 市 |
| address | 地址 |
| zip | 邮编 |
| is_enable | 是否启用 |
| is__owner | 是否默认货主 |
| remark | 备注 |

