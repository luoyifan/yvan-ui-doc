---
title: 商品检索
desc: 商品检索
name: ItemSearch
columnCount: 23
sqlId: selectItem
type: widget
navIgnore: false
tags:
  - wms/widget/ItemSearch
---

## 库区检索
>[!widget] ItemSearch  
> 商品检索  
> 
> sqlId: selectItem
  
### SQL
```sql
SELECT a.*
        FROM bas_item a
        WHERE a.is_enable = '0001'
        --% and (a.item_code like #{item_code} or a.item_name like #{item_code} or a.logogram like #{item_code})
```

### 字段
总共 `23` 个

| 字段  | 描述  |
| --- | --- |
| item_id | 商品ID |
| owner_id | 货主ID |
| item_code | 商品编号 |
| item_name | 商品名称 |
| owner_code | 货主编号 |
| owner_name | 货主名称 |
| barcode | 商品条码 |
| logogram | 助记码 |
| item_desc | 描述 |
| manufacturer | 厂家 |
| origin | 产地 |
| stock_env | 储存条件 |
| item_classify | 一级分类 |
| item_category | 二级分类 |
| item_abc | ABC分类 |
| approval_no | 批准文号 |
| item_mhdhb | 货架寿命 |
| remark | 备注 |
| create_by | 创建人 |
| create_at | 创建时间 |
| update_by | 最后修改人 |
| update_at | 最后更新时间 |
| item_specification | 商品规格 |

