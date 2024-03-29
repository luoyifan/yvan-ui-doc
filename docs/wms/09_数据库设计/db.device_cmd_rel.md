---
title: device_cmd_rel
desc: 设备指令关联信息
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] device_cmd_rel
> 设备指令关联信息

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| doc_id | int8 |  | 订单ID | √ | √ |  |
| doc_line_no | int4 |  | 订单行ID | √ | √ |  |
| device_cmd_id | int8 |  | 设备指令id | √ | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| doc_table_name | varchar | 255 | 关联业务表名称 |  | √ |  |
| bpmn_biz_key | varchar | 255 | 工作流业务号 |  | √ |  |

