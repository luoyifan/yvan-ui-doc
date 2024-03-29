---
title: rule_putaway_items
desc: 上架库位分配规则
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] rule_putaway_items
> 上架库位分配规则

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| putaway_item_id | int8 |  | 上架规则详情ID | √ | √ |  |
| putaway_rule_id | int8 |  | 上架规则id |  | √ |  |
| sort_num | int4 |  | 序号 |  | √ |  |
| remark | varchar | 255 | 备注 |  |  |  |
| is_enable | varchar | 50 | 是否启用 |  |  | [[dict.IS_ENABLE]] |
| match_condition | varchar | 40960 | 匹配条件 |  |  |  |
| location_range | varchar | 40960 | 库位范围 |  |  |  |
| algorithm_param | varchar | 40960 | 算法步骤和参数 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
#wms/db/基础数据
