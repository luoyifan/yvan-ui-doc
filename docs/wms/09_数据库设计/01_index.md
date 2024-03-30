---
title: 数据库设计
date: 2024-03-27 23:46
author: yvan
---

# title
>[!tip] 数据库设计
>数据库设计

# 列表
| 表格名 | 分类 | 备注 |
| --- | --- | --- |
| [bas_address](./db.bas_address) | 表格 | 地址库 | 
| [bas_container](./db.bas_container) | 表格 | 容器资料表 | 
| [bas_customer](./db.bas_customer) | 表格 | 单位资料 | 
| [bas_customer_address](./db.bas_customer_address) | 表格 | 单位多地址资料 | 
| [bas_device](./db.bas_device) | 表格 | 设备基础资料表 | 
| [bas_item](./db.bas_item) | 表格 | 产品资料基础属性 | 
| [bas_location](./db.bas_location) | 表格 | 货位 | 
| [bas_location_group](./db.bas_location_group) | 表格 | 货位组 | 
| [bas_location_group_rel](./db.bas_location_group_rel) | 表格 | 货位组货位关系表 | 
| [bas_login_agent](./db.bas_login_agent) | 表格 | 登录 | 
| [bas_owner](./db.bas_owner) | 表格 | 货主 | 
| [bas_package](./db.bas_package) | 表格 | 产品包装基础属性 | 
| [bas_package_items](./db.bas_package_items) | 表格 | 产品包装控制属性 | 
| [bas_region](./db.bas_region) | 表格 | 仓库区域资料 | 
| [bas_report](./db.bas_report) | 表格 | 查询报表 | 
| [bas_report_condition](./db.bas_report_condition) | 表格 | 报表查询条件 | 
| [bas_report_field](./db.bas_report_field) | 表格 |  | 
| [bas_report_sum](./db.bas_report_sum) | 表格 | 报表查询汇总 | 
| [bas_role](./db.bas_role) | 表格 | 角色 | 
| [bas_role_ui_permission](./db.bas_role_ui_permission) | 表格 | UI权限控制表 | 
| [bas_staff](./db.bas_staff) | 表格 | 职员基础资料 | 
| [bas_user](./db.bas_user) | 表格 | 用户 | 
| [bas_user_owner_rel](./db.bas_user_owner_rel) | 表格 | 用户货主关系表 | 
| [bas_user_role_rel](./db.bas_user_role_rel) | 表格 | 用户角色关系表 | 
| [bas_wh](./db.bas_wh) | 表格 | 仓库资料 | 
| [bas_wh_area](./db.bas_wh_area) | 表格 | 库区 | 
| [bas_wh_owner](./db.bas_wh_owner) | 表格 | 仓库货主关系表 | 
| [dev_convert](./db.dev_convert) | 表格 | 系统转换规则 | 
| [dev_express_domain](./db.dev_express_domain) | 表格 | 表达式业务域定义 | 
| [dev_express_form](./db.dev_express_form) | 表格 | 表达式构建 | 
| [dev_express_form_items](./db.dev_express_form_items) | 表格 | 表达式构建 | 
| [device_cmd](./db.device_cmd) | 表格 | 设备指令表 | 
| [device_cmd_rel](./db.device_cmd_rel) | 表格 | 设备指令关联信息 | 
| [dev_ops](./db.dev_ops) | 表格 | 运维OPS | 
| [dev_params](./db.dev_params) | 表格 | 二开配置表 | 
| [dev_print_plan](./db.dev_print_plan) | 表格 | 打印场景 | 
| [dev_print_plan_template_rel](./db.dev_print_plan_template_rel) | 表格 | 打印场景模板关系表 | 
| [dev_print_record](./db.dev_print_record) | 表格 | 打印记录表 | 
| [dev_print_task](./db.dev_print_task) | 表格 | 打印任务表 | 
| [dev_print_template](./db.dev_print_template) | 表格 | 打印模板 | 
| [dev_print_template_paper](./db.dev_print_template_paper) | 表格 | 打印模板纸张 | 
| [dev_print_template_param](./db.dev_print_template_param) | 表格 | 打印模板参数表 | 
| [dev_print_template_use_scope](./db.dev_print_template_use_scope) | 表格 | 打印模板使用范围 | 
| [dev_print_terminal](./db.dev_print_terminal) | 表格 | 打印终端 | 
| [dev_print_terminal_printer_rel](./db.dev_print_terminal_printer_rel) | 表格 | 打印终端与打印机关系信息 | 
| [dev_report](./db.dev_report) | 表格 | 查询报表 | 
| [dev_token_example](./db.dev_token_example) | 表格 | 压力测试用的授权示例 | 
| [dev_transform](./db.dev_transform) | 表格 | 数据转换资料 | 
| [dev_transform_log](./db.dev_transform_log) | 表格 | 数据转换日志 | 
| [dev_user](./db.dev_user) | 表格 | 二开用户表 | 
| [doc_alloc_items](./db.doc_alloc_items) | 表格 | 分配明细表 | 
| [doc_alloc_so_items_rel](./db.doc_alloc_so_items_rel) | 表格 | 分配与订单明细关系表 | 
| [doc_asn](./db.doc_asn) | 表格 | 到货通知单 | 
| [doc_asn_items](./db.doc_asn_items) | 表格 | 到货通知单明细表 | 
| [doc_asn_items_upn](./db.doc_asn_items_upn) | 表格 | 到货通知单明细唯一码表 | 
| [doc_container_swap](./db.doc_container_swap) | 表格 | 容器商品换箱 | 
| [doc_container_swap_items](./db.doc_container_swap_items) | 表格 | 容器商品换箱明细 | 
| [doc_inner_move](./db.doc_inner_move) | 表格 | 库内库存转移单 | 
| [doc_inner_move_items](./db.doc_inner_move_items) | 表格 | 移库单明细 | 
| [doc_inv_diff](./db.doc_inv_diff) | 表格 | 库存差异记录 | 
| [doc_inventory](./db.doc_inventory) | 表格 | 库存盘点 | 
| [doc_inventory_items](./db.doc_inventory_items) | 表格 | 库存盘点明细 | 
| [doc_inv_operation](./db.doc_inv_operation) | 表格 | 库内处理单 | 
| [doc_inv_operation_items](./db.doc_inv_operation_items) | 表格 | 库内处理单明细 | 
| [doc_pick_task](./db.doc_pick_task) | 表格 | 拣货任务 | 
| [doc_pick_task_items](./db.doc_pick_task_items) | 表格 | 拣货任务明细 | 
| [doc_pick_task_real_items](./db.doc_pick_task_real_items) | 表格 | 拣货任务实际明细 | 
| [doc_po](./db.doc_po) | 表格 | 采购订单表 | 
| [doc_po_items](./db.doc_po_items) | 表格 | 采购单汇总表 | 
| [doc_pre_alloc_items](./db.doc_pre_alloc_items) | 表格 | 预分配明细表 | 
| [doc_put](./db.doc_put) | 表格 | 上架单汇总表 | 
| [doc_put_items](./db.doc_put_items) | 表格 | 上架单明细表 | 
| [doc_put_items_upn](./db.doc_put_items_upn) | 表格 | 上架单明细细唯一码表 | 
| [doc_put_real_items](./db.doc_put_real_items) | 表格 | 上架单实际明细 | 
| [doc_quality](./db.doc_quality) | 表格 | 质检单 | 
| [doc_quality_items](./db.doc_quality_items) | 表格 | 质检单明细 | 
| [doc_receipt](./db.doc_receipt) | 表格 | 收货单汇总表 | 
| [doc_receipt_items](./db.doc_receipt_items) | 表格 | 收货单明细表 | 
| [doc_receipt_items_upn](./db.doc_receipt_items_upn) | 表格 | 收货单明细唯一码表 | 
| [doc_review_task](./db.doc_review_task) | 表格 | 复核任务 | 
| [doc_review_task_items](./db.doc_review_task_items) | 表格 | 复核任务明细 | 
| [doc_review_task_real_items](./db.doc_review_task_real_items) | 表格 | 复核任务实际明细 | 
| [doc_ship_task](./db.doc_ship_task) | 表格 | 发运任务 | 
| [doc_ship_task_items](./db.doc_ship_task_items) | 表格 | 发运任务明细 | 
| [doc_ship_task_real_items](./db.doc_ship_task_real_items) | 表格 | 发运任务实际明细 | 
| [doc_so](./db.doc_so) | 表格 | 出库订单 | 
| [doc_so_items](./db.doc_so_items) | 表格 | 出库订单明细 | 
| [doc_so_items_exception](./db.doc_so_items_exception) | 表格 | 订单分配异常明细 | 
| [doc_wave](./db.doc_wave) | 表格 | 波次汇总表 | 
| [doc_wave_items](./db.doc_wave_items) | 表格 | 波次订单明细 | 
| [inv_cmd](./db.inv_cmd) | 表格 | 库存记账指令 | 
| [inv_item](./db.inv_item) | 表格 | 商品库存 | 
| [inv_loc_primary](./db.inv_loc_primary) | 表格 | 商品批次库位一级容器库存 | 
| [inv_lot](./db.inv_lot) | 表格 | 商品批次库存 | 
| [inv_lot_att](./db.inv_lot_att) | 表格 | 库存批属性资料 | 
| [inv_lot_loc](./db.inv_lot_loc) | 表格 | 商品批次库位库存 | 
| [inv_primary_secondary](./db.inv_primary_secondary) | 表格 | 商品批次库位二级容器库存 | 
| [inv_secondary_upn](./db.inv_secondary_upn) | 表格 | 商品批次库位容器唯一码库存 | 
| [inv_snapshot](./db.inv_snapshot) | 表格 | 库存快照 | 
| [inv_upn_rel](./db.inv_upn_rel) | 表格 | UPN关联关系表 | 
| [rule_abc](./db.rule_abc) | 表格 | ABC计算规则 | 
| [rule_abc_items](./db.rule_abc_items) | 表格 | abc规则明细 | 
| [rule_apply](./db.rule_apply) | 表格 | 规则应用 | 
| [rule_cou_lot](./db.rule_cou_lot) | 表格 | 盘点库存属性表 | 
| [rule_cou_lot_item](./db.rule_cou_lot_item) | 表格 | 盘点属性规则明细 | 
| [rule_domain](./db.rule_domain) | 表格 | 领域规则 | 
| [rule_domain_fields](./db.rule_domain_fields) | 表格 | 领域规则字段 | 
| [rule_extprop](./db.rule_extprop) | 表格 | 扩展字段包 | 
| [rule_extprop_items](./db.rule_extprop_items) | 表格 | 字段扩展包字段详情 | 
| [rule_internal_move](./db.rule_internal_move) | 表格 | 库内移动规则 | 
| [rule_lot](./db.rule_lot) | 表格 | 批属性规则 | 
| [rule_lot_items](./db.rule_lot_items) | 表格 | 批属性规则明细 | 
| [rule_lot_repo](./db.rule_lot_repo) | 表格 | 库存属性知识库 | 
| [rule_out](./db.rule_out) | 表格 | 出库分配规则 | 
| [rule_out_collect](./db.rule_out_collect) | 表格 | 集货位规则主表 | 
| [rule_out_collect_items](./db.rule_out_collect_items) | 表格 | 集货位规则明细表 | 
| [rule_out_inv_reservation](./db.rule_out_inv_reservation) | 表格 | 库存预占规则 | 
| [rule_out_inv_trunover](./db.rule_out_inv_trunover) | 表格 | 库存周转规则 | 
| [rule_out_location_selection](./db.rule_out_location_selection) | 表格 | 包装分配规则 | 
| [rule_out_seed](./db.rule_out_seed) | 表格 | 分播规则主表 | 
| [rule_out_seed_items](./db.rule_out_seed_items) | 表格 | 分播规则明细 | 
| [rule_out_task_generate](./db.rule_out_task_generate) | 表格 | 出库任务拆分规则 | 
| [rule_out_task_generate_items](./db.rule_out_task_generate_items) | 表格 | 出库任务拆分明细表 | 
| [rule_project_doc](./db.rule_project_doc) | 表格 |  | 
| [rule_putaway](./db.rule_putaway) | 表格 | 上架库位分配规则 | 
| [rule_putaway_items](./db.rule_putaway_items) | 表格 | 上架库位分配规则 | 
| [rule_rep_bound](./db.rule_rep_bound) | 表格 | 补货上下限规则 | 
| [rule_ui_cmp](./db.rule_ui_cmp) | 表格 | UI规则客户自定义表 | 
| [rule_ui_extprop](./db.rule_ui_extprop) | 表格 | 页面版本与扩展属性包关系 | 
| [rule_ui_order](./db.rule_ui_order) | 表格 |  | 
| [rule_ui_page](./db.rule_ui_page) | 表格 | 功能模块 | 
| [rule_ui_version](./db.rule_ui_version) | 表格 | 功能模块版本 | 
| [rule_upn](./db.rule_upn) | 表格 | 条码管控表 | 
| [rule_upn_item](./db.rule_upn_item) | 表格 | 条码管控详情表 | 
| [rule_upn_item_item](./db.rule_upn_item_item) | 表格 | 规则物料表 | 
| [rule_view](./db.rule_view) | 表格 |  | 
| [rule_view_fields](./db.rule_view_fields) | 表格 |  | 
| [rule_wave_template](./db.rule_wave_template) | 表格 |  | 
| [rule_wave_template_sections](./db.rule_wave_template_sections) | 表格 | 出库模式段落定义 | 
| [rule_workstation](./db.rule_workstation) | 表格 | 作业工位分配主表 | 
| [rule_workstation_items](./db.rule_workstation_items) | 表格 | 波次模板主表 | 
| [simulator_wcs_task](./db.simulator_wcs_task) | 表格 | wcs模拟器任务表 | 
| [simulator_wcs_task_cancel](./db.simulator_wcs_task_cancel) | 表格 | wcs模拟器任务取消表 | 
| [sys_api](./db.sys_api) | 表格 | api接口 | 
| [sys_api_secret](./db.sys_api_secret) | 表格 | 调度器 | 
| [sys_app](./db.sys_app) | 表格 | 系统应用集 | 
| [sys_app_version](./db.sys_app_version) | 表格 | 应用程序版本 | 
| [sys_biz_code](./db.sys_biz_code) | 表格 | 业务编码表 | 
| [sys_bpmn](./db.sys_bpmn) | 表格 | 系统工作流表 | 
| [sys_bpmn_map](./db.sys_bpmn_map) | 表格 | 工作流业务实例映射表 | 
| [sys_data_version](./db.sys_data_version) | 表格 | 数据版本 | 
| [sys_dictionary](./db.sys_dictionary) | 表格 | 系统字典 | 
| [sys_dictionary_items](./db.sys_dictionary_items) | 表格 | 系统字典项 | 
| [sys_graph](./db.sys_graph) | 表格 | 系统工作流表 | 
| [sys_jwt_token](./db.sys_jwt_token) | 表格 | 登录JWT Token缓存表 | 
| [sys_lock](./db.sys_lock) | 表格 | 锁 | 
| [sys_login_failed_count](./db.sys_login_failed_count) | 表格 | 用户连续登录失败次数 | 
| [sys_login_log](./db.sys_login_log) | 表格 | 登录日志 | 
| [sys_module](./db.sys_module) | 表格 |  | 
| [sys_operator_log](./db.sys_operator_log) | 表格 | 操作日志 | 
| [sys_oper_log](./db.sys_oper_log) | 表格 | 操作日志表 | 
| [sys_oper_log_category](./db.sys_oper_log_category) | 表格 | 操作日志分类提取表 | 
| [sys_param](./db.sys_param) | 表格 | 系统参数表 | 
| [sys_param_items](./db.sys_param_items) | 表格 | 系统参数详情表 | 
| [sys_resource](./db.sys_resource) | 表格 | 系统菜单表 | 
| [sys_role_resource](./db.sys_role_resource) | 表格 |  | 
| [sys_rule_define](./db.sys_rule_define) | 表格 | 规则定义 | 
| [sys_rule_fact](./db.sys_rule_fact) | 表格 | 规则实体 | 
| [sys_user_security_context](./db.sys_user_security_context) | 表格 | 用户权限信息缓存表 | 
| [tab1](./db.tab1) | 表格 |  | 
| [task_http_job](./db.task_http_job) | 表格 | Http任务 | 
| [task_java_job](./db.task_java_job) | 表格 | js脚本任务 | 
| [task_job](./db.task_job) | 表格 | 定时任务 | 
| [task_job_console_log](./db.task_job_console_log) | 表格 | 任务控制台日志 | 
| [task_job_log](./db.task_job_log) | 表格 | 任务执行日志 | 
| [task_job_trigger](./db.task_job_trigger) | 表格 | 任务触发器 | 
| [task_job_trigger_log](./db.task_job_trigger_log) | 表格 | 任务触发器日志 | 
| [task_js_job](./db.task_js_job) | 表格 | js脚本任务 | 
| [task_report](./db.task_report) | 表格 | 任务执行报表 | 
| [task_scheduler](./db.task_scheduler) | 表格 | 调度器 | 
| [task_scheduler_cmd](./db.task_scheduler_cmd) | 表格 | 调度器指令 | 
| [task_scheduler_log](./db.task_scheduler_log) | 表格 | 调度器事件日志 | 
| [task_shell_job](./db.task_shell_job) | 表格 | js脚本任务 | 