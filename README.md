# 介绍
yvan-ui 是凯乐士开发的一套企业级架构框架

凯乐士供应链管理系统（Supply Chain Management System）提供涵盖物流供应链的完整解决方案，其核心系统包括：
- WMS 仓储管理系统 (Warehouse Management System) 仓库管理系统，用于管理仓库内的库存、出入库操作等
- WCS 设备控制系统 (Warehouse Control System) 用于控制仓库内的设备，如输送带、堆垛机等
- WES 仓库执行系统 (Warehouse Execution System) 负责执行具体的仓库操作指令
- MFC 多层穿梭车调度系统 (Multi-Floor Carrier System) 用于调度多层穿梭车的运行
- RCS 机器人控制系统 (Robot Control System).用于控制AGV/RGV设备的操作。
- TMS 运输调度系统 (Transportation Management System) 用于规划和管理运输路线、车辆调度等
- OMS 订单管理系统 (Order Management System)，负责处理和管理来自不同渠道的订单。
- BMS 报表系统 (Business Management System) 用于生成各种报表和数据分析
- AI引擎: 提供路径导航、自动纠偏、环境监测、需求预测、数据分析、数字仿真、预防维护、智能开发等功能。

凯乐士整个软件体系基于自研的凯乐士开发平台构建，在架构层面保持完整并且统一，其项目的个性化扩展能力大大优于传统软件基础平台。
yvan-ui 是一套基于`vue`和`微服务架构`构建的企业级应用系统开发平台，其核心特点在于对系统的关键组成部分进行统一、高效、灵活的管理和配置，旨在提升整体性能、稳定性和可维护性。

二次开发平台功能包括：
- 低代码开发: 通过可视化界面和拖拽式操作，快速开发个性化功能。
- 数据库设计: 灵活设计数据库结构，满足不同业务需求。
- 接口平台: 提供标准化接口，方便与其他系统集成。
- 数据集成平台: 实现不同系统间的数据交换和共享。
- 数据字典: 统一数据定义，确保数据一致性。
- 规则引擎: 灵活配置业务规则，满足个性化需求。
- 流程引擎: 可视化设计业务流程，提高流程效率。

二次开发平台现在与AI进行结合，支持自然语言对话，初步实现个性化功能的自动生成。
大幅提升项目研发和交付效率。

## 平台架构与模块化设计
将流程管理、规则策略配置、接口设计、用户界面搭建、数据库结构和字典设计等关键环节纳入统一管理，使得整个系统具有高度的模块化和集成性。在底层架构和业务逻辑层面经历了全面的重构，多方面提升性能，降低了后期的维护成本和扩展难度。

## 流程引擎
支持对仓储流程（如入库、出库、盘点、质检等）的精细化定义与控制，通过接口算法和明确的流程切分点，确保每个流程步骤清晰可追溯。例如，不同类型的入库流程可以根据实际场景（如自动化入库、人工收货等）以不同的实体（如原箱号、托盘号）作为流程启动标识，进而实现对每个流程实例的独立跟踪与管理。

## 规则引擎
规则引擎，允许用户通过可视化工具如脑图等形式定义复杂的业务计算过程.
凯乐士自研规则引擎性能优异，媲美代码级性能，且灵活性高。
支持多种规则配置，包括：
库存属性规则、上架规则、波次模板（出库模式）规则、出库分配规则、出库任务拆分规则、分播规则、集货规则、作业工位分配规则、界面规则、扩展属性规则、序号生成规则、条码管控规则
满足灵活多变的系统特性。

案例: 某集团公司供应链系统，他在中国的全国各地拥有超400个物流仓库，每个仓库有不同的作业流程，其管理的物料更是五花八门。如工程物料、3C品、医疗器械、快消品等等，每种不同类型的商品也有不同的物料管控要求、不同的拣货模式。

士软件仅需一套部署，即可满足全国 400 多个仓库、不同类型商品的多样化运营需求，展现了规则引擎的强大灵活性。

## 低代码开发
提供便捷的拖拽式界面设计工具，支持快速布局、方便的事件编写，内置丰富的预置业务组件，通过简单的拖放操作和属性定义，就能快速创建符合业务需求的功能界面和交互逻辑。所有功能界面无缝对接流程引擎，确保业务流程执行的顺畅

## 数据字典
包含枚举字典、数据字典设计模块，对各种复杂数据查询视图进行了统一管理，涵盖货主、仓库、库区、客户、商品等多个维度的信息。数据窗口不仅支持多字段检索和关联展示，如根据商品名称查询对应的包装规格和数量，还能方便地嵌入到业务流程中，简化制单及其他业务操作的数据获取与填写过程。

## 接口平台
接口平台提供了内外部系统接口的数据结构定义能力。在接口平台中设计和发布的接口可以直接供流程引擎调用，简化了接口组织与调用的过程，提高了跨系统协同工作的效率。此外，接口平台还支持接口测试、及文档自动生成等功能，减轻了开发和运维的工作负担。

## 数据库设计平台
系统内建数据库设计工具，能够轻松定义系统的数据库表结构。设计完成后，该平台能智能辅助二次开发，自动解析查询字段的中文含义，关联字典翻译，联动数据窗口实现数据回填等操作。此外，数据库设计平台还能一键生成详尽的数据库文档，大幅提高团队间协作效率和项目实施速度。
