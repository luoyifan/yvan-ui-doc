---
title: rule_cou_lot
desc: 盘点库存属性表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] rule_cou_lot
> 盘点库存属性表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| rule_cou_lot_id | int8 |  | 项目规则ID | √ | √ |  |
| project_id | int8 |  | 项目ID |  | √ |  |
| project_code | varchar | 255 | 项目编码 |  | √ |  |
| project_name | varchar | 255 | 项目名称 |  | √ |  |
| is_enable | varchar | 255 | 是否启用 |  | √ |  |
| create_by | varchar | 255 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| remark | varchar | 255 | 备注 |  |  |  |
#wms/db/基础数据
