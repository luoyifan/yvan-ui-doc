---
title: rule_rep_bound
desc: 补货上下限规则
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_rep_bound
> 补货上下限规则

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| rep_bound_id | int8 |  | 规则ID | √ | √ |  |
| item_id | int8 |  | 商品ID |  | √ |  |
| pack_id | int8 |  | 包装ID |  |  |  |
| item_type_id | int8 |  | 物料类型ID |  |  |  |
| wh_area_id | int8 |  | 库区ID |  |  |  |
| rep_type | int4 |  | 补货方式 |  |  |  |
| rep_max | int4 |  | 补货上限 |  |  |  |
| rep_min | int4 |  | 补货下限 |  |  |  |
| safe_inv | numeric |  | 安全库存 |  |  |  |
| rep_max_date | int4 |  | 补货上限天数 |  |  |  |
| rep_min_date | int4 |  | 补货下限天数 |  |  |  |
| safe_date | int4 |  | 安全库存天数 |  |  |  |
| agv_out_type | int4 |  | 销量计算法 |  |  |  |
| start_date | varchar | 20 | 开始日期 |  |  |  |
| end_date | varchar | 20 | 结束日期 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |

