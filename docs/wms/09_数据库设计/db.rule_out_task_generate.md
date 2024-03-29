---
title: rule_out_task_generate
desc: 出库任务拆分规则
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] rule_out_task_generate
> 出库任务拆分规则

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| rule_taskgen_id | int8 |  | 任务拆分规则ID | √ | √ |  |
| rule_taskgen_code | varchar | 255 | 任务拆分规则编码 |  | √ |  |
| rule_name | varchar | 255 | 名称 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| remark | varchar | 255 | 备注 |  | √ |  |
| rule_order | int4 |  | 排序 |  | √ |  |
| rule_condition | varchar | 40960 | 规则适用条件 |  | √ |  |
| create_by | varchar | 255 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
