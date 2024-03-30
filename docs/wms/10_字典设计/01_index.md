---
title: 字典设计
date: 2024-03-27 23:36
author: yvan
---
# title
>[!tip] 字典设计
>字典设计

# 列表
| 字典名                 | 数量     | 类型  | 说明       |
| ---------------------- | --------- | --- | ---------- |
| [SYS_DICT_TYPE](./dict.SYS_DICT_TYPE) | 5 | 静态 | 字典类型 | 
| [SYS_YES_NO](./dict.SYS_YES_NO) | 2 | 静态 | 是否 | 
| [D_WH](./dict.D_WH) | 0 | SQL动态 | 仓库 | 
| [D_AREA](./dict.D_AREA) | 0 | SQL动态 | 库区 | 
| [INV_TYPE](./dict.INV_TYPE) | 12 | 静态 | 库存更新类型 | 
| [PUT_INTENT](./dict.PUT_INTENT) | 5 | 静态 | 上架意向 | 
| [PUT_ALGORITHM_LOCAT](./dict.PUT_ALGORITHM_LOCAT) | 11 | 静态 | 上架算法策略(货位限制条件) | 
| [PUT_ALGORITHM_SPACE](./dict.PUT_ALGORITHM_SPACE) | 5 | 静态 | 上架算法策略(空间限制条件) | 
| [DEVICE_CMD_STATUS](./dict.DEVICE_CMD_STATUS) | 6 | 静态 | 设备指令状态 | 
| [D_OWNER](./dict.D_OWNER) | 0 | SQL动态 | 货主 | 
| [SYS_JWT_TOKEN_DISABLE_REASON](./dict.SYS_JWT_TOKEN_DISABLE_REASON) | 4 | 静态 | token禁用原因 | 
| [SYS_RESOURCE_TYPE](./dict.SYS_RESOURCE_TYPE) | 4 | 静态 | 资源类型 | 
| [SYS_LOGIN_TARGET](./dict.SYS_LOGIN_TARGET) | 2 | 静态 | 登录目标 | 
| [SYS_IS_ENABLE](./dict.SYS_IS_ENABLE) | 2 | 静态 | 是否启用 | 
| [SYS_AUTH_TYPE](./dict.SYS_AUTH_TYPE) | 3 | 静态 | 验证方式 | 
| [SYS_PRINT_TEMPLATE_TARGET_TYPE](./dict.SYS_PRINT_TEMPLATE_TARGET_TYPE) | 1 | 静态 | 打印模板适用范围目标类型 | 
| [PUT_DIMENSION](./dict.PUT_DIMENSION) | 2 | 静态 | 上架分配维度 | 
| [PICK_MODE](./dict.PICK_MODE) | 3 | 静态 | 拣货模式 | 
| [INV_ALLOC_MODE](./dict.INV_ALLOC_MODE) | 6 | 静态 | 库存分配模式 | 
| [ALLOC_MODE](./dict.ALLOC_MODE) | 2 | 静态 | 分配模式 | 
| [ALLOC_TYPE](./dict.ALLOC_TYPE) | 2 | 静态 | 分配类型 | 
| [ORDER_TYPE](./dict.ORDER_TYPE) | 8 | 静态 | 订单类型 | 
| [ORDER_BIZ_TYPE](./dict.ORDER_BIZ_TYPE) | 13 | 静态 | 订单业务类型 | 
| [ORDER_STAGE_TYPE](./dict.ORDER_STAGE_TYPE) | 2 | 静态 | 订单阶段 | 
| [INV_STATUS](./dict.INV_STATUS) | 3 | 静态 | 库存操作单状态 | 
| [INNER_MOVE_STATUS](./dict.INNER_MOVE_STATUS) | 5 | 静态 | 库内库存转移状态 | 
| [INNER_MOVE_TYPE](./dict.INNER_MOVE_TYPE) | 2 | 静态 | 库内库存转移类型 | 
| [IN_STATUS](./dict.IN_STATUS) | 14 | 静态 | 入库状态 | 
| [OUT_STATUS](./dict.OUT_STATUS) | 33 | 静态 | 出库状态 | 
| [AREA_TYPE](./dict.AREA_TYPE) | 8 | 静态 | 库区类型 | 
| [LOC_GROUP_TYPE](./dict.LOC_GROUP_TYPE) | 5 | 静态 | 库位组类型 | 
| [CUSTOM_TYPE](./dict.CUSTOM_TYPE) | 2 | 静态 | 客户类型 | 
| [CONTAINER_TYPE](./dict.CONTAINER_TYPE) | 3 | 静态 | 容器类型 | 
| [CONTAINER_STATE](./dict.CONTAINER_STATE) | 4 | 静态 | 容器状态 | 
| [ITEM_CATEGORY](./dict.ITEM_CATEGORY) | 2 | 静态 | 产品类别 | 
| [ITEM_ABC](./dict.ITEM_ABC) | 3 | 静态 | 产品ABC | 
| [STOCK_ENV](./dict.STOCK_ENV) | 3 | 静态 | 库存环境 | 
| [OUT_STEPS_TYPE](./dict.OUT_STEPS_TYPE) | 3 | 静态 | 出库步骤类型 | 
| [INV_QUALITY_STATUS](./dict.INV_QUALITY_STATUS) | 5 | 静态 | 质量状态 | 
| [ITEM_CLASSIFY](./dict.ITEM_CLASSIFY) | 4 | 静态 | 产品分类 | 
| [PACK_LEVEL](./dict.PACK_LEVEL) | 4 | 静态 | 包装级别 | 
| [LOC_TYPE](./dict.LOC_TYPE) | 20 | 静态 | 库位类型 | 
| [LOC_ENV](./dict.LOC_ENV) | 3 | 静态 | 库存环境 | 
| [LOC_USE](./dict.LOC_USE) | 5 | 静态 | 库位使用方式 | 
| [TRANSPORT_TYPE](./dict.TRANSPORT_TYPE) | 2 | 静态 | 运输类型 | 
| [HANG_TYPE](./dict.HANG_TYPE) | 3 | 静态 | 挂起类型 | 
| [ARG_PRIORITY](./dict.ARG_PRIORITY) | 2 | 静态 | 分配优先级 | 
| [INV_OCCUPATION_TYPE](./dict.INV_OCCUPATION_TYPE) | 2 | 静态 | 库存占用类型 | 
| [EXCEPT_STATUS](./dict.EXCEPT_STATUS) | 3 | 静态 | 异常状态 | 
| [CONVEYANCE](./dict.CONVEYANCE) | 4 | 静态 | 运输方式 | 
| [CONTROL_MODE](./dict.CONTROL_MODE) | 3 | 静态 | 温控方式 | 
| [SIMULATOR_WCS_TASK_CLASSIFY](./dict.SIMULATOR_WCS_TASK_CLASSIFY) | 10 | 静态 | wcs模拟器任务分类 | 
| [SIMULATOR_WCS_TASK_STATUS](./dict.SIMULATOR_WCS_TASK_STATUS) | 5 | 静态 | wcs模拟器任务状态 | 
| [REJECTED_REASON](./dict.REJECTED_REASON) | 6 | 静态 | 拒收原因 | 
| [HANDLE_OPINION](./dict.HANDLE_OPINION) | 3 | 静态 | 处理意见 | 
| [SYSTEM_PARAM](./dict.SYSTEM_PARAM) | 2 | 静态 | 系统参数 | 
| [INV_LEVEL](./dict.INV_LEVEL) | 6 | 静态 | 库存级别 | 
| [USER_GENDER](./dict.USER_GENDER) | 3 | 静态 | 性别 | 
| [ITEM_PHYSI_SPEC](./dict.ITEM_PHYSI_SPEC) | 5 | 静态 | 商品物理特殊规格 | 
| [DATA_SOURCE](./dict.DATA_SOURCE) | 4 | 静态 | 采购订单来源 | 
| [FACT_MODEL](./dict.FACT_MODEL) | 0 | SQL动态 | 规则实体 | 
| [QUALITY_INSPECTION](./dict.QUALITY_INSPECTION) | 4 | 静态 | 质检状态 | 
| [IN_STEP](./dict.IN_STEP) | 5 | 静态 | 入库阶段 | 
| [PACK_UNIT](./dict.PACK_UNIT) | 2 | 静态 | 包装单位 | 
| [DEVICE_CMD_TYPE](./dict.DEVICE_CMD_TYPE) | 2 | 静态 | 设备指令类型 | 
| [DEVICE_REL_TYPE](./dict.DEVICE_REL_TYPE) | 1 | 静态 | 设备关联类型 | 
| [PILER_DIST_PHASE](./dict.PILER_DIST_PHASE) | 2 | 静态 | 堆垛机库分配阶段 | 
| [SHUTTLE_DIST_PHASE](./dict.SHUTTLE_DIST_PHASE) | 2 | 静态 | 穿梭板分配阶段 | 
| [COMMON_STATUS](./dict.COMMON_STATUS) | 3 | 静态 | 通用单据状态 | 
| [INV_OPERATION_TYPE](./dict.INV_OPERATION_TYPE) | 6 | 静态 | 库内操作类型 | 
| [INVENTORY_TYPE](./dict.INVENTORY_TYPE) | 4 | 静态 | 盘点类型 | 
| [INVENTORY_MODE](./dict.INVENTORY_MODE) | 2 | 静态 | 盘点方式 | 
| [AUDIT_STATUS](./dict.AUDIT_STATUS) | 3 | 静态 | 审批状态 | 
| [INV_CMD_STATE](./dict.INV_CMD_STATE) | 3 | 静态 | 指令状态 | 
| [CONNECTOR_TYPE](./dict.CONNECTOR_TYPE) | 3 | 静态 | 接口类型 | 
| [INV_REASON](./dict.INV_REASON) | 17 | 静态 | 指令执行原因 | 