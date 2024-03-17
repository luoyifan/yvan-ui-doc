---
title: 规则设计
---

# 介绍

GalaxisWMS 8.5 领先于行业WMS最大的特色是他的规则体系，目前已包括（不限于）如下13套规则：

*   系统参数规则
*   库存属性规则
*   上架规则
*   波次模板（出库模式）规则
*   出库分配规则
*   出库任务拆分规则
*   分播规则
*   集货规则
*   作业工位分配规则
*   界面规则
*   扩展属性规则
*   序号生成规则
*   条码管控规则

GalaxisWMS 8.5 的规则使用灵活，配置稳定，主要归功于底层的规则引擎架构

规则引擎实现了将业务决策从应用程序代码中分离出来，并使用预定义的语义模块(DSL)编写业务决策。接受数据输入，解释业务规则，并根据业务规则做出业务决策；

![[Pasted image 20240317150844.png]]

---
# 凯乐士WMS-DSL 规则引擎特性

*   图形化编排规则；满足仓储管理人员，不需要懂技术可以修改作业模式；
*   保证性能，规则一旦编译成功，就可以脱离数据库运行规则，最大程度保证系统运行效率；
*   业务隔离，吧项目中经常变化的部分隔离出来，不影响程序主版本；
*   热更新，版本管理，升级管理，及回滚；规则一旦配置失败，可以回滚到上一个版本；配置和配置之间可以保证同步（不会发生更新一半）的情况；
*   保留分析日志；
*   回放规则的运行过程，图形化分析和展示流量情况；
*   规则逻辑复杂的时候可以打断点进行调试，面对异常复杂的配置时，不再是黑盒；
*   框架扩展能力强，并与Java互通，所有Java中的方法都可以被规则引擎调用；
*   规则引擎可监控，可动态变更；可以实现 WMS 一边运行，一边动态的修改作业模式的场景；最大化实现仓储作业灵活的目的

---

图示：图形化编排
![[Pasted image 20240315154856.png]]

---
# 规则详解

## 1.库存属性规则

全名“Rule Of Inventory Attribute”，是用来描述库存中货物关键属性的规则，某一批货物如果库存关键属性全部，在批次库存表中会合并行记录。

凡需要在库存表需要作为业务查询（或周转排序）条件的字段，都需要变为库存属性；库存属性如果过于精确（比如唯一码级），会造成库存表数据庞大，严重影响WMS性能；库存属性如果过于宽泛（比如只记录批号），会造成周转、上架、出库订单要求等，某些业务模式无法实现；

GalaxisWMS系统的库存属性规则，可以根据不同的条件集（仓库、货主、项目、客户、订单、物料）等条件，业务按需取库存属性，并且提供最多3000个以内库存关键字段的扩展能力，并且在库存属性规则中，可以定义不同的数据类型、字段编辑模式、字段校验模式、数据字典等；

库存属性通常包括以下几个方面：

1.  货物的批次信息：如批号、生产日期、有效期至等；
2.  货物的包装类型：如包装ID、包装级别散装、中包装、箱装、托装等；
3.  库存质检状态：如正常、残次、样品等；
4.  货物的规格：如颜色、尺码、大小等；
5.  库龄和订单：即库存存放时间、物料来源渠道、物料来源订单等；

规则特性：

*   不同的仓库、货主、客户、物料，会有不同的仓库库存属性管理要求

```groovy
import com.galaxis.wms.rule.domain.*

strategy {
    strategyName = "库存属性"
    
    // 引入环境变量
    ruleImports = [
        PROJ,         // 物流项目
        OWNER,        // 货主
        WH,           // 仓库
        CUST,         // 客户
        ITEM,         // 物料
    ]
    
    // 工程物料适用属性
    rule {
        ruleCode = "1001"
        ruleName = "电信5G基站"
        
        when {
            // 当项目id=100001L 并且 客户编码是 1007
            (PROJ.project_id == 100001L && CUST.cust_code == "1007")
        }
        
        then {
            // 库存属性定义
            returnResult [
                LotHelp.define(field='lot04', title='厂家', cmpTag='textfield', required=true),
                LotHelp.define(field='lot01', title='批号', cmpTag='textfield', required=true),
                LotHelp.define(field='lot02', title='生产日期', cmpTag='datefield', required=true),
            ]
        }
    }
    
    // 医药物资适用属性
    rule {
        ruleCode = "1001"
        ruleName = "电信5G基站"
        
        when {
            // 当物资类型是 03 时
            (ITEM.item_category == '03')
        }
        
        then {
            // 库存属性定义
            returnResult [
                LotHelp.define(field='lot01', title='批号', cmpTag='textfield', required=true),
                LotHelp.define(field='lot02', title='生产日期', cmpTag='datefield', required=true),
                LotHelp.define(field='lot03', title='有效期至', cmpTag='datefield', required=true),
            ]
        }
    }
    
    rule {
        ruleCode = '0000'
        ruleName = '保底规则'
        
        when {
            // 无论任何情况都适用
            true
        }
        
        then {
            // 无库存属性定义
            log.warn('没有找到预设的库存属性')
            returnResult []
        }
    }
}
```

---
## 2.上架规则

上架规则是制定了如何将收货的货物存放在仓库中的特定位置。上架规则的目的是优化仓库存储和捡货的效率，确保货物能够快速且准确地被找到和拣选。

上架规则一般包括以下几个方面的内容：

1.  货物大小和重量：上架规则会根据货物的大小和重量来确定存放的位置和方式。例如，重型货物可能需要被放置在地面上，而轻型货物则可以被放置在货架上。
2.  商品特性：不同类型的商品需要根据其特性来决定存储位置。例如，易碎品或者液体商品需要被放置在特定的区域中，以避免损坏或泄漏。
3.  存储时间：上架规则可能会根据货物的存储时间来决定其存放位置。例如，需要先存放较早入库的商品，以保证先进先出的原则。
4.  存储方式：上架规则还会根据货物的存储方式来决定其存放位置。例如，需要将同一批次的货物存放在相邻的位置，需要冷藏冷冻的商品，要进入冷藏冷冻库区，以便于管理和捡货。

上架规则对于仓库的管理和运作非常重要，它可以提高仓库的存储和捡货效率，减少错误和损失，提高客户满意度。

规则特性:

*   上架规则是一种接力模式，按适用性(then)的要求，不停的完后找，一直找到第一个符合要求的条件；
*   因此上架规则的返回值，是 yieldResult；
*   主程序拿到 yieldResult，进行计算，如果符合条件，就要调用 rule.yieldBreak 终止规则引擎的运行

```groovy
import com.galaxis.wms.rule.domain.*
        
strategy {
    strategyName = "上架规则"
    
    // 引入环境变量
    ruleImports = [
        ASN,          // 预期到货通知
        ASN_ITEM,     // 预期到货通知详情
        PROJ,         // 物流项目
        LOT,          // 批属性
        OWNER,        // 货主
        WH,           // 仓库
        ITEM,         // 物料
    ]
    
    // 冷藏品入库规则
    rule {
        ruleCode = "0001"
        ruleName = "冷藏入库"
        
        when {
            // 商品库存要求=冷藏品
            (ITEM.env == ITEM_ENV.cold)
        }
        
        then {
            yieldResult [
                // 目标库位范围：库区类型是 0101（冷藏库区）
                SQL: 'bas_loc_area.area_type = "0101"',
            
                // 上架算法步骤: 
                ALG: [
                    com.galaxis.wms.alg.GetInSamLot,   // 同批次扎堆
                    com.galaxis.wms.alg.GetInEmpty,    // 寻找空货位
                    com.galaxis.wms.alg.GetInMixLoc,   // 寻找混放货位
                ]
            ]
            
            // 终止后续规则
            yieldBreak
        }
    }

    // 零货采购入库规则
    rule {
        ruleCode = "1001"
        ruleName = "零货采购入库"
        
        when {
            // 当项目id=100001L 并且 订单类型=采购入库 并且 订单行是零货
            (ASN.order_type == ORDER_TYPE.sale && ASN_ITEM.whole == "0001")
        }
        
        then {
            yieldResult [
                // 目标库位范围：库位类型=0001(零货货架) 并且 库区是 0002(零货库区)
                SQL: 'bas_location.loc_type = "0001" and bas_loc_area.area_type = "0002"',
                
                // 上架算法步骤
                ALG: [
                    com.galaxis.wms.alg.GetInSamLot,   // 同批次扎堆
                    com.galaxis.wms.alg.GetInEmpty,    // 寻找空货位
                    com.galaxis.wms.alg.GetInMixLoc,   // 寻找混放货位
                ]
            ]
        }
    }

    // 整件采购入库规则
    rule {
        ruleCode = "1002"
        ruleName = "整件采购入库"
        
        when {
            // 当订单类型=采购入库 并且 订单行是整件 并且入库意向是 "立库"
            (ASN.order_type == ORDER_TYPE.sale && ASN_ITEM.whole == "0001" && ASN_ITEM.purpose == '0009')
        }
        
        then {
            yieldResult [
                // 目标库位范围：库区类型是 0003（托盘立体库区）
                SQL: 'bas_loc_area.area_type = "0003"',
            
                // 上架算法步骤: 托盘立库算法
                ALG: [
                    com.galaxis.wms.alg.GetInTrayDimension,
                ]
            ]
        }
    }
    
    // 退货入库规则
    rule {
        ruleCode = "1003"
        ruleName = "退货入库"
        
        when {
            // 当订单类型=退货入库
            (ASN.order_type == ORDER_TYPE.refund)
        }
        
        then {
            yieldResult [
                // 目标库位范围：库区类型是 0009（退货区）
                SQL: 'bas_loc_area.area_type = "0009"',
            
                // 上架算法步骤: 托盘立库算法
                ALG: [
                    com.galaxis.wms.alg.GetInEmpty,    // 寻找空货位
                    com.galaxis.wms.alg.GetInMixLoc,   // 寻找混放货位
                ]
            ]
        }
    }
    
    rule {
        ruleCode = '9999'
        ruleName = '保底规则'
        
        when {
            // 无论任何情况都适用
            true
        }
        
        then {
            // 无库存属性定义
            throwError('没有找到合适上架规则')
        }
    }
}
```

## 3.波次模板规则

WaveTemplate"（波次模板）是指在WMS系统中预先定义的用于执行波次作业的模板。

在WMS系统中，波次作业是指将一批相似的订单或者任务按照一定的逻辑组合在一起，并在一定的时间范围内完成的一种作业方式。

波次模板中通常包含波次任务的库区作业范围、优先级、作业流程、拣货工具、作业人员等相关信息，通过使用波次模板，可以提高仓库波次作业的效率和准确度。

"WaveTemplateSections"（波次模板出库模式）是指在波次模板定义的基础上，按照不同的分段条件，定义出不同的拣货、分拨、复核、集货、发运的流程；

规则特性：

*   波次模板是一级决策
*   波次模板下的出库模式，是第二级决策

```groovy
import com.galaxis.wms.rule.domain.*
        
strategy {
    strategyName = "波次模板"
    
    // 波次模板上下文变量集
    groupVars = [
        PO,           // 销售订单
        PO_ITEM,      // 销售订单详情
        PROJ,         // 物流项目
        OWNER,        // 货主
        WH,           // 仓库
        ITEM,         // 物料
        WAVE,         // 波次
    ]
    // 出库模式上下文变量集
    ruleVars = [
        PO,           // 销售订单
        PO_ITEM,      // 销售订单行
        PROJ,         // 物流项目
        OWNER,        // 货主
        WH,           // 仓库
        ITEM,         // 物料
        LOT,          // 库存属性
        WAVE,         // 波次
        WAVE_ITEM,    // 波次行
        LOC_ZONE,     // 区域
        LOC_AREA,     // 库区
        LOC,          // 货位
        SHIP,         // 集货区
        INV_ITEM,     // 商品库存
        INV_LOT,      // 批次库存
        INV_LPN,      // 箱号库存
        INV_UPN,      // 唯一码库存
    ]
    
    group {
        groupName = "批量出库模板"
        props = [
            // 订单（订单行）筛选条件
            filter: 'bas_item.is_batch_allow = "0001" and bas_item.category like "01%"',
            
            // 计划任务
            schedule: [
                order_count_min_limit: 100   // 订单数量下限
                order_count_max_limit: 1000  // 订单数量上限
                order_wait_max: 60*3         // 最大等待时间（分钟）
                wave_count_min_limit: 2      // 最大波次数
            ]
            
            hang_type: 2                 // 订单异常时挂起维度（波次挂起、按单挂起、按单据行挂起、按单据行数量挂起）
            auto_revert: true            // 自动分配库存
            auto_dispatch: true          // 自动下发任务
            auto_insert_wave: true       // 自动插单
        ]
        when {
            // 波次模板适用范围
            (OWNER.owner_id == 10001L && WAVE.template_type == 'batch')
        }
        
        // 平库模式
        rule {
            ruleName = '平库出库模式'
            when {
                (LOC.loc_type == '003')
            }
            then {
                return [
                    pick_label: 'A'           //拣货标签
                    pick_mode: '001'          // 拣货模式
                    pick_type: '001'          // 拣货作业类型
                    pda_pick_type: '001'      // PDA拣货方式
                    pick_tag: 'PK_BATCH'      // 拣货分类标签 "平库批量拣货"
                    review_mode: 'auto'       // 复核模式 "自动内复核"
                    pda_review_type: ''       // PDA复核方式 无
                    shipping_mode: '001'      // 发运模式 自动发运
                    scope_type: '001'         // 适用范围类型
                    scope_id: 10001L          // 适用范围
                    rule_taskgen_id: 10001L   // 任务拆分规则
                    rule_seed_id: 10001L      // 分播规则
                ]
            }
        }
        
        // 立体库模式
        rule {
            ruleName = '立体库模式'
            when {
                // 立体库库区出库
                (LOC_AREA.area_type == '007')
            }
            ...
        }
        
        // 小库房模式
        rule {
            ruleName = '小库房模式'
            when {
                (LOC_AREA.area_type >= '099')
            }
            ...
        }
        
        // 其他情况
        rule {
            code = '9999'
            name = '保底规则'
            when {
                // 无论任何情况都适用
                true
            }
            then {
                // 无库存属性定义
                throwError('没有找到合适的出库模式')
            }
        }
    }
    
    group {
        name = "零拣出库模板"
        when {
            (WAVE.template_type == 'scrap')
        }
        
        // 出库模式部分省略
        ...
    }    
    
    group {
        name = "杂单出库模板"
        when {
            (WAVE.template_type == 'mix')
        }
        
        // 出库模式部分省略
        ...
    }
    

}
```

## 4.出库分配规则

出库分配规则是指，在出库单被编排进入波次之后，为锁定出库库存、选定出库库位而定义的一套规则，包含了 库存分配维度、出库批次分配策略、出库库位分配策略

## 4.1: 库存分配维度

Rule of Inventory Reservation（库存预留规则）是指在WMS系统中通过对库存数量进行预留管理，帮助仓库更好地控制库存，提高库存利用率和客户满意度的一种规则。

预占分为6个级别，预占的范围从大到小依次是： 按商品预占、按批次预占、库位预占、按托码预占、按照箱码预占、按串码预占；

调度预占范围越大，在拣货时人工决策的范围就越大，但管理起来就粗犷，很多管理功能无法实现；预占范围越小，管理越精准，出库预测、流程管理和控制就会越精准；

在WMS系统中，根据订单、订单行、客户、物料、物料类型、库存属性、容器、客户，分辨预占的维度。比如按商品预占库存数量、按批次预占数量、按库位预占库存数量、按库存容器预占库存数量；

```groovy
import com.galaxis.wms.rule.domain.*

strategy {
    // 出库模式上下文变量集
    ruleImports = [
        PO,           // 销售订单
        PO_ITEM,      // 销售订单行
        PROJ,         // 物流项目
        OWNER,        // 货主
        WH,           // 仓库
        ITEM,         // 物料
        LOT,          // 库存属性
        WAVE,         // 波次
        WAVE_ITEM,    // 波次行
        LOC_ZONE,     // 区域
        LOC_AREA,     // 库区
        LOC,          // 货位
    ]
    
    rule {
        ruleName = '默认分配规则'
        props = [
            outRuleId = 100097L
        ]
        when {
            // 任何条件
            true
        }
        props = [
            InvResev: 1     // 按商品预占、按批次预占、库位预占、按托码预占、按照箱码预占、按串码预占
        ]
    }
}
```

## 4.2: 出库批次分配策略

"Rule of Outbound Inventory Turnover" 的简写，表示WMS系统中的出库库存周转规则。

在WMS系统中，出库库存周转规则是指根据一定的逻辑和策略，在仓库管理系统中对出库商品进行周转管理的规则。通常需要考虑商品的生产日期、商品有效期、批次等因素，以最大限度地提高库存周转率，减少库存滞留。

只有库存分配维度在批次级以下时（批次级、货位级、托码级、串码级），库存周转策略才能生效

```groovy
import com.galaxis.wms.rule.domain.*

strategy {
    // 出库模式上下文变量集
    ruleVars = [
        PO,           // 销售订单
        PO_ITEM,      // 销售订单行
        PROJ,         // 物流项目
        OWNER,        // 货主
        WH,           // 仓库
        ITEM,         // 物料
        LOT,          // 库存属性
        WAVE,         // 波次
        WAVE_ITEM,    // 波次行
        LOC_ZONE,     // 区域
        LOC_AREA,     // 库区
        LOC,          // 货位
    ]
    
    rule {
        ruleName = '药品周转策略'
        props = [
            outRuleId = 100097L
        ]
        when {
            (ITEM.category == '药品')
        }
        then {
            // 按商品有效期排序
            returnResult [
                'inv_lot_attr.validdate asc'
            ]
        }
    }
    
    rule {
        ruleName = '其他情况'
        when {
            true
        }
        then {
            // 按批号入库时间排序
            returnResult [
                'inv_lot_attr.lot_id asc'
            ]
        }
    }
}
```

## 4.3: 出库库位分配策略

Rule of Outbound Location Selection（货位选择规则）通常是指根据一定的逻辑和策略，在仓库中选择合适的货位进行出库操作的规则。

货位选择规则通常是根据货物的类型、尺寸、重量、数量、订单条件、订单行条件、算法模式等因素来确定合适的货位。

只有库存分配维度在货位级以下时（货位级、托码级、串码级），库位分配策略才能生效

比如：2、3、5、10 货位都有这个商品，如果是**清理货位优先**，就按照库存数量从小到大排序，如果是**拣货优先**，按照筛出  出库数量≤库存数量 的货位优先出

```groovy
import com.galaxis.wms.rule.domain.*

strategy {
    // 出库模式上下文变量集
    ruleVars = [
        PO,           // 销售订单
        PO_ITEM,      // 销售订单行
        PROJ,         // 物流项目
        OWNER,        // 货主
        WH,           // 仓库
        ITEM,         // 物料
        LOT,          // 库存属性
        WAVE,         // 波次
        WAVE_ITEM,    // 波次行
    ]
    
    rule {
        ruleName = '销售订单-药品拆零区选货模式'
        props = [
            outRuleId = 100097L
        ]
        when {
            // 销售订单、零货拣货、药品
            (PO.order_type == '销售订单' && PO.whole=='0000' && ITEM.category == '药品')
        }
        then {
            yieldResult [
                // 货位查找 零货1区
                locSql: 'LOC_AREA.area_type = "零货1区" and LOC.quality = "合格品"'
                priorityMode: '1'   // 1=拣货优先; 2=清理货位优先
                autoRep: '1'        // 1=不用自动补货; 2=库存不足自动补货
            ]
            
            yieldResult [
                // 货位查找 零货2区
                locSql: 'LOC_AREA.area_type = "零货2区" and LOC.quality = "合格品"'
                priorityMode: '1'   // 1=拣货优先; 2=清理货位优先
                autoRep: '1'        // 1=不用自动补货; 2=库存不足自动补货
            ]
            
            yieldResult [
                // 货位查找 零货3区
                locSql: 'LOC_AREA.area_type = "零货3区" and LOC.quality = "合格品"'
                priorityMode: '1'   // 1=拣货优先; 2=清理货位优先
                autoRep: '1'        // 1=不用自动补货; 2=库存不足自动补货
            ]
        }
    }
    
    rule {
        ruleName = '销售订单-立体库选货模式'
        when {
            // 销售订单、零货拣货、药品
            (PO.order_type == '销售订单' && PO.whole=='0001' && ITEM.category == '药品')
        }
        then {
            // 托盘立库选货模式
            yieldResult [
                ALG: com.galaxis.wms.SelectLocByPallet
            ]
        }
    }
    
    rule {
        ruleName = '其他情况'
        when {
            true
        }
        then {
            throwError("没有找到合适的出库库位分配策略")
        }
    }
}
```

## 出库分配规则 综合示例

```groovy
strategy {
    strategyName = "出库分配规则"
    
    ruleImports: [
        PO,           // 销售订单
        PO_ITEM,      // 销售订单行
        PROJ,         // 物流项目
        OWNER,        // 货主
        WH,           // 仓库
        ITEM,         // 物料
        LOT,          // 库存属性
        WAVE,         // 波次
        WAVE_ITEM,    // 波次行
        LOC_ZONE,     // 区域
        LOC_AREA,     // 库区
        LOC,          // 货位
    ]
    
    rule {
        ruleName = "医药自动出库分配模式"
        when {
            (ITEM.category == '医药' && PO.order_dispatch_type == '自动分配' && WAVE.wave_dispatch_type == '自动波次安排')
        }
        then {
            // 过滤使用 props 中 outRuleId=97001 的规则
            returnResult [
                outRuleId: 97001
            ]
        }
    }
    
    rule {
        ruleName = "人工分配模式"
        ...
    }
    
    rule {
        ruleName = "指定箱码/串码模式"
        ...
    }
    
    rule {
        ruleName = "工程物料出库分配模式"
        ...
    }
    
    rule {
        ruleName = "3C出库分配模式"
        ...
    }
    
    rule {
        ruleName = "其他物料出库分配模式"
        ...
    }
}
```

## 5.出库任务生成规则

Rule of Outbound Task Generated（出库任务生成规则）通常是指根据订单、货位、作业模式，创建出库任务的规则。

出库任务生成规则描述库任务如何进行切分，如果任务切割非常细致，拣货的并行度就会非常高，但订单的完整度就会低，需要配合后续的播种集单完成拣货任务；如果任务切割很粗，拣货的并行度不高，但可以很快完成集单；

出库任务生成规则需要与波次模板、周转规则、分拨规则配合，以实现更加高效的仓库出库任务管理。

比如：

算法参数是“订单ID”，就是按单摘果拣；

算法参数是“库区ID+订单ID”，就是按库区摘果拣；

算法参数是“订单收货地址”，就是按单据最终收货地址摘果拣；

算法参数是“订单ID+LPN”，就是按单据、原箱摘果拣；

算法参数是“商品ID+库存属性.批号”，就是按商品批号提总拣；

```groovy
import com.galaxis.wms.rule.domain.*

strategy {
    strategyName = "出库任务生成规则"
    comment = "任务号的生成规则，如果任务号相同将生成同一个任务，任务号不同则是多条任务，任务之间可以并行"
    
    ruleImports: [
        PO,           // 销售订单
        PO_ITEM,      // 销售订单行
        PROJ,         // 物流项目
        OWNER,        // 货主
        WH,           // 仓库
        ITEM,         // 物料
        LOT,          // 库存属性
        WAVE,         // 波次
        WAVE_ITEM,    // 波次行
        LOC_ZONE,     // 区域
        LOC_AREA,     // 库区
        LOC,          // 货位
        ALLOC,        // 调度任务分配
    ]
    
    rule {
        ruleName = "按单摘果"
        when {
            ...
        }
        then {
            returnResult ORDER.order_id
        }
    }
    
    rule {
        ruleName = "按客户ID摘果拣"
        when {
            ...
        }
        then {
            returnResult CUST.cust_id
        }
    }
    
    rule {
        ruleName = "按库区摘果"
        when {
            ...
        }
        then {
            returnResult LOC_AREA.area_id + ORDER.order_id
        }
    }
    
    rule {
        ruleName = "按订单和箱号并行拣选"
        when {
            ...
        }
        then {
            returnResult ORDER.order_id + ALLOC.box_lpn
        }
    }
    
    rule {
        ruleName = "按商品批号播种拣"
        when {
            ...
        }
        then {
            returnResult LOT.lot_id
        }
    }
    
    rule {
        ruleName = "其他情况(按单据跨库区拣)"
        when {
            true
        }
        then {
            returnResult ORDER.order_id
        }
    }
}
```

## 6.分播规则

"Rule of Outbound Seed Location Selection" 的简写，表示WMS系统中的出库播种位选择规则。

在WMS系统中，播种位选择规则是指根据一定的逻辑和策略，在仓库管理系统中选择合适的播种位进行出库播种操作的规则。

通常需要考虑货物的类型、尺寸、重量、数量、及出库订单、收货地址等因素，以最大限度地提高出库效率和准确度，减少人力成本

```groovy
import com.galaxis.wms.rule.domain.*

strategy {
    strategyName = "分播规则"
    
}
```

## 7.出库集货规则

全名 “Rule Of Outbound Consolidation”，指出库集货规则，即指定了出库分拣、复核之后如何将货物从不同位置集中到同一位置，以便进行后续的装车作业。比如：如根据订单号、收货地址、线路等进行集货，通过设置合理的出库集货规则，可以提高出库作业的效率和准确性，降低操作成本和错误率。

```groovy
import com.galaxis.wms.rule.domain.*

strategy {
    strategyName = "出库集货规则"
    
}
```

## 8.工作站调度规则

工作站调度规则 全名“Rule of workstation dispatch”。它是指在 WMS 系统中根据预先定义的规则来决定下一个任务应该分配给哪个工作站进行处理。

具体来说，规则会根据各种因素（如工作站的负载、任务类型、货物属性、订单属性、波次流程等）来优化调度决策，以提高整体的作业效率和准确性。

在 WMS 系统中，通过定义和优化工作位分配规则，可以有效地提高仓库作业的处理速度和质量，从而进一步提高整个物流系统的运行效率。

```groovy
import com.galaxis.wms.rule.domain.*

strategy {
    strategyName = "工作站调度规则"
    
}
```

## 9.系统参数规则

在 WMS 系统中可以通用使用的一些参数配置，这些参数配置可以用来控制 WMS 系统的各种行为和功能。

在GalaxisWMS系统中，系统参数的值不是简单的指定某个固定值；
参数可以分为多个版本，每个版本都有自己的适用条件（profile\_condition）和计算脚本（profile\_script），可以根据上下文动态计算参数的结果

以下是一些常见的通用系统参数配置：

*   库存物料过期警告
*   入库单是否允许关闭
*   出库单是否允许关闭
*   是否异步记录库存
*   订单是否有完整数据来源
*   收货物料是否要求质检
*   上架是否要求手工扫描货位号
*   是否进行唯一码管控
*   系统密码复杂度
*   系统名称
*   系统LOGO图标
*   系统默认配色

```groovy
import com.galaxis.wms.rule.domain.*

strategy {
    strategyName = "系统参数"
    
    group {
        groupName = '库存物料过期警告'
        groupCode = 'ItemValiddateWarningEnable'
        
        ruleImports: [
            PROJ,         // 物流项目
            OWNER,        // 货主
            WH,           // 仓库
            CUST,         // 客户
        ]
        
        rule {
            ruleName = "货主1需要关注物资警告"
            when {
                (OWNER.owner_id = '货主1')
            }
            then {
                true
            }
        }
        
        rule {
            ruleName = "默认情况"
            when {
                true
            }
            then {
                // 结果值
                false
            }
        }
    }
    
    group {
        groupName = '入库单是否允许关闭'
        groupCode = 'AsnCloseEnable'
        
        ruleImports: [
            PROJ,         // 物流项目
            OWNER,        // 货主
            WH,           // 仓库
            CUST,         // 客户
            ASN           // 预期到货通知单
        ]
        
        rule {
            // 情况1
            ...
        }
        rule {
            // 情况2
            ...
        }
        rule {
            // 其他情况
            ...
        }
    }
}
```

## 10.界面规则

GalaxisWMS系统可以根据业务数据的不同情况生成不同的界面，这为用户提供了更灵活和个性化的界面体验。

下面是界面规则中可以变化的内容：

*   动态展示字段
    根据业务数据的不同，定义哪些字段在特定条件下应该显示或隐藏。您可以通过配置规则来确定字段的可见性，以确保界面简洁而符合用户需求。
    定义字段的展示顺序和宽度权重，使界面更加直观和易于阅读。

*   字段解释和标签
    为每个字段提供清晰的解释和标签，以帮助用户理解字段的含义和用途。这有助于降低学习成本并提高用户操作的准确性。

*   编辑器的编辑模式
    根据业务需求，定义字段的编辑模式。例如，某些字段可以是只读的，而其他字段可以是可编辑的或必填的。这样可以根据业务逻辑控制用户对数据的编辑能力。

*   下拉选项和校验模式
    对于特定字段，定义可用的下拉选项和校验模式。这样可以限制用户输入的范围，并确保数据的准确性和一致性。

*   页面布局和组织：
    考虑不同界面模式下的页面布局和组织结构。根据业务数据的不同，可能需要重新排列字段的位置和组织方式，以提供更好的用户体验和操作效率。

*   权限和访问控制
    考虑到不同用户角色和权限，定义界面规则以控制用户对特定界面和功能的访问权限。可以确保安全性和数据保护。

```groovy
import com.galaxis.wms.rule.domain.*

strategy {
    strategyName = "界面规则"
    
    ruleImports: [
        PROJ,         // 物流项目
        OWNER,        // 货主
        WH,           // 仓库
        CUST,         // 客户
    ]
    
    rule {
        props = [
            pagePath: '/src/pages/inbound/doc_asn/MakeDocAsn.vue'
        ]
        when {
            // 当进入项目 100000009L 时，单据头名称被重新定义
            (PROJ.project_id = 100000009L)
        }
        then {
            returnResult: '''
            {
              extprop_id: 1997L,
              "block" : {
                "单据头" : [ {
                  "ui_key" : "{input.doc_asn.project_name}",
                  "is_override" : "0001",
                  "is_hidden" : "0000",
                  "is_required" : "0000",
                  "cust_display_label" : "项目名称ABC",
                  "cust_ui" : {
                    "xtype" : "textfield"
                  }
                }, {
                  "ui_key" : "{input.doc_asn.owner_name}",
                  "is_override" : "0001",
                  "is_hidden" : "0000",
                  "is_required" : "false",
                  "cust_display_label" : "货主名称ABC",
                  "cust_ui" : {
                    "xtype" : "textfield"
                  }
                }, {
                  "ui_key" : "{input.doc_asn.dates}",
                  "is_override" : "0001",
                  "is_hidden" : "0000",
                  "is_required" : "false",
                  "cust_display_label" : "日期ABC",
                  "cust_ui" : {
                    "xtype" : "textfield",
                    "weight" : 2
                  }
                } ]
              },
              "order" : {
                "单据头" : "{so.dates},{so.so_code},{so.logistics_order_code},{so.customer_order_code},{so.project_name},{so.order_type},{so.order_biz_type},{so.urgent_type},{so.estimate_out_time},{so.estimate_revice_time},{so.customer_name},{so.owner_name},{so.total_qty},{so.total_weight},{so.total_volume},{so.total_price},{so.create_at},{so.remark},{so.remark01},{so.remark09},{so.remark08},{so.remark07},{so.remark02},{so.remark03},{so.remark04},{so.remark05},{so.remark06},{so.ship_area},{so.ship_address},{so.ship_contacts},{so.rece_area},{so.rece_address},{so.rece_contacts},{so.rece_telephone},{so.so_code}"
              }
            }
            '''
        }
    }
}
```

## 11.扩展属性规则

在GalaxisWMS中，系统可以根据客户要求的不同定义不同的扩展属性字段，这些字段实际上存在于物理表中，可以对系统性能进行不同的优化形式。

这为物流运营逻辑的复杂性和个性化需求提供了灵活性。

*   扩展属性字段：
    根据客户的要求，将所需的扩展属性字段添加到物理表中。这些字段可以用于存储特定的业务数据和逻辑规则。
    在设计数据库结构时，合理规划和优化扩展属性字段的存储和索引方式，以提高系统的查询和性能效率。

*   界面规则：
    利用GalaxisWMS提供的界面规则功能，根据业务数据的不同，动态展示和控制扩展属性字段的可见性和编辑性。这样可以根据具体业务场景定制界面，提供符合客户要求的个性化界面体验。

*   出库模板、出库模式和出库规则：
    与扩展属性字段配合使用，根据不同的出库需求和规则，定义出库模板、出库模式和出库规则。这样可以根据客户的个性化要求和物流运营逻辑，实现复杂的出库流程和规则控制。

*   性能优化：
    针对不同的扩展属性字段，进行系统性能优化。根据实际情况，考虑使用索引、分区表等数据库优化技术，提高系统的查询和处理性能。

```groovy
import com.galaxis.wms.rule.domain.*

strategy {
    strategyName = "扩展属性规则"
    
    rule {
        ruleName = "通用扩展字段包"
        props: [
            extprop_id: 1997L,
        ]
        then {
            returnResult '''{
                "物料明细": [
                    {
                        "extprop_field": "itemmark01",
                        "extprop_order": 1,
                        "field_type": "N/A",
                        "extprop_oms_property": "lolRemark1",
                        "isshow": 1,
                        "attr_name": "出库站点",
                        "component_code": "input",
                        "biz_code_category": "[]",
                        "required": 0,
                        "edit": 0
                    },
                    {
                        "extprop_field": "itemmark02",
                        "extprop_order": 2,
                        "field_type": "N/A",
                        "extprop_oms_property": "lolRemark2",
                        "isshow": 1,
                        "attr_name": "活动预算编码",
                        "component_code": "",
                        "biz_code_category": "[]",
                        "required": 0,
                        "edit": 0
                    },
                    {
                        "extprop_field": "itemmark03",
                        "extprop_order": 3,
                        "field_type": "N/A",
                        "extprop_oms_property": "lolRemark3",
                        "isshow": 1,
                        "attr_name": "活动预算名称",
                        "component_code": "",
                        "biz_code_category": "[]",
                        "required": 0,
                        "edit": 0
                    },
                    {
                        "extprop_field": "itemmark04",
                        "extprop_order": 4,
                        "field_type": "N/A",
                        "extprop_oms_property": "lolRemark4",
                        "isshow": 1,
                        "attr_name": "物料说明",
                        "component_code": "",
                        "biz_code_category": "[]",
                        "required": 0,
                        "edit": 0
                    },
                ],
                "单据头": [
                    {
                        "extprop_field": "remark01",
                        "extprop_order": 1,
                        "field_type": "N/A",
                        "extprop_oms_property": "lohRemark1",
                        "isshow": 1,
                        "attr_name": "单项工程名称",
                        "component_code": "",
                        "biz_code_category": "[]",
                        "required": 0,
                        "edit": 0
                    },
                    {
                        "extprop_field": "remark02",
                        "extprop_order": 4,
                        "field_type": "N/A",
                        "extprop_oms_property": "lohRemark2",
                        "isshow": 1,
                        "attr_name": "工程主管部门",
                        "component_code": "",
                        "biz_code_category": "[]",
                        "required": 0,
                        "edit": 0
                    },
                    {
                        "extprop_field": "remark04",
                        "extprop_order": 6,
                        "field_type": "N/A",
                        "extprop_oms_property": "lohRemark4",
                        "isshow": 1,
                        "attr_name": "所属分局",
                        "component_code": "",
                        "biz_code_category": "[]",
                        "required": 0,
                        "edit": 0
                    }
                ]
            }'''
        }
    }
}
```

## 12.条码管控规则

在GalaxisWMS中，条码管控规则是用于管理和控制条码的使用和操作的规则集合。这些规则旨在确保条码在物流运营过程中的准确性、唯一性和一致性。以下是一些常见的条码管控规则，可根据具体需求在GalaxisWMS中实施：

*   条码绑定规则
    规定哪些物料或货物需要绑定条码。确定条码与物料或货物之间的关联方式

*   条码扫描规则
    指定条码扫描的时机和要求，如入库前扫描、出库时扫描。验证条码的有效性，确保扫描的条码符合预定的规则和格式。

*   条码验证规则
    在操作过程中验证条码的正确性和合法性。针对不同类型的条码，执行特定的验证逻辑，如校验数字、校验位等。

*   条码追踪规则
    记录条码的使用和流转情况，实现条码的全生命周期追踪。跟踪条码的入库、出库、转移等操作，以确保条码的可追溯性。

*   条码禁用规则
    根据需要禁用特定的条码，如过期条码、损坏条码等。在禁用的条码上实施限制措施，如不允许绑定、扫描或操作。

```groovy
import com.galaxis.wms.rule.domain.*

strategy {
    strategyName = "条码管控规则"
    
    rule {
        ruleName = "管控唯一码1+2"
        props: [
            project_id: 2001L,
        ]
        when {
            jdbcQueryLong('select count(*) from bas_item where item_id in (select t.item_id from rule_lpn t where t.type=1)') > 0
        }
        then {
            returnResult [
                upn1: true,
                upn2: true
            ]
        }
    }
    
    rule {
        ruleName = "管控唯一码1+2+3+4+5+6"
        props: [
            project_id: 2001L,
        ]
        when {
            jdbcQueryLong('select count(*) from bas_item where item_id in (select t.item_id from rule_lpn t where t.type=6)') > 0
        }
        then {
            returnResult [
                upn1: true,
                upn2: true,
                upn3: true,
                upn4: true,
                upn5: true,
                upn6: true
            ]
        }
    }
    
    rule {
        ruleName = "管控箱码"
        props: [
            project_id: 2001L,
        ]
        when {
            (PROJ.project_id in (1L,2L,3L) || PROJ.project_id > 6000L)
        }
        then {
            returnResult [
                BoxLpn: true,
            ]
        }
    }
    
    rule {
        ruleName = "其他情况"
        then {
            // 不用管控
            returnResult null
        }
    }
}
```

# 规则的范式定义

## 规则引擎架构

![image.png](https://note.youdao.com/yws/res/30621/WEBRESOURCE5199ac99353ec640473df43baef4ffbb)

## Strategy-DSL

```groovy
import com.galaxis.wms.rule.domain.*

strategy {
    strategyName = "策略名"
    
    // 引入环境变量
    // 在图形化编排时，能预先列出可用的上下文变量
    ruleImports = [
        PROJ,         // 物流项目
        OWNER,        // 货主
    ]
    
    // 定义规则
    rule {
        ruleCode = "规则编码"
        ruleName = "规则名"
        
        // 规则属性（可用定义一些固定属性，方便程序取值）
        props = [
            foo: 'bar'
        ]
        
        // 规则筛选属性（可用于固定模式下的过滤筛选）
        whenProp = [
            project_id: 10001
        ]
        
        // when 片段 返回类型 boolean, 用来判断当前规则是否适用
        // 当缺少 when 片段时，默认所有情况都适用(return true)
        when {
            (PROJ.project_id in (1L,2L,3L) || OWNER.owner_type > 2)
        }
        
        // then 片段 function 返回类型 void，当规则适用时会执行此函数
        then {
            // yieldResult 方法，吧参数1加入到返回值中，规则引擎会持续运行
            yieldResult 参数1
            
            // 终止运行规则引擎
            yieldBreak()
            
            // 吧参数1加入到返回值中，并且终止规则引擎，后面的 rule 会被忽略
            returnResult 参数1
            
            // 抛出异常
            throwError(...)
        }
    }
    
    // 规则组，rule 在同一个组内可以接力执行, 无法跨组执行
    // 规则组下可以定义不同的规则引入
    group {
        ruleCode = "分组编码"
        ruleName = "分组名"
        
        ruleImports = [
            ...
        ]
        
        groupImports = [
            ...
        ]
        
        // 规则组属性（可用于定义一些固定属性，方便程序取值）
        groupProps = [
            foo: 'bar'
        ]
        
        // 规则组筛选属性（可用于固定模式下的过滤筛选）
        groupWhenProp = [
            project_id: 10001
        ]
        
        // when 片段 返回类型 boolean, 用来判断当前规则组是否适用
        groupWhen {
            true
        }
        
        rule {
            ... 同 rule
        }
    }
}
```

## ruleImports 环境变量定义

环境变量定义，是指可以定义一批，可能会被 rule 规则用到的环境变量；
为了能图形化的方法配置规则，这些环境变量通常要自我说明，有哪些字段（以及编辑器）可以被使用

*   实体类的定义是需要事项在 Java 环境中准备好的；
*   规则中用到的业务数据可以通过 BizContext.setValues 添加，也可以编写自定义的懒加载（lazyLoad）方法按需读取；
*   每类实体拥有的属性，可以事先在Java类中定义好，也可以在运行时动态添加（比如可以在数据库中定义属性，亦或者从配置文件中定义属性）

```groovy
package com.galaxis.wms.rule.domain

import com.yvan.rule.RuleUtils

@RuleDomain(title = "物流项目", useFor = EntityUseFor.Program)
class PROJ {

    // 固定属性，可以用注解+属性的方法定义
    @RuleDomainProp(title = "项目ID", order = 1)
    static Long getProject_id() {
        return BizContext.getLong("project_id")
    }

    // 动态的属性，比如要根据数据库中表的字段来动态生成字段, 通过这个函数动态获取
    static () {
        RuleUtils.defineRuleDomainProp(PROJ, name='project_name', bizContextKey="project_name", order = 2, cmpTag="textfield", returnType=String.class)
        
        RuleUtils.defineRuleDomainProp(PROJ, name='project_type', bizContextKey="project_type", order = 3, cmpTag="combo", options = [
            [ value: 'A', label: '项目A' ],
            [ value: 'B', label: '项目B' ],
        ], returnType=String.class)
        
        RuleUtils.defineRuleDomainProp(PROJ, name='is_enable', bizContextKey="project_is_enable", order = 4, cmpTag="checkbox", returnType=Boolean.class)
    }
    
    // 当某个规则需要取某个变量值，但当前上下文并没有加载这个变量时
    // 会发生此请求，按需（比如说去数据库）取值
    @Override
    void lazyLoad(propName: string) {
        def row =  jdbc.queryOne("select t.* from bas_project t where t.project_id=#{proj}", [
            proj: getProject_id()
        ])
        
        PROJ.project_name = row.project_name
        PROJ.project_type = row.project_type
        PROJ.project_scope = row.project_scope
        PROJ.is_enable = row.is_enable
        // ...
    }
}
```

# 参考资料

> <https://blog.csdn.net/justlpf/article/details/127010130>
> <https://www.xjishu.com/zhuanli/55/202210315058.html>
> <https://blog.csdn.net/weixin_53900003/article/details/126884498>

