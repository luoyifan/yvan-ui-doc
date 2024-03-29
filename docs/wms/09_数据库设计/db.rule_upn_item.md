---
title: rule_upn_item
desc: 条码管控详情表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_upn_item
> 条码管控详情表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| rule_item_id | int8 |  | id | √ | √ |  |
| rule_item_code | varchar | 255 | 规则编码 |  |  |  |
| rule_name | varchar | 255 | 规则名称 |  |  |  |
| is_enable | varchar | 50 | 状态 |  |  |  |
| remark | varchar | 255 | 备注 |  |  |  |
| rule_condition | varchar | 40960 | 条件 |  |  |  |
| create_by | varchar | 255 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 修改人 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |
| is_upn_managment | varchar | 50 | 串码管理 |  |  |  |
| upn1 | varchar | 50 | 串码1 |  |  |  |
| upn2 | varchar | 50 | 串码2 |  |  |  |
| upn3 | varchar | 50 | 串码3 |  |  |  |
| upn4 | varchar | 50 | 串码4 |  |  |  |
| upn5 | varchar | 50 | 串码5 |  |  |  |
| item_id | int8 |  | 物料id |  |  |  |
| is_default | varchar | 50 | 是否默认 |  |  |  |
| rule_order | int4 |  | 排序 |  |  |  |
| rule_upn_id | int8 |  | 管控id |  | √ |  |
| is_box_managment | varchar | 50 | 箱码管理 |  |  |  |
| is_tray_managment | varchar | 50 | 托盘管理 |  |  |  |
| in_process | varchar | 50 | 入库流程设置 |  |  |  |
| pdaupn1 | varchar | 50 | PDA串码1 |  |  |  |
| pdaupn2 | varchar | 50 | PDA串码2 |  |  |  |
| pdaupn3 | varchar | 50 | PDA串码3 |  |  |  |
| pdaupn4 | varchar | 50 | PDA串码4 |  |  |  |
| pdaupn5 | varchar | 50 | PDA串码5 |  |  |  |
| is_all_items | varchar | 50 | 适用全部物料 |  |  | [[dict.YESNO]] |

