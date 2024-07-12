---
title: 后台编码规范
date: 2024-03-29 22:02
author: yvan
---

# 数据库规范

## 表名规范

- bas_* 基础资料
- doc_* 单据类
- inv_* 库存类
- sys_* 系统类
- dev_* 开发辅助
- rule_* 规则类
- api_* 接口类
- upload_* 上传类

## 设计原则

- **用二开平台建表！统一数据结构和实体建设**
- **表中必须有：创建(更新)时间 create_at / update_at 字段**
- **表中必须有：创建(更新)人 create_by / update_by 字段**
- **所有字符串类型字段必填(NotNull)，且使用 ‘N/A’ 做空值**
- **每张表必须建立主键，主键尽量保持 bigint 类型**
- **存储精确浮点数必须使用 Number(DECIMAL)→BigDecimal 替代 FLOAT 和 DOUBLE**
- **库名、表名、字段名必须小写，下划线命名规范，不超过20个字符。Oracle有限制**
- **建议使用 InnoDB 存储引擎。**
- **禁用自增长( auto_increment ), 不允许任何表用自增长列，自增长会带来严重的数据同步问题**
- **ID使用 bigint 类型，并且用雪花算法 ( `*DAO*.snowId()` ) 生成 long 类型的编号**
- **将过大字段拆分到其他表中，大字段单独建表，一张表不超过1个大字段**
- 控制单表数据量，单表记录控制在千万级
- 控制列数量，字段数控制在30以内
- 平衡范式与冗余，为提高效率可以牺牲范式设计，冗余数据
- 前期不要拆库，保持一个库，不要自己做Hash分表，后期交给DBA来做。（尽量不分表，idx优于union、用搜索引擎优于数据库）
- 避免使用外键、触发器
- 表字符集选择UTF8
- 视图名以 vw_ 开头 / 索引名以 idx_ 开头
- 库名、表名、字段名见名知意,建议使用名词而不是动词。
- 字段名、表名必须有注释
- 存储时间（精确到秒）建议使用TIMESTAMP类型
- **禁止在数据库中使用VARBINARY、BLOB存储图片、文件等**
- **建议字段定义为NOT NULL。 空值是不占用空间的， not null的效率比null高**
- 避免使用NULL字段 / NULL字段很难查询优化 / NULL字段的索引需要额外空间 / NULL字段的复合索引无效
- 不在数据库里存图片、文件
- 务必请使用“同类型”进行比较，否则可能全表扫面
- 尽量不使用动态SQL，避免SQL注入，利于SQL缓存
- SQL语句中IN包含的值不应过多
- 避免一条SQL超过6张表关联，减少left join使用
- **WHERE条件中必须使用合适的类型，避免MySQL进行隐式类型转化，使用 javaType=long 在程序层面优化数据类型**
- WHERE条件中的非等值条件（IN、BETWEEN、<、<=、>、>=）会导致后面的条件使用不了索引

### 索引类

- 每张表必须有主键，主键建立聚簇索引，主键不应该被修改，字符串不应该做主键
- 谨慎合理使用索引
- 改善查询、减慢更新
- 索引一定不是越多越好（能不加就不加，要加的一定得加）
- 覆盖记录条数过多不适合建索引，例如“性别”
- 不在索引做列运算
  bad case：
  select id where age +1 = 10;
- 不用外键，请由程序保证约束
- 非唯一索引必须按照“idx_字段名称_字段名称[_字段名]”进行命名
- 唯一索引必须按照“uniq_字段名称_字段名称[_字段名]”进行命名
- 索引名称必须使用小写
- 索引中的字段数建议不超过5个
- 单张表的索引数量控制在5个以内
- 唯一键由3个以下字段组成，并且字段都是整形时，使用唯一键作为主键
- 没有唯一键或者唯一键不符合5中的条件时，使用自增（或者通过发号器获取）id作为主键
- 唯一键不和主键重复
- 索引字段的顺序需要考虑字段值去重之后的个数，个数多的放在前面
- ORDER BY，GROUP BY，DISTINCT的字段需要添加在索引的后面
- UPDATE、DELETE语句需要根据WHERE条件添加索引
- 合理创建联合索引（避免冗余），(a,b,c) 相当于 (a) 、(a,b) 、(a,b,c)
- 合理利用覆盖索引

### SQL规范

- SQL语句尽可能简单
- 一条sql只能在一个cpu运算，大语句拆小语句，减少锁时间，一条大sql可以堵死整个库
- 简单的事务, 事务时间尽可能短
  bad case：上传图片事务
- 避免使用存储过程、触发器、函数
- OR改写为IN()
- OR改写为UNION
- limit高效分页
- 使用union all替代union，union有去重开销
- 避免在SQL语句进行数学运算或者函数运算，容易将业务逻辑和DB耦合在一起
- INSERT语句使用batch提交（INSERT INTO tableVALUES(),(),()……），values的个数不应过多
- 使用合理的SQL语句减少与数据库的交互次数
- 不使用ORDER BY RAND()，使用其他方法替换
- 建议使用合理的分页方式以提高分页的效率
- 统计表中记录数时避免使用COUNT(*)，是COUNT(primary_key)和COUNT(1)
- 不存在就插入、存在就只更新某几个字段，这类sql时，可以使用 INSERT INTO ... VALUES ... ON DUPLICATE ... 语句

# 后端编码规范

后端编码既可以用 Java 语言，也可以使用 Groovy 语言。Java语言比较严谨，且编译速度较快。Groovy语言写法灵活，且可以**及改既生效**。

虽然项目是 SpringBoot 结构，且支持最传统的 SpringMVC 框架，然而在实际过程中，推荐使用静态方法完成业务开发，使用MVC规范可能会造成项目启动慢，且无法**及改既生效**，可能影响业务开发效率。

- 前端传回的数据都是字符串类型，数据类型转换，使用 Conv.asLong / Conv.asDecimal / Conv.asBoolean 等，避免报错；

## 使用静态方法

替代传统 SpringMVC 写法

### 后端 groovy 方法

```jsx
package com.galaxis.wms.bas

import groovy.util.logging.Slf4j

@Slf4j
class Address {
    final static queryDsl= DaoFactory.getQueryDSL()
    final static dao= DaoFactory.getDao(Address.class)
    
    def static save(params) {
        BasAddress address = new BasAddress()
        address.setAddrId(dao.snowId("bas_address"))
        address.setParentId(DbConv.asLong(params.parent_id))
        address.setDivCode(DbConv.asString(params.div_code))
        address.setDivName(DbConv.asString(params.div_name))
        address.setDivType(DbConv.asString(params.div_type))
        address.setIsEnable(DbConv.asString(params.is_enable))
        long rowEffect = queryDsl.insert(QBasAddress.basAddress)
                .populate(address)
                .execute()
        return Model.newSuccess(rowEffect)
    }
}
```

### 前端 js 调用

```jsx
system.showLoading()
system.invokeServer("/wms/bas/Address@save", res.data).then(res => {
    if (res.success) {
        system.msg("更新成功")
        this.refs.addressGrid.reload()
    }
    
}).finally(() => {
    system.clearLoading()
})
```

### 实际包体

```jsx
POST

/api/com/galaxis/wms/bas/Address@save

{
	"args": [
		{
			"parent_id": 1,
			"div_code": "A",
			"div_name": "B",
			"div_type": "C",
			"is_enable": "0001"
		}
	]
}
```

## 返回值使用 Model[T] 包裹

- 业务异常返回示例

```java
public static Model<Integer> saveModuleToFile(Map<String, Object> params) {
	String resourceUrl= Conv.asString(params.get("resourceUrl"));
		
	if (Strings.isNullOrEmpty(resourceUrl)) {
	    return Model.newFail("写入模块，必须包含 resourceUrl 内容");
	}
	...
}
```

- 业务异常返回示例(Groovy)

```groovy
static def saveModuleToFile(params) {
	String resourceUrl= Conv.asString(params.resourceUrl);
	
	if (Strings.isNullOrEmpty(resourceUrl)) {
	    return Model.newFail("写入模块，必须包含 resourceUrl 内容");
	}
	...
}
```

- 更新，返回示例

```groovy
int rowEffected = 0;

// 更改数据，使用 QueryDSL
rowEffected += queryDsl.update(sysResource)
        .set(sysResource.resourceType, resourceType)
        .where(sysResource.resourceId.eq(resourceId))
        .where(sysResource.sysApp.eq(sysApp))
        .execute();

return ModelOps.newSuccess(rowEffected);
```

- 批量更新，返回示例

```groovy
// 批量更新，执行性能是单个执行的10倍以上
SQLUpdateClause batchUpdate = queryDsl.update(sysResource);

for(...) {
	// for 循环中增加批量作业
	batchUpdate
		.set(sysResource.resourceParentId, key)
		.set(sysResource.resourceSort, resourceSort)
		.where(sysResource.sysApp.eq(app_key))
		.where(sysResource.resourceId.eq(resourceId))
		.addBatch();
}

long rowEffect = 0;
if (batchUpdate.getBatchCount() > 0) {
		// 批量作业数 > 0 批量执行
    rowEffect = batchUpdate.execute();
}
return ModelOps.newSuccess(rowEffect);
```

- 返回表单示例

```java
import com.yvan.core.YvanUtil;

...

Map<String,Object> row = Maps.newLinkedHashMap();
row.put("sysAppRow", sysAppRow);
row.put("resourceRow", resourceRow,);
row.put("moduleContent", content);
return Model.newSuccess(row);

// 或者
return Model.newSuccess(YvanUtil.buildMap(
        "sysAppRow", sysAppRow,
        "resourceRow", resourceRow,
        "moduleContent", content,
));
```

- 查询数据，返回示例

```java
List<SysRuleFact> list = querydsl.select(Projections.bean(
                SysRuleFact.class,
                sysRuleFact.factCode,
                sysRuleFact.factName,
                sysRuleFact.factFieldsJson
        )).from(sysRuleFact)
        .orderBy(sysRuleFact.factCode.asc())
        .fetch();

return Model.newSuccess(list);
```

- 查询数据，分页查询，并分页返回示例(groovy)

```groovy
// 使用 mybatis
def mybatis = DaoFactory.getMyBatis(Widget.class)
String sqlId = "queryItem"

def list = mybatis.queryByPage(sqlId, YvanExt.getQueryByPage(), params)
return Model.newSuccess(list)

// 使用 jdbc
def jdbc = DaoFactory.getJdbc();
def sql = "select * from table1 where f1=#{f1} and f2=#{f2}"
IPage<Map<String, Object>> page = jdbc.queryByPage(sql , YvanExt.getQueryByPage(), [
  f1: 11,
  f2: 'bb'
])
return ModelOps.newSuccess(page)
```

## 使用 QueryDSL 完成数据更新

```jsx
long rowEffect = 0
//处理质检状态
rowEffect += queryDsl.update(docInspectItems).set(docInspectItems.inspectStatus,CInInspectStatus.IN_INSPECT_OVER)
        .where(
	        docInspectItems.inspectId.eq(inspectId) & 
	        docInspectItems.inspectLineNo.in(lineList) & 
	        docInspectItems.inspectStatus.lt(CInInspectStatus.IN_INSPECT_OVER) & 
	        docInspectItems.qty.eq(docInspectItems.rejectQty.add(docInspectItems.inspectQty))
        )
        .execute()
        
rowEffect += queryDsl.update(docInspectItems)
				.set(docInspectItems.inspectStatus,CInInspectStatus.IN_INSPECT_BE)
        .where(
	        docInspectItems.inspectId.eq(inspectId) & 
	        docInspectItems.inspectLineNo.in(lineList) & 
	        docInspectItems.inspectStatus.lt(CInInspectStatus.IN_INSPECT_BE) & 
	        docInspectItems.rejectQty.gt(BigDecimal.ZERO) & 
	        docInspectItems.inspectQty.gt(BigDecimal.ZERO)
	      )
        .execute()
        
String minInspectStatus = queryDsl.select(docInspectItems.inspectStatus.min())
				.from(docInspectItems)
				.where(docInspectItems.inspectId.eq(inspectId))
				.fetchFirst()
				
rowEffect += queryDsl.update(docInspect)
				.set(docInspect.inspectStatus,minInspectStatus)
        .where(
		        docInspect.inspectId.eq(inspectId) & 
		        docInspect.inspectStatus.ne(minInspectStatus)
		    )
        .execute()

// 批量更新
SQLUpdateClause updateAsnItems = queryDsl.update(docAsnItems)
for(Map.Entry<String,List<LinkedHashMap<String, ?>>> entry : asnLineGroup.entrySet()) {
    BigDecimal rejectQty = DbConv.asDecimal(entry.getValue().sum({a -> a.reject_qty}))
    updateAsnItems
				    .set(docAsnItems.inspectQty,docAsnItems.inspectQty.add(inspectQty))
            .set(docAsnItems.inspectRejectQty,docAsnItems.inspectRejectQty.add(rejectQty))
            .where(docAsnItems.asnId.eq(asnId) & docAsnItems.asnLineNo.eq(asnLineNo))
            .addBatch()
}

if (updateAsnItems.getBatchCount() > 0) {
		// 批量作业数 > 0 批量执行
    rowEffect += updateAsnItems.execute();
}

return ModelOps.newSuccess(rowEffect)
```

## 使用 QueryDSL 完成简单数据查询

```groovy
package com.galaxis.wms.inbound

@Slf4j
class ReceiptCheck {
	static def queryReceiptItem(params) {
	    Long receiptId = Conv.asLong(BaseAssert.checkParam(params, "receipt_id", "收货单ID不能为空"))
	    Integer receiptLineNo = Conv.asInteger(BaseAssert.checkParam(params, "receipt_line_no", "收货单明细行号不能为空"))
	    def receiptItems = queryDsl
	        .select(
	            [
	                QDocReceiptItems.docReceiptItems,
	                QBasItem.basItem.itemCode,
	                QBasItem.basItem.itemName,
	                QBasItem.basItem.itemSpecification,
	                QDocAsnItems.docAsnItems,
	                QDocAsnItems.docAsnItems.qty.subtract(QDocAsnItems.docAsnItems.receiptQty).subtract(QDocAsnItems.docAsnItems.rejectedQty).as("unreceipt_qty"),
	                QDocAsnItems.docAsnItems.receiptQty.subtract(QDocAsnItems.docAsnItems.inspectedQty).subtract(QDocAsnItems.docAsnItems.inspectRejectedQty).as("uninspected_qty"),
	                QBasPackageItems.basPackageItems.packUnit,
	                QBasPackageItems.basPackageItems.packMeas
	            ].linkedMap())
	        .from(QDocReceiptItems.docReceiptItems)
	        .leftJoin(QDocAsnItems.docAsnItems).on(QDocAsnItems.docAsnItems.asnId.eq(QDocReceiptItems.docReceiptItems.asnId) & QDocAsnItems.docAsnItems.asnLineNo.eq(QDocReceiptItems.docReceiptItems.asnLineNo))
	        .leftJoin(QBasItem.basItem).on(QBasItem.basItem.itemId.eq(QDocReceiptItems.docReceiptItems.itemId))
	        .leftJoin(QBasPackageItems.basPackageItems).on(QBasPackageItems.basPackageItems.packId.eq(QDocReceiptItems.docReceiptItems.packageId) & QBasPackageItems.basPackageItems.packLevel.eq(CPackLevel.BASE))
	        .where(QDocReceiptItems.docReceiptItems.receiptId.eq(receiptId))
	        .where(QDocReceiptItems.docReceiptItems.receiptLineNo.eq(receiptLineNo))
	        .fetch();
	    BaseAssert.isEmpty(receiptItems, "没有该条明细")
	    def receiptItem = receiptItems[0]
	    return Model.newSuccess([receiptItem: receiptItem]);
	}
}
```

## 使用 MyBatis 完成复杂数据查询

- 使用静态成员变量，拿到当前类的 MyBatis 实例
- 在当前类的所在位置，建立同名 xml 文件作为 Mybatis 内容
- 比如有一个 groovy 类，名称为 Device.groovy:

```groovy
class Device {
    static def queryDsl = DaoFactory.getQueryDSL()
    static def myBatis = DaoFactory.getMyBatis(Device.class)

    def static loadFromDb(params) {
        params.wh_id = DbConv.asLong(WhIdHolder.getWhId())
        def pageOfList = myBatis.queryByPage("deviceGridQueryData", YvanExt.getQueryByPage(), params)
        return Model.newSuccess(pageOfList)
    }
}
```

- 在同一路径下建立 Device.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<mapper namespace="">
	<select id="deviceGridQueryData">
	select 
		device.*,
	    bw.wh_name
	from bas_device device
	left join bas_wh bw on bw.wh_id = device.wh_id
	-- where device,bw
	order by device.device_id
	</select><select id="deviceRelGridQueryData">
	select t.*, bl.loc_code, bl.device_pos from bas_device_location_rel t 
	left join bas_location bl on bl.loc_id = t.loc_id
	where t.device_id = #{device_id}::numeric
	</select>
</mapper>
```

- 使用 DaoFactory.getMyBatis(Device.class) 即可完成对应 xml 文件的查询操作
- queryByPage 方法，完成分页的读取

```groovy
def pageOfList = myBatis.queryByPage("deviceGridQueryData", YvanExt.getQueryByPage(), params)
return Model.newSuccess(pageOfList)
```