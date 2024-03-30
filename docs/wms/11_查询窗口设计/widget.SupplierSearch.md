---
title: 供应商检索
desc: 供应商检索
name: SupplierSearch
columnCount: 8
sqlId: SupplierSearch
type: widget
navIgnore: false
tags:
  - wms/widget/SupplierSearch
---

## 库区检索
>[!widget] SupplierSearch  
> 供应商检索  
> 
> sqlId: SupplierSearch
  
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
            and bc.custom_type = '0001'
            ${@com.galaxis.wms.ext.Sql@phrase('AND', 'bc.customer_name like', 'bc.customer_code like')}
            --# and #
        </where>
```

### 字段
总共 `8` 个

| 字段  | 描述  |
| --- | --- |
| customer_id | null |
| customer_code | 供应商编号 |
| custom_type | 客户类型 |
| customer_name | 供应商名称 |
| address | 地址 |
| remark | 备注 |
| create_by | 创建人 |
| update_by | 更新人 |

