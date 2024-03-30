---
title: 包装检索
desc: 包装检索
name: ItemPackageSearch
columnCount: 40
sqlId: selectItemPackage
type: widget
navIgnore: false
tags:
  - wms/widget/ItemPackageSearch
---

## 库区检索
>[!widget] ItemPackageSearch  
> 包装检索  
> 
> sqlId: selectItemPackage
  
### SQL
```sql
SELECT
        bi.*,
        bp.pack_id,
        bp.pack_code,
        bp.pack_name,
        bpi.pack_item_id,
        bpi.pack_level,
        bpi.pack_meas,
        bpi.pack_unit,
        bpi.is_unpack,
        bpi.is_master,
        bpi.length,
        bpi.width,
        bpi.high,
        bpi.volume,
        bpi.weight,
        bpi.cno,
        bpi.cno_box_num
        FROM
        bas_item bi
        LEFT JOIN bas_package bp ON bi.item_id = bp.item_id
        LEFT JOIN bas_package_items bpi ON bpi.pack_id = bp.pack_id and bpi.pack_level = '0003'
        WHERE 1 = 1
        <if test="#obj.notEmpty(item_id)">
            AND bi.item_id = #{item_id, javaType=long}
        </if>
        <choose>
            <when test="#obj.notEmpty(owner_id)">
                and bi.owner_id =#{owner_id, javaType=long}
            </when>
            <otherwise>
                <if test="#obj.notEmpty(ownerArr)">
                    AND bi.owner_id in (#{ownerArr})
                </if>
            </otherwise>
        </choose>
        ${@com.galaxis.wms.ext.Sql@phrase('AND', 'bi.item_code like', 'bi.item_name like', 'bi.logogram like')}
        --# and bi.#
```

### 字段
总共 `40` 个

| 字段  | 描述  |
| --- | --- |
| item_id | 商品ID |
| owner_id | 货主ID |
| owner_code | 货主编号 |
| package_id | package_id |
| item_code | 商品编号 |
| item_name | 商品名称 |
| owner_name | 货主名称 |
| manufacturer | 厂家 |
| origin | 产地 |
| package_name | 包装名称 |
| package_level | 包装级别 |
| package_meas | 包装规格 |
| package_unit | 包装单位 |
| logogram | 助记码 |
| sku_desc | 描述 |
| stock_env | 储存条件 |
| item_classify | 一级分类 |
| item_category | 二级分类 |
| item_abc | ABC分类 |
| approval_no | 批准文号 |
| remark | 备注 |
| create_by | 创建人 |
| create_at | 创建时间 |
| update_by | 最后修改人 |
| update_at | 最后更新时间 |
| package_id | 包装ID |
| package_code | 包装编号(显示用) |
| package_supply_id | 供应商ID |
| package_item_id | 包装明细ID |
| is_unpack | 是否拆包 |
| is_master | 是否主单位 |
| length | 长 |
| width | 宽 |
| high | 高 |
| volume | 体积 |
| weight | 重量 |
| cno | 可堆叠层数 |
| cno_box_num | 每层箱数 |
| barcode | 条形码 |
| item_mhdhb | 货架寿命 |

