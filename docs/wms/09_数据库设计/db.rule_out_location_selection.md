---
title: rule_out_location_selection
desc: 包装分配规则
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_out_location_selection
> 包装分配规则

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| rule_outloc_id | int8 |  | 包装分配规则ID | √ | √ |  |
| rule_outloc_code | varchar | 255 | 包装分配规则编码 |  | √ |  |
| rule_out_id | int8 |  | 出库分配规则 |  | √ |  |
| rule_name | varchar | 255 | 规则名称 |  | √ |  |
| rule_order | int4 |  | 序号 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| remark | varchar | 255 | 备注 |  | √ |  |
| rule_condition | varchar | 40960 | 适用条件 |  | √ |  |
| rule_filter_sql | varchar | 40960 | 库存查询条件 |  | √ |  |
| rule_param | varchar | 40960 | 算法参数 |  | √ |  |
| create_by | varchar | 255 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

