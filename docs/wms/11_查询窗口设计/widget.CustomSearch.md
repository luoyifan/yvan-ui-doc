---
title: 客户检索
desc: 客户检索
name: CustomSearch
columnCount: 9
sqlId: selectCustom
type: widget
navIgnore: false
tags:
  - wms/widget/CustomSearch
---

## 库区检索
>[!widget] CustomSearch  
> 客户检索  
> 
> sqlId: selectCustom
  
### SQL
```sql
select bc.customer_id,
bc.customer_code,
bc.custom_type,
bc.customer_name,
bc.address,
bc.remark,
bc.is_enable,
bc.create_by,
bc.update_by,
bc.create_at,
bc.update_at
from bas_customer bc
<where>
    and bc.is_enable = '0001'
    --@ and bc.custom_type = #{custom_type}
    ${@com.galaxis.wms.ext.Sql@phrase('AND', 'bc.customer_name like', 'bc.customer_code like')}
    --# and bc.#
</where>
```

### 字段
总共 `9` 个

| 字段  | 描述  |
| --- | --- |
| customer_id | 客商ID |
| owner_id | 货主ID |
| custom_type | 客户类型 |
| customer_code | 客商编号 |
| customer_name | 客商名称 |
| create_by | 创建人 |
| create_at | 创建时间 |
| update_by | 最后修改人 |
| update_at | 最后更新时间 |

