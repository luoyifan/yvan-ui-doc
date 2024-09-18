---
title: MyBatis框架特性
date: 2024-08-06
author: yvan
---

# MyBatis框架特性
二开平台中的查询语句都是 MyBatis 语法, 下面介绍，框架中独特支持的语法糖

## 语法糖 --@
- --@ 用于判断变量是否有值，有值的情况下才附带 "=" 等值语句, 比如：
```
<#if test="loc_code != null && loc_code != ''">
  and loc.loc_code = #{loc_code}
</#if>

语法糖写法：

--@ and loc.loc_code = #{loc_code}
```

- --@ 只能适用于后面只带一个变量的情况，如果有多个变量，不适用
- 综合示例
```sql
select
    loc.* ,
    wh.wh_name,
    region.region_name,
    wh_area.wh_area_name
from bas_location loc
    left join bas_wh wh on wh.wh_id = loc.wh_id
    left join bas_wh_area wh_area on wh_area.wh_area_id = loc.wh_area_id
    left join bas_region region on region.region_id = loc.region_id
<where>
    --@ wh_area.wh_area_id = #{wh_area_id, javaType=long}
    --@ loc.loc_code = #{loc_code}
    --@ loc.road_code = #{road_code}
    --@ loc.row_no = #{row_no}
    --@ loc.column_no = #{column_no}
    --@ loc.cno = #{cno}
</where>
order by loc.loc_id
```

## 语法糖 --%
- --% 用于判断变量是否有值，有值的情况下附带字符串 like 语句, 比如：
```
<#if test="loc_code != null && loc_code != ''">
  and loc.loc_code like '%' + #{loc_code} + '%'
</#if>

语法糖写法：

--% and loc.loc_code like #{loc_code}
```

- 综合示例
```sql
SELECT 
    a.owner_id, 
    a.owner_code, 
    a.owner_name, 
    a.logogram, 
    a.contact, 
    a.telephone, 
    a.province, 
    a.city, 
    a.zip,
    a.address,
    a.remark, 
    a.is_default_owner, 
    a.is_enable
FROM bas_owner a
WHERE 
    a.is_enable = '0001'
    --@ and a.onwer_id = #{onwer_id, javaType=long}
    --% and a.onwer_code like #{onwer_code}
    --% and a.onwer_name like #{onwer_name}
```

## 语法糖 --where
- --<空格>where 是筛选条件占位符
- 用于在表格筛选条件中，生成 where 条件
- 比如: SQL语句设置
![[img_mybatis2.png]]

```sql
select 
	t.* 
from bas_container t
-- where t
```

- 客户端筛选条件
![[img_mybatis3.png]]

- 框架自动根据前端筛选条件，生成SQL语句
```sql
SELECT 
    t.* 
FROM bas_container t 
WHERE 
    t.container_code LIKE '%22%'
```

- 当有多张表的情况下，需要都加上, 比如
```sql
select 
    t.*,
    t1.*,
    t2.*,
    t3.*,
    t4.*
from gsp_quality_review_supply t
left join bas_item t1 on t1.item_id=t.item_id
left join inv_lot_att t2 on t2.lot_id=t.lot_id
left join bas_package t3 on t3.pack_id=t2.pack_id
left join bas_package_items t4 on t4.pack_id=t2.pack_id and t4.pack_level='0001'
-- where t,t1,t2,t3,t4
```

## 语法糖 --i
- --i 用于判断变量是否有值，有值的情况下用 foreach 判断集合 in ：
语法糖写法
```SQL
select *  from sys_app where is_enable='0001'
--i and app_key in #{appKeys}
```

数据
```json
{
    "appKeys": [
        "tms",
        "wms"
    ]
}
```

转换后的SQL
```SQL
select *  from sys_app where is_enable='0001' 
and app_key in ('tms','wms')
```

- 带类型也同样适用
```SQL
select * from bas_item t where t.is_enable='0001'
--i and t.item_id in #{appKeys, javaType=long}
```

### 多值 in 情况
语法糖写法
```SQL
select * from bas_package_items t where t.is_enable='0001'
--i and (t.item_id, t.pack_level) in #{appKeys} (#{.id, javaType=long}, #{.level})
```

数据是
```json
{
  "appKeys": [
    {
      "id": 433050315521925957,
      "level": "0001"
    },
    {
      "id": 433050315521925957,
      "level": "0003"
    },
    {
      "id": 433050327660241734,
      "level": "0001"
    },
    {
      "id": 433050327660241734,
      "level": "0002"
    }
  ]
}
```

转换后的SQL
```SQL
select * from bas_package_items t where t.is_enable='0001'
and (t.item_id, t.pack_level) in (
  (433050315521925957, '0001'),
  (433050315521925957, '0003'),
  (433050327660241734, '0001'),
  (433050327660241734, '0002')
)
```

## 语法糖 --#
- --# 叫字段替代占位符
- 只能用在二开中的 "数据字典" 定义中
- 用于基于数据字典的ID/Text翻译特性，比如：

![[img_mybatis1.png]]

- 数据窗口的SQL内容
```sql
select
    u.user_id,
    u.user_code,
    u.user_name,
    u.is_enable,
    u.org_id,
    u.staff_no,
    a.login_id 
from bas_login_agent a
inner join bas_user u on a.user_id=u.user_id
    --# and a.#
```

- 实际转换后的效果
```sql
select
  a.login_id as code
  u.user_name as text
from bas_login_agent a
inner join bas_user u on a.user_id=u.user_id
    and a.login_id in (10001,10002,10003)
```

- 综合示例
```sql
select 
    bc.customer_id,
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
where
    bc.is_enable = '0001'
    --@ and bc.custom_type = #{custom_type}
    ${@com.galaxis.wms.ext.Sql@phrase('AND', 'bc.customer_name like', 'bc.customer_code like')}
    --# and bc.#
order by bc.customer_id
```

## 短句查询 phrase
- 短句查询只能用在二开中的 "数据字典" 定义中
- 短句查询，是指某个字符串，在多个字段做匹配（有的字段是 like ，有的字段用 = ）
- 必须全部包含，且可以跨字段匹配
- 语法是: com.galaxis.wms.ext.Sql@phrase('AND', '字段1', '字段2' ...)
比如，搜索:  0001 sp1
如果配上 com.galaxis.wms.ext.Sql@phrase('AND', 'a.item_code like', 'a.item_id')

生成的sql就是
```sql
and (a.item_code like '%0001%' or a.item_id = '0001')
and (a.item_code like '%sp1%' or a.item_id = 'sp1')
```

## use_raw_sql 忽略数据权限
在系统框架中，如果查询的第一张表带有 wh_id / owner_id 字段，会自动加上数据权限的过滤条件。比如
```sql 
SELECT t.* FROM bas_customer t
```
系统会自动加上
```sql
SELECT t.* FROM bas_customer t
 WHERE t.owner_id IN (101)
```

如果要忽略这个特性，可以在SQL语句的第一行加上 --use_raw_sql
```sql
--use_raw_sql
SELECT a.owner_id, a.owner_code, a.owner_name, a.logogram, a.contact, a.telephone, a.province, a.city, a.zip,
       a.address,
       a.remark, a.is_default_owner, a.is_enable
FROM bas_owner a
WHERE a.is_enable = '0001'
```
或者在 JAVA 中禁用 SQL 重写
```java
import com.galaxis.wms.ext.SQLRewriteHolder;

try {
        SQLRewriteHolder.disable();
} finally {
        SQLRewriteHolder.enable();
}
```
        }
```

- 综合示例
```sql
SELECT
    item_id,
    owner_id,
    item_code,
    item_name,
    logogram,
    item_desc,
    is_enable
FROM bas_item
<where>
    --@ and item_id = #{item_id, javaType=long}
    --% and item_name like #{item_name}
    ${@com.galaxis.wms.ext.Sql@phrase('AND', 'item_code like', 'item_name like', 'logogram like')}
    --# and bas_item.#
</where>
```


# MyBatis常规语法
> 常见语法参考: [https://www.cnblogs.com/journeyIT/p/10254941.html](https://www.cnblogs.com/journeyIT/p/10254941.html)

### foreach
```xml
<if test="status != null">
	and status in
	<foreach item="item" collection="status" separator="," open="(" close=")" index="index">  
	  #{item, jdbcType=TINYINT}
	</foreach> 
</if> 
```

### if
```xml
<if test="subjectNo != null and subjectNo != '' ">
	and subject_no = #{subjectNo,jdbcType=VARCHAR}
</if>
```

### choose
```xml
<choose>
	<!-- 周 -->
	<when test="dateType == 'WEEK' ">
	concat(DATE_FORMAT(statistic_time ,'%X-%V'),'(周)') as statisticTime,
	</when>
	<!-- 月 -->
	<when test="dateType == 'MONTH' ">
	DATE_FORMAT(statistic_time ,'%Y-%m') as statisticTime,
	</when>
	<!-- 年 -->
	<when test="dateType == 'YEAR' ">
	DATE_FORMAT(statistic_time ,'%Y') as statisticTime,
	</when>
	<!-- 默认 日 -->
	<otherwise>
	DATE_FORMAT(statistic_time ,'%Y-%m-%d') as statisticTime,
	</otherwise>
</choose>
```

### insert
```xml
<insert id="itemPublish" parameterType="item" useGeneratedKeys="true" keyProperty="id">
    insert into item (platform_id, seller_id,
      shop_id, supply_seller_id, supply_shop_id, operator_id,
      item_name, cid,second_cid, brand_id,
      unit, origin, ad,
      category_attributes, spec_attributes, sale_status,
      packing_list, describe_url, created,
      modified, shop_cid, listing_time,
      delisting_time, operator,
      add_source, store_status, yn,copy_status,publishuserId,industry_label,
      cash_coupon_support,meet_coupon_support,vip_discount_support,detail_page_qrcode
      )
    values ( #{platformId,jdbcType=BIGINT}, #{sellerId,jdbcType=BIGINT},
      #{shopId,jdbcType=BIGINT}, #{supplySellerId,jdbcType=BIGINT}, #{supplyShopId,jdbcType=BIGINT}, #{operatorId,jdbcType=INTEGER},
      #{itemName,jdbcType=VARCHAR}, #{cid,jdbcType=BIGINT},#{secondCid}, #{brandId,jdbcType=BIGINT},
      #{unit,jdbcType=VARCHAR}, #{origin,jdbcType=VARCHAR}, #{ad,jdbcType=VARCHAR},
      #{categoryAttributes,jdbcType=VARCHAR}, #{specAttributes,jdbcType=VARCHAR}, #{saleStatus,jdbcType=INTEGER},
      #{packingList,jdbcType=VARCHAR}, #{describeUrl,jdbcType=VARCHAR}, now(),
      now(),#{shopCid,jdbcType=BIGINT},#{listingTime,jdbcType=TIMESTAMP},
      #{delistingTime,jdbcType=TIMESTAMP}, #{operator,jdbcType=INTEGER},
      #{addSource,jdbcType=INTEGER},#{storeStatus,jdbcType=INTEGER},1,#{copyStatus,jdbcType=INTEGER}, #{publishuserId,jdbcType=BIGINT},#{industryLabel,jdbcType=VARCHAR},
      #{cashCouponSupport,jdbcType=INTEGER},#{meetCouponSupport,jdbcType=INTEGER},#{vipDiscountSupport,jdbcType=INTEGER},#{detailPageQrcode,jdbcType=VARCHAR}
      )
  </insert>
```

### update
```xml
<update id="updateSaleStatus" parameterType="map">
    UPDATE item
    <set>
        store_status = #{storeStatus},
        <if test="saleStatus != null">
            sale_status = #{saleStatus}
        </if>
    </set>
    WHERE id = #{itemId}
    AND platform_id = #{platformId}
  </update>

<update id="updateItem" parameterType="itemPublish">
        update item set
        operator_id=#{operatorId,jdbcType=INTEGER},item_name=#{itemName,jdbcType=VARCHAR},cid=#{cid,jdbcType=BIGINT},second_cid=#{secondCid},brand_id=#{brandId,jdbcType=BIGINT},
        unit=#{unit,jdbcType=VARCHAR},origin=#{origin,jdbcType=VARCHAR},ad=#{ad,jdbcType=VARCHAR},category_attributes=#{categoryAttributes,jdbcType=VARCHAR},
        spec_attributes=#{specAttributes,jdbcType=VARCHAR},sale_status=#{saleStatus},store_status = #{storeStatus},
        packing_list=#{packingList,jdbcType=VARCHAR},describe_url=#{describeUrl,jdbcType=VARCHAR},shop_cid=#{shopCid,jdbcType=BIGINT},
        operator=#{operator,jdbcType=INTEGER},industry_label=#{industryLabel},
        cash_coupon_support=#{cashCouponSupport},meet_coupon_support=#{meetCouponSupport},vip_discount_support=#{vipDiscountSupport}
        <if test="publishuserId != null">
            ,publishuserId=#{publishuserId}
        </if>
        where id=#{id,jdbcType=BIGINT} and platform_id=#{platformId}  and yn=1
    </update>
```

### select
```xml
<select id="queryItems" parameterType="sellSupplyItemInfoVo" resultMap="SellSupplyItemMap">
        select DISTINCT i.id itemId,i.platform_id, i.item_name, sii.supply_seller_id, sii.supply_shop_id,ip.picture_url,
        category.cname1, category.cname2, category.cname3, category.cname4
        from shop_item_library sii
        JOIN item i
        on sii.item_id=i.id
        and i.store_status = 30
        and sii.supply_status = 0
        JOIN item_picture ip
        on i.id = ip.item_id
        LEFT JOIN item_sku isk
        on i.id = isk.item_id
        LEFT JOIN item_brand ib
        on i.brand_id = ib.id
        JOIN
        (
        SELECT c4.c_name cname1,c3.c_name cname2,c2.c_name cname3,c1.c_name cname4,c1.cid cid
        FROM item_category c1
        LEFT JOIN item_category c2 ON c1.parent_cid = c2.cid
        LEFT JOIN item_category c3 ON c2.parent_cid = c3.cid
        LEFT JOIN item_category c4 ON c3.parent_cid = c4.cid
        WHERE
        c1.platform_id = #{platformId}
        <if test="cid != null and cid != ''">
            And c1.cid= #{cid}
        </if>
        ) category ON i.cid = category.cid
        where sii.supply_seller_id = #{supplySellerId}
        AND i.platform_id = #{platformId}
        <if test="productCode != null and productCode != ''">
            AND isk.product_code LIKE CONCAT('%', #{productCode},'%' )
        </if>
        <if test="modelCode != null and modelCode != ''">
            AND isk.model_code LIKE CONCAT('%', #{modelCode},'%' )
        </if>
        <if test="itemName != null and itemName != ''">
            AND i.item_name LIKE CONCAT('%', #{itemName},'%' )
        </if>
    </select>

<select id="selectByExample" resultMap="BaseResultMap" parameterType="com....ItemImportExample" >
    select
    <if test="distinct" >
      distinct
    </if>
    'true' as QUERYID,
    <include refid="Base_Column_List" />
    from item_import_tmp
    <if test="_parameter != null" >
      <include refid="Example_Where_Clause" />
    </if>
    <if test="orderByClause != null" >
      order by ${orderByClause}
    </if>
  </select>
```