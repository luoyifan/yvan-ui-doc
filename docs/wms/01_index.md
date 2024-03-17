---
title: WMS系统介绍
aliases:
- SystemIntroduce
- wms8.5
---
# 系统架构介绍
## 系统介绍
仓储管理系统，管理仓库四堵墙以内的物流作业执行
技术选型：Vue3、JDK1.8、Gradle6.8、PostgreSQL14、Redis、MinIO、K8s、Nacos
组件：Vue3、ElementUI+、VAnt4、x-data-spreadsheet、SpringCloudAlibaba、SpringBoot、Swagger3、XXL-job、MyBatis、QueryDSL、Jackson、OKHttp、Netty、Druid、Camunda、Socketio、Prometheus
功能：基础资料、系统管理、规则管理、入库管理、出库管理、库内管理、查询报表、打印报表

## 框架组件
JDK 1.8
Gradle 6.8.3
PostgreSQL >= 14.0 或同版本Paas服务
Mysql 8.0
Redis >= 6.0或同版本Paas
MiniIO 4.x或S3兼容的对象存储Paas服务
Nacos >= V2.0
ElasticSearch 8.x
Kubernetes  v1.23.15
Rancher v2.6.9
Jenkins 2.361.1
Nexus3 3.47.1
Nginx 1.22.1
Harbor 2.7.0
Node 16.x
Yarn 1.22.19

## 应用架构
![[Pasted image 20240315202941.png]]

- 基于微服务、云架构
- 基于二开平台，开发PC、移动端、大屏、查询报表功能
- 稳定基础功能，配合规则引擎，运转规则
- 基于无代码平台，开发基础资料和单据功能

## 开发分层
![[Pasted image 20240315202947.png]]

## 运维架构
![[Pasted image 20240315202957.png]]

1. Jenkins拉取云效GIT中的源码，借助gradle和nexus构建应用系统docker,并推送至Habor；
2. Rancher是K8s的管理界面，方便架构师和运维团队监控并维护服务集群；
3. K8s从Habor拉起指定版本镜像进行实例部署，并由K8s管理内部负载均衡策略，灰度策略、服务伸缩容、异地容灾都由K8s进行管理；
4. Wms-ui-pc / WMS-ui-mobile 是前端打包后的docker镜像，属于静态资源镜像；
5. WMS系统启动后将自生运行实例注册至nacos，服务之间的调用从nacos中获取服务列表；
6. WMS-Gateway是WMS后端服务接入口，Gateway读取nacos的服务列表，并进行后台服务请求的分发；
7. WMS需要PostgreSQL进行数据库管理；
8. WMS需要ElasticSearch进行索引管理；
9. WMS需要Minio进行文件的存储和管理；
10. WMS需要Redis管理缓存和授权数据；
11. WMS需要Kafka管理日志和消息队列；
12. xxl-job组件用来管理计划任务，并维护被调度任务的调度周期、任务触发、任务分片、负载均衡、失效转移、任务日志等；

## 实际部署案例
![[Pasted image 20240315203015.png]]


# 项目结构介绍
## clone 代码
```shell
git clone http://git.yvanui.com/jztd/wms85std
```

## 项目文件结构
```text
wms     
├── wms-ui-pc           // PC前端 [8185]
├── wms-ui-mobile       // 移动端前端 [8285]
├── wms-gateway         // 网关模块 [8088]
├── wms-api             // 接口模块
│       └── wms-api     // 系统接口
├── wms-common          // 通用模块
│       └── wms-core    // 核心模块
├── wms-modules         // 业务模块
│       └── wms-filemanager // 文件服务 [8081]
│       └── wms-print       // 打印服务 [8082]
│       └── wms-job         // 定时任务 [8083]
│       └── wms-system      // wms服务 [8085]
├──build.gradle             // 项目构建文件
```

## 推荐使用 IntelliJ IDEA 打开 WMS 项目
- 设置构建工具, 为了加快构建速度，建议进行如下设置
```
Settings -> Build -> BuildTools -> Gradle -> Build and runusing 选择 IntelliJ IDEA
```
- 运行 StartWMS 项目
```
wms-modules / wms-system / src / main / java / StartWMS 找到 main 函数运行即可
```
- 启动pc-ui 和 web pda
```shell
cd yvan-vue
yarn 
yarn link

cd wms-ui-pc
yarn link yvan-vue
yarn 
yarn dev

cd yvan-vue-mobile
yarn 
yarn link

cd wms-ui-nobile
yarn link yvan-vue-mobile
yarn 
yarn dev
```

# 数据库设计
表格命名规范
- bas_* 基础资料
- doc_* 单据类
- inv_* 库存类
- sys_* 系统类
- dev_* 开发辅助
- rule_* 规则类
- api_* 接口类
- upload_* 上传类


## 基础资料
![[Pasted image 20240315203033.png]]

- 基础资料基于无代码模式开发功能
- 批量修改、批量添加、批量删除、批量复制粘贴
- 数据刷新按钮
- 支持无感刷新（从服务器拉取数据，但保留分页、筛选、排序、保留选中状态、保留勾选状态）
- 支持父子记录
- 支持树形数据记录（Id-ParentId模式、GroupBy模式、层级串模式）
- 可以对字段自定义他的隐藏、显示，及调整显示顺序，调整完之后能并保存布局
- 字段支持规则式调整（基于某种界面规则，改变字段的所有属性）
- 字段支持权限控制
- 字段过多时，能以详情表单模式展示数据详情
- 数据行的复杂校验
- 级联删除、级联更新、级联新增
- 记录操作日志（用户、IP、操作时间、操作内容）
- 记录审计日志（用户、IP、操作时间、修改了那行记录、更改前的字段值、更改后字段值）
- 逻辑删除（需指定逻辑删除字段）
- 调整行顺序（基于某个排序字段）
- 分页，自定义页大小
- 导出Excel
- 导入Excel
- 快速筛选（前端筛选）
- 前端筛选（按字段筛选）
- 自定义后端查询条件
- 自定义后端排序条件
- 按钮字段 ActionColumn
- 序号字段 SeqColumn
- 勾选字段 CheckColumn
- 基于表达式的行样式
- 基于表达式的单元格样式
- 基于表达式的格式化
- 支持字典格式化
- 支持编辑器：
    - 文本框（正则校验）
    - 数字框（支持小数、小数位数、最大值、最小值）
    - 下拉框（下拉选项、多选、禁用项、树形下拉、为下拉选项编排颜色）
    - 数据窗口（弹出窗口选择数据，并带入数据窗口中的其他字段）
    - 日期框（最大值、最小值）
    - 日期+时间输入框（最大值、最小值）
    - 勾选（三态勾选、勾选值、不勾选值、中间态值）
- 支持代码模式字段扩展
- 支持动态字段扩展

## 入库
![[Pasted image 20240315203041.png]]

## 出库 
![[Pasted image 20240315203046.png]]

## 库内
![[Pasted image 20240315203050.png]]

## 库存
![[Pasted image 20240315203055.png]]

## 系统类
![[Pasted image 20240315203101.png]]

---
# 规则体系
![[Pasted image 20240315203105.png]]

### 参考资料
> https://blog.csdn.net/weixin_53900003/article/details/126884498
> https://blog.csdn.net/justlpf/article/details/127010130
> https://www.xjishu.com/zhuanli/55/202210315058.html

### 规则引擎架构
规则引擎，全称为业务规则管理系统，由推理引擎发展而来，是一种嵌入在应用程序中的组件，实现了将业务决策从应用程序代码中分离出来，并使用预定义的语义模块编写业务决策。接受数据输入，解释业务规则，并根据业务规则做出业务决策

## 凯乐士 WMS-DSL 规则引擎特性

*   图形化编排规则；满足仓储管理人员，不需要懂技术可以修改作业模式；
*   保证性能，规则一旦编译成功，就可以脱离数据库运行规则，最大程度保证系统运行效率；
*   业务隔离，吧项目中经常变化的部分隔离出来，不影响程序主版本；
*   热更新，版本管理，升级管理，及回滚；规则一旦配置失败，可以回滚到上一个版本；配置和配置之间可以保证同步（不会发生更新一半）的情况；
*   保留分析日志；
*   回放规则的运行过程，图形化分析和展示流量情况；
*   规则逻辑复杂的时候可以打断点进行调试，面对异常复杂的配置时，不再是黑盒；
*   框架扩展能力强，并与Java互通，所有Java中的方法都可以被规则引擎调用；
*   规则引擎可监控，可动态变更；可以实现 WMS 一边运行，一边动态的修改作业模式的场景；最大化实现仓储作业灵活的目的

### Strategy-DSL

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
        
        // 命中规则后是否中断执行
        ruleBreak = true
        
        // 是否强制中断执行（无论是否匹配）
        ruleBreakAny = true
        
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
        
        // rule 中可以无限嵌套 rule, 相当于 if 语句内部嵌套 if
        rule {
            when {
                ...
            }
            
            // rule 中可以无限嵌套 rule, 相当于 if 语句内部嵌套 if
            rule {
                ...
            }
            
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


![image.png](https://note.youdao.com/yws/res/30621/WEBRESOURCE5199ac99353ec640473df43baef4ffbb)

目前已包括（不限于）如下13套规则：

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

## 规则实例
### 中通服上架规则
![[Pasted image 20240315203118.png]]

![[Pasted image 20240315203124.png]]

![[Pasted image 20240315203129.png]]

### 中通服波次模板规则
![[Pasted image 20240315203136.png]]

![[Pasted image 20240315203140.png]]

![[Pasted image 20240315203145.png]]

![[Pasted image 20240315203150.png]]

![[Pasted image 20240315203154.png]]

### 中通服出库规则
![[Pasted image 20240315203200.png]]

![[Pasted image 20240315203204.png]]

![[Pasted image 20240315203208.png]]

### 中通服任务拆分规则
![[Pasted image 20240315203213.png]]

### 中通服集货位分配规则
![[Pasted image 20240315203218.png]]

### 中通服作业工位分配规则
![[Pasted image 20240315203223.png]]

### 中通服库存属性规则
![[Pasted image 20240315203228.png]]

![[Pasted image 20240315203232.png]]

### 中航货到人拣货位分配规则
```groovy

Strategy.define {
    strategyName = '货到人拣货位分配规则'

    group {
        groupName = '立体库'

        when {
            LOC.locat_type == '立体库'
        }

        rule {
            ruleName = '常规方案'
            when {
                1 == 1
            }

            then {
                // bas_pick_station 货到人工作站基础资料表
                //      loc_id 货到人工作站关联的货位id
                //      station_id 工作站id
                //      staff_id 当前登录的员工
                //      work_load 已处理工作量
                //      todo_load 待处理工作量
                //      area_id   库区id
                //      group_name  分组名称
                def row = jdbc.queryFirst("select station_id from bas_pick_station where group_name='立体库' order by todo_load asc, work_load asc")

                if (row == null) {
                    throwException('无法分配出库站台')
                }

                returnResult([
                        from: LOC.loc_id,
                        to  : row.station_id
                ])
            }
        }


    }
}
```

### 中航出库流程规则
```
Strategy.define {
    strategyName = '出库拣货完成后执行'

    group {
        groupName = "成品市场"

        when {
            ORDER.order_biz_type == '成品出库'
        }

        rule {

        }
    }

    group {
        groupName = "光电产品部"

        when {
            ORDER.order_biz_type == '配套紧急出库' && OWNER.owner_name == '光电产品部'
        }

        rule {
            ruleName = '紧急订单MES-立体库'

            when {
                LOC.locat_type == '立体库' && SO.priority == 10 // 是紧急订单
            }

            then {
                returnResult([
                        wait_collect: false,
                        agv         : [
                                from: PICK_STATION.agv_pos, // 货到人工作站
                                to  : WORKSHOP.agv_pos  // 车间工位
                        ]
                ])
            }
        }

        rule {
            ruleName = '紧急订单MES-多穿库'

            when {
                LOC.locat_type == '多穿库' && SO.priority == 10 // 是紧急订单
            }

            then {
                returnResult([
                        wait_collect: false,
                        agv         : [
                                from: PICK_STATION.agv_pos, // 货到人工作站
                                to  : WORKSHOP.agv_pos  // 车间工位
                        ]
                ])
            }
        }

        rule {
            ruleName = '紧急订单MES-CTU'

            when {
                LOC.locat_type == 'CTU' && SO.priority == 10 // 是紧急订单
            }

            then {
                returnResult([
                        wait_collect: false,
                        agv         : [
                                from: PICK_STATION.agv_pos, // 货到人工作站
                                to  : WORKSHOP.agv_pos  // 车间工位
                        ]
                ])
            }
        }

        rule {
            ruleName = '紧急订单MES-平库'

            when {
                LOC.locat_type == '平库' && SO.priority == 10 // 是紧急订单
            }

            then {
                returnResult([
                        wait_collect: false,
                        agv         : [
                                from: PICK_STATION.agv_pos, // 货到人工作站
                                to  : WORKSHOP.agv_pos  // 车间工位
                        ]
                ])
            }
        }

        rule {
            ruleName = '配套出库-立体库-洁净物料'

            when {
                LOC.locat_type == '立体库' && SO.priority < 10 && SO.is_clean_item == '0001'
            }

            then {
                // 从系统参数中，取洁净室 agv点位
                Long agvPos = Conv.asLong(SysParam.get('clean_room_agv_pos'))

                returnResult([
                        wait_collect: true,
                        agv         : [
                                from: PICK_STATION.agv_pos, // 货到人工作站
                                to  : agvPos
                        ]
                ])
            }
        }

        rule {
            ruleName = '配套出库-立体库-非洁净'

            when {
                LOC.locat_type == '立体库' && SO.priority < 10 && SO.is_clean_item != '0001'
            }

            then {
                // 判断车间缓存区是否够用
                // bas_buffer_info
                //      loc_id 缓存区关联的货位ID
                //      agv_pos 缓存位对应 AGV点位
                //      is_free 是否剩余
                Long freeScala = Conv.asLong(SysParam.get('buff_free_scala')) // 0.8
                List<Map> ret = jdbc.queryMany("select is_free, count(*) as cnt from bas_buffer_info group by is_free")
                def db = ret[0].cnt / (ret[1].cnt + ret[0].cnt)
                if (db > freeScala) {
                    // 有缓存位
                    Long buff_agv_pos = Conv.asLong(SysParam.get('buff_agv_pos')) // 0.8
                    def agvRow = jdbc.queryFirst("select agv_pos from bas_buffer_info where is_free == '0001'")
                    returnResult([
                            wait_collect: true,
                            agv         : [
                                    from: PICK_STATION.agv_pos, // 货到人工作站
                                    to  : agvRow.agv_pos
                            ]
                    ])
                } else {
                    // 没有缓存位
                    returnResult([
                            wait_collect: true,
                            reback      : true, // 回立体库
                    ])
                }
            }
        }
    }

    group {
        groupName = "液冷事业部"

        when {
            ORDER.order_biz_type == '配套紧急出库' && OWNER.owner_name == '液冷事业部'
        }
    }

    group {
        groupName = "制造二部"

        when {
            ORDER.order_biz_type == '配套紧急出库' && OWNER.owner_name == '制造二部'
        }
    }
}

```

### 中航上架规则
```
Strategy.define {
    strategyName = '上架规则'

    rule {
        ruleName = '写死货位'

        when {
            1 == 1
        }

        then {
            returnResult([
                    loc_id: 10000L
            ])
        }
    }

    rule {
        ruleName = '特殊库房'
        when {
            return DOC_ASN.intention == '指定库房入库' && ITEM.jj_flag == true && ITEM.whole == false && DOC_ASN.target_area_id
        }

        then {
            returnResult([
                    sqlLocWhere: "bas_location_area.wh_area_type === '平库' and bas_location.wh_area_id == " + DOC_ASN.target_area_id,
                    arg        : [
                            '扎堆算法',
                            '空货位算法',
                            '混放算法'
                    ]
            ])
        }
    }

    rule {
        ruleName = '立体库低货位找巷道'

        when {
            return DOC_ASN.intention == '立体库' && ITEM.whole == true && ITEM.whole_height == 2
        }

        then {
            returnResult([
                    sqlLocWhere: "bas_location_area.wh_area_type === '立体库'",
                    arg        : [
                            '立体库均分算法'
                    ]
            ])
        }
    }

    rule {
        ruleName = '立体库高货位找巷道'

        when {
            return DOC_ASN.intention == '立体库' && ITEM.whole == true && ITEM.whole_height == 1
        }

        then {
            returnResult([
                    sqlLocWhere: "bas_location_area.wh_area_type === '立体库' and bas_location.heigh_limit == 'height'",
                    arg        : [
                            '立体库均分算法'
                    ]
            ])
        }
    }

    rule {
        ruleName = '立体库巷道内找货位'

        when {
            return DOC_ASN.ltk_flag == true
        }

        then {
            returnResult([
                    sqlLocWhere: "bas_location_area.wh_area_type === '立体库' and bas_location.row = " + DOC_ASN.ltk_row,
                    arg        : [
                            '立体库均分算法'
                    ]
            ])
        }
    }

    rule {
        ruleName = '多穿库'

        when {
            return DOC_ASN.intention == '多穿'
        }

        then {
            returnResult([
                    sqlLocWhere: "bas_location_area.wh_area_type === '多穿库'",
                    arg        : [
                            '多穿库分配算法'
                    ]
            ])
        }
    }

    rule {
        ruleName = 'CTU'

        when {
            return DOC_ASN.intention == 'CTU'
        }

        then {
            returnResult([
                    sqlLocWhere: "bas_location_area.wh_area_type === 'CTU'",
                    arg        : [
                            'CTU分配算法'
                    ]
            ])
        }
    }


}

```

# 源码结构
![[Pasted image 20240315203248.png]]

# 二次开发平台
### 特性
- 基于 Vue3 框架
- 页面可视化设计、支持前后端一体化、快速开发
- 完全兼容 vue 原生写法，可以相互嵌套、互相引用
- 前端工程师、后台工程师、运维工程师都能维护，带代码提示功能
- 完全自主开发设计，30+基础组件，扩展方便
- 平台开发成果基于源码管理，便于版本和分支管理，便于复制粘贴、手动调整

### 进入二开
![[Pasted image 20240315203254.png]]

1. 系统登录之后，点击右上角账号，在下拉菜单中点击“银河开发平台”进入二开平台；
1. 在功能模块的抬头上，点击齿轮图标，也可进入当前模块的二开中
1. 只有开发环境（本地启动的环境）才有进入开发平台的功能，测试和生产环境是没有这个菜单项的；
 
![[Pasted image 20240315203300.png]]

### 主界面介绍
![[Pasted image 20240315203317.png]]

### 数据库设计
![[Pasted image 20240315203321.png]]

### 枚举字典设计
![[Pasted image 20240315203325.png]]

### 数据字典设计
![[Pasted image 20240315203330.png]]

### 功能开发过程演示
![[Pasted image 20240315203336.png]]
- 新建的模块路径都是相对于 pages 文件夹的
- 功能名称必须是合法的文件名字: 英文+数字，如果带中文可能在不同的操作系统产生不可预计的bug，因此不推荐
- 系统内置2套PC模板：空布局、单表格, 选用不同的模板，会呈现不同的内容模板
- 无论采用何种布局，最好是将模块属性的"自适应高度"打开，才能保证内部的组件可以填充剩余高度，达到 height:100% 的效果

#### 空布局
![[Pasted image 20240315203342.png]]

#### 单表格
![[Pasted image 20240315203346.png]]

#### 自适应高度
![[Pasted image 20240315203349.png]]

### 表格组件用法
#### 给表格组件命名
![[Pasted image 20240315203433.png]]

![[Pasted image 20240315203438.png]]

#### 设置表格字段
设置表格字段有4种方法：
- 复制字段
- 拖拽字段
- 属性面板添加字段
- 从数据源自动分析字段

##### 复制
![[Pasted image 20240315203426.png]]

##### 属性面板添加字段
![[Pasted image 20240315203444.png]]

#### 从数据源自动分析字段
![[Pasted image 20240315203451.png]]

![[Pasted image 20240315203456.png]]

#### 为表格设置数据源
1.选中表格
2.切换到数据源面板
3.为SQL取名，并且SQL名称必须功能模块种唯一
4.点击编辑SQL按钮，填写 SQL
![[Pasted image 20240315203507.png]]

#### 常见表格的代码
##### 刷新
![[Pasted image 20240315203512.png]]
```js
this.refs.grid1.reload()
```

#### 添加
```js
this.refs.grid1.appendEditRow({
    field1: 'a',
    field2: 'b'
})
```

#### 删除
```js
this.refs.grid1.removeEditRow()
```

#### 保存
```js
this.refs.grid1.saveToServer()
```

### 表单组件用法
- 拖拽表单, 并给表单一个名字(Reference)
- 拖拽字段编辑器，并编写“数据模型”属性
- 填写标签名
- 填写是否必填校验
- 校验和提交

![[Pasted image 20240315203521.png]]

![[Pasted image 20240315203525.png]]

![[Pasted image 20240315203528.png]]

![[Pasted image 20240315203532.png]]

#### 表单校验和提交代码
```js
this.refs.form1.validate().then(res=>{
    // 校验成功
    system.invokeServer('/foo/bar@saveData', this.form).then(res=>{
        // 保存成功
        system.msg('保存成功')
    })
})
```

### 数据双向绑定
- 组件支持属性的双向绑定，比如 visible 属性基于某种计算公式
- 演示按钮的 visible / 下拉选项控制表单字段隐藏
- 演示表格选中行控制按钮 disabled 属性
- 演示父子表关联查询

### 扩展属性/库存属性见文档
#### 介绍

界面在设计开发完成之后，能够干预到界面的还有4套规则体系

扩展属性，借助字段扩展包，可以在已有的表格/表单上新增字段（保存的时候物理字段必须提前预留）；

界面规则，在不同的业务条件情况下，已有的表格/表单的字段可以被改成新的设定，并且能够为每个字段设定显示顺序；

库存属性，是指在不同的业务条件下，库存属性可以新增到已有的表单或表格中（库存属性字段可以在生产环境自由添加）；

界面权限，可以为不同的角色，指定功能模块下的指定字段禁用（多个角色合并时可以设定"强制启用"，覆盖多角色合并权限带来的问题）

#### 界面规则管理

![[Pasted image 20240315203542.png]]

#### 扩展属性包管理

![[Pasted image 20240315203546.png]]

#### 库存属性

![[Pasted image 20240315203550.png]]

#### 按钮级权限

![[Pasted image 20240315203556.png]]

#### 功能开发方法

开发系统功能，需要注意如下方面

##### 开启界面权限

![image.png](https://note.youdao.com/yws/res/29335/WEBRESOURCEe4e52278b8e5de1b607d4584e2371860)

*   填写模块“标题”、并勾选了"启用界面规则"。完成这两步之后，就可以进入角色管理中的“界面权限”列表中了；
*   注意：并不是所有界面都要勾选“启用界面权限”；勾选过界面权限的模块，在打开之前，都会到服务端请求权限数据，会带来性能的影响；

##### 启用界面规则

![[Pasted image 20240315203602.png]]

*   界面规则，主体是基于项目ID(project\_id)作为判断依据的，都要在"模块属性"->界面规则请求体->添加请求参数
*   请求参数名可以不填写，请求参数体，就是 project\_id 所在的表单体
*   并且在项目ID发生变化的时候，主动调用

![[Pasted image 20240315203618.png]]

![[Pasted image 20240315203623.png]]

##### 启用扩展属性
选中模块，填写 project\_id 所在的表单的前缀

![image.png](https://note.youdao.com/yws/res/29353/WEBRESOURCEda2c620bbd0ddc3c5ee7a5f4b20f3a66)

在所在表单，填写 uiBlock属性

![[Pasted image 20240315203628.png]]

![[Pasted image 20240315203633.png]]

第三步，拖拽字段插槽，属性名填“扩展字段”，并填写扩展属性前缀

![[Pasted image 20240315203639.png]]

![[Pasted image 20240315203643.png]]

##### 统一校验方法 validateForms()

*   为了保持扩展字段的校验逻辑能生效，统一校验方法为:  this.validateForms()

```js
this.validateForms().then(()=> {
	alert('校验通过')
})
```

![[Pasted image 20240315203653.png]]

##### 启用动态库存属性

![[Pasted image 20240315203658.png]]

![[Pasted image 20240315203703.png]]


### 源码结构
![[Pasted image 20240315203708.png]]

![[Pasted image 20240315203712.png]]

![[Pasted image 20240315203716.png]]

- 二开生成的文件分为4个
- xxxx.vue, 为Vue前端文件，一般情况无需理会，除非需要手动开发Vue模块，或超大的方法，Vue种编写的所有方法和属性，可以与二开环境互通
- xxxx.groovy 后端逻辑文件，前端通过API system.invokeServer('路径@方法名').then(ret=>{}) 进行调用
```js
system.invokeServer('路径@方法名').then(ret=>{
    if(ret.success) {
        system.msg('调用成功')
    }
})
```
- xxxx.xml 存储 sql 语句文件
- xxxx.design.js 文件，二开设计器设计的源码文件
![[Pasted image 20240315203723.png]]



### 二开源码及扩展
- 任何 Vue 组件甚至 HTML 元素都可以封装变成组件
- 扩展1个组件，需要编写3个文件+1处修改
- 编写 yv-design-xxx.vue 组件，用于在设计器中展示组件
- 编写 yv-design-xxx-prop.vue 组件，用于展示属性面板
- 编写 yv-vjson-button.vue 组件，用于在运行时展示组件
- 修改 yv-designer-toolbox-config.js ,在工具箱中展示组件

![[Pasted image 20240315203730.png]]

![[Pasted image 20240315203733.png]]

![[Pasted image 20240315203738.png]]

![[Pasted image 20240315203742.png]]

[[02_NamingConventions]]