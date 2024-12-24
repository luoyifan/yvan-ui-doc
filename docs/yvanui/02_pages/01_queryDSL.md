# queryDsl 框架特性

## 1. 概述

QueryDsl 是一个基于 Java 的领域特定语言（DSL）框架，用于构建类型安全的 SQL 查询。

- QueryDsl 通过代码生成器生成查询实体，通过实体类的方法链式调用来构建查询条件，最终生成 SQL 语句。
- QueryDsl 满足了 Java 开发者对 SQL 查询的需求，提供了更加灵活、类型安全的查询方式，避免了 SQL 注入等问题。
- QueryDsl 生成的 SQL 语句满足多表关联、分页、排序、分组等复杂查询需求。
- QueryDsl 生成的 SQL 语句满足多类型数据库的查询需求，如 MySQL、Oracle、SQL Server 等。无需关注数据库方言之间的差异。

## 2. 查询的使用

```java
// 引用 QueryDsl 类

import static com.galaxis.wms.query.QBasLoginAgent.basLoginAgent;
import static com.galaxis.wms.query.QBasStaff.basStaff;
import static com.galaxis.wms.query.QBasUser.basUser;

// 获取 master 数据源的 QueryDsl 对象
QueryDSL queryDsl = DaoFactory.getQueryDSL();

// 获取其他数据源的 QueryDsl 对象
QueryDSL queryDsl2 = DaoFactory.getQueryDSL("history");

// 单表单实体记录查询
BasLoginAgent loginAgent = queryDSL.select(basLoginAgent)
        .from(basLoginAgent)
        .where(basLoginAgent.authType.eq(CSysAuthType.PASSWORD))
        .where(basLoginAgent.userId.eq(user.getUserId()))
        .fetchFirst();
```

#### 获取单个值

```java
// 获取单个值
Long waveId = queryDSL.select(docAllocItems.waveId)
        .from(docAllocItems)
        .innerJoin(docAllocItemsRel)
        .on(docAllocItemsRel.allocId.eq(docAllocItems.allocId))
        .where(docAllocItems.isActive.eq(CSysYesNo.YES)
                .and(docAllocItems.outStatus.eq(COutStatus.OUT_WAVEALLOC_OVER))
                .and(docAllocItems.isRing.eq(CSysYesNo.YES))
                .and(docAllocItemsRel.virtualSoId.eq(0L).or(docAllocItemsRel.ringId.eq(0L)))
        )
        .orderBy(docAllocItems.priority.asc())
        .fetchFirst();
```

#### 获取下划线命名风格的字段记录 Map

```java
LinkedHashMap<String, ?> hashMap = queryDSL
        .select(QueryDslUtils.linkedMap(
                basLocation.locCode, basLocation.locId, basLocation.devicePos,
                basLocation.floors, basWhArea.whAreaType, basWhArea.whAreaName,
                basLocation.whId
        ))
        .from(basLocation)
        .innerJoin(basWhArea).on(basWhArea.whAreaId.eq(basLocation.whAreaId))
        .where(basLocation.locCode.eq(locCode).or(basLocation.devicePos.eq(locCode)))
        .fetchFirst();

String currWhAreaType = DbConv.asString(hashMap.get("wh_area_type"));
String currFloor = DbConv.asString(hashMap.get("floors"));
String currDevicePos = DbConv.asString(hashMap.get("device_pos"));
Long whId = DbConv.asLong(hashMap.get("wh_id"));
String currWhAreaName = DbConv.asString(hashMap.get("wh_area_name"));
```

#### 获取单行实体

```java
BasItem basItem = queryDsl.selectFrom(QBasItem.basItem)
        .where(QBasItem.basItem.itemCode.eq(item.getItem()))
        .where(QBasItem.basItem.ownerId.eq(ownerId))
        .fetchFirst();
```

#### 获取实体集合

```java
List<BasPackage> basPackageList = queryDsl
        .selectFrom(QBasPackage.basPackage)
        .where(QBasPackage.basPackage.itemId.eq(basItem.getItemId()))
        .fetch();
```

#### 处理链式条件拼接

```java
public static boolean function1() {

    SQLQuery<LinkedHashMap<String, ?>> query = queryDSL.select(QueryDslUtils.linkedMap(docTaskItems, basPackage.isShuttle, basPackage.isConveyor,
                    docTask.containerCode, basPackageItems.maxSupplyNum, basItemRecall.itemRecallId,
                    docTaskItems.qty.subtract(docTaskItems.pickQty).subtract(docTaskItems.cancelQty).subtract(docTaskItems.shortQty).as("now_pick_qty")))
            .from(docTaskItems)
            .leftJoin(docTask).on(docTask.taskId.eq(docTaskItems.taskId))
            .innerJoin(basPackage).on(basPackage.packId.eq(docTaskItems.packId))
            .innerJoin(basPackageItems).on(basPackageItems.packId.eq(docTaskItems.packId).and(basPackageItems.packLevel.eq(docTaskItems.targetPackLevel)))
            .innerJoin(invLotAtt).on(invLotAtt.lotId.eq(docTaskItems.lotId))
            .leftJoin(basItemRecall).on(basItemRecall.itemId.eq(docTaskItems.itemId).and(basItemRecall.whId.eq(docTaskItems.whId))
                    .and(basItemRecall.ownerId.eq(docTaskItems.ownerId)).and(basItemRecall.lot06.eq(invLotAtt.lot06)))
            .where(docTaskItems.outStatus.lt(COutStatus.OUT_PACK_OVER).and(docTaskItems.isActive.eq(CSysYesNo.YES)));

    if (StringUtils.isNotBlankAndNA(barcode)) {
        query.where(docTaskItems.lpn.eq(barcode));
    }

    if (null != taskItemsIdList && !taskItemsIdList.isEmpty()) {
        query.where(docTaskItems.taskItemsId.in(taskItemsIdList));
    }

}
```

#### 更复杂的查询

```java
public static boolean function1() {

    queryDsl.select(QueryDslUtils.linkedMap(
                    docPutItems.putId,
                    docPutItems.qty.subtract(docPutItems.cancelQty).as("item_qty"),
                    docPutItems.qty.subtract(docPutItems.cancelQty).multiply(basPackageItems.packWeight).as("item_weight"),
                    docPutItems.qty.subtract(docPutItems.cancelQty).subtract(docInboundPacking.qty.sum()).as("no_packing_qty"),
                    docPutItems.qty.subtract(docPutItems.cancelQty).subtract(docInboundPacking.qty.sum()).multiply(basPackageItems.packWeight).as("no_packing_weight"),
                    docInboundPacking.qty.multiply(basPackageItems.packWeight).sum().as("packing_weight"),
                    docInboundPacking.qty.sum().as("packing_qty"),
                    docPutItems.qty.subtract(docPutItems.cancelQty).subtract(docInboundPacking.qty.sum()).as("qty"),
                    docPutItems.qty.subtract(docPutItems.cancelQty).subtract(docInboundPacking.qty.sum()).as("plan_qty"),
                    invLotAtt.lot09.as("manufacturer"))
            )
            .from(docPutItems)
            .leftJoin(docInboundPacking).on(
                    docPutItems.putId.eq(docInboundPacking.putId)
                            .and(docPutItems.putLineNo.eq(docInboundPacking.putLineNo))
                            .and(docInboundPacking.packingStatus.lt(CPackingStatus.PACK_OVER))
                            .and(docInboundPacking.packingType.eq(packingType))
            )
            .innerJoin(basItem).on(basItem.itemId.eq(docPutItems.itemId))
            .innerJoin(basPackage).on(basPackage.packId.eq(docPutItems.packId))
            .innerJoin(invLotAtt).on(invLotAtt.lotId.eq(docPutItems.lotId))
            .innerJoin(basPackageItems).on(basPackageItems.packId.eq(basPackage.packId).and(basPackageItems.packLevel.eq(CPackLevel.BOX_PACK)))
            .where(docPutItems.barcode.eq(barcode).and(docPutItems.inStatus.lt(CInStatus.IN_PACKING_OVER)))
            .groupBy(docPutItems.putId, docPutItems.putLineNo, basItem.itemCode, basItem.itemName, basItem.commonName,
                    docPutItems.qty, docPutItems.cancelQty, basPackage.specification, invLotAtt.lot09, basPackage.producingArea,
                    invLotAtt, basItem.itemCategory, basItem.itemClassify, basPackageItems.packUnit, basPackageItems.packMeas, basPackageItems.packWeight,
                    basPackageItems.packWeightRatio, docPutItems.qty, docPutItems.cancelQty, basPackageItems.packWeight, basPackage.isCatchWeight)
            .fetch();

}
```

::: danger 请注意
过于复杂的 QueryDSL 虽然看起来很强大，但是会让代码变得难以维护。过于复杂的情况，请使用 MyBatis 进行查询。
:::

## 2. 删除 / 更新 / 插入的使用

#### 基本使用

```java
import com.yvan.data.jdbc.QueryDSL;

import com.galaxis.wms.query.QBasPackage;

import static com.galaxis.wms.query.QDocTask.docTask;
import static com.galaxis.wms.query.QDocTaskItems.docTaskItems;

public static void function1() {
    QueryDSL queryDSL = DaoFactory.getQueryDSL();

    queryDSL.update(docTask).set(docTask.isNotShow, CSysYesNo.YES)
            .where(docTask.taskGroup.eq(taskGroup)).execute();

    queryDSL.update(docTaskItems)
            .set(docTaskItems.outStatus, COutStatus.OUT_PICK_ING)
            .where(docTaskItems.taskId.in(taskIds).and(docTaskItems.isActive.eq(CSysYesNo.YES)))
            .execute();

    // populate 方法可以将实体类的属性值填充到 SQL 语句中
    BasPackage basPackage = new BasPackage();
    basPackage.setPackId(daoMain.snowId("PACK_ID"));
    basPackage.setItemId(basItem.getItemId());
    basPackage.setIsEnable(CSysYesNo.YES);
    basPackage.setSpecification(itemSpec);
    basPackage.setUpdateAt(DateUtils.toTimestamp(new Date()));
    basPackage.setIsDefault(CSysYesNo.YES);

    queryDsl.insert(QBasPackage.basPackage)
            .populate(basPackage)
            .execute();
}
```

#### 批量插入

QueryDSL 的批量插入使用了 JDBC 的批量执行特性, 在语句过长时还会自动分批执行，可以大幅度提升更新效率。

```java
public static void function1() {
    SQLInsertClause insert = queryDSL.insert(docTask);
    SQLUpdateClause update = queryDSL.update(docTaskItems);

    for (Map.Entry<String, List<Map<String, Object>>> entry : map.entrySet()) {
        insert.set(docTask.taskId, taskId)
                .set(docTask.taskCode, dao.nextCode("TASK_CODE"))
                .set(docTask.outStatus, COutStatus.OUT_WAVEPACKAGE_OVER)
                .set(docTask.pickFrom, pickFrom)
                .addBatch();

        update.set(docTaskItems.taskId, taskId)
                .set(docTaskItems.packageSn, packageSn)
                .where(docTaskItems.taskItemsId.eq(DbConv.asLong(value.get("task_items_id"))))
                .addBatch();
    }

    if (insert.getBatchCount() > 0) {
        insert.execute();
    }

    if (update.getBatchCount() > 0) {
        update.execute();
    }
}
```

#### 从 map 或其他 bean 中填充数据
::: danger 这个技巧很重要
从界面下划线规则，到数据库驼峰规则，或者从数据库下划线规则到界面驼峰规则，都需要进行转换。
得到 entity 实体之后，再借助 QueryDSL 的 populate 方法，将实体类的属性值填充到 SQL 语句中。
:::

```java
import org.springframework.beans.BeanUtils;
import com.yvan.core.NamingUtils;
import com.yvan.core.mapper.BeanCopyUtils;

import static com.galaxis.wms.query.QDocAsn.docAsn;

public static void function1(DocAllocItems originItem) {
    DocAllocItems newAllocItem = new DocAllocItems();
    
    // 从 originItem 中复制属性到 newAllocItem 中
    BeanUtils.copyProperties(originItem, newAllocItem);
    newAllocItem.setAllocId(9L);
    newAllocItem.setQty(1L);

    queryDsl.insert(QDocAllocItems.docAllocItems)
            .populate(newAllocItem)
            .execute();


    // 将 asnMap 中下划线 key 转换为驼峰规则，并得到一个新的 asnMapRenamed 对象
    Map<String, Object> asnMapRenamed = NamingUtils.underlineToCamel(asnMap);
    DocAsn docAsnEntity = BeanCopyUtils.toBean(asnMapRenamed, DocAsn.class);
    queryDsl.insert(docAsn)
            .populate(docAsnEntity)
            .execute();
}
```