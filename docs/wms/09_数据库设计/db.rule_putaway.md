---
title: rule_putaway
desc: 上架库位分配规则
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] rule_putaway
> 上架库位分配规则

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| putaway_rule_id | int8 |  | 上架规则ID | √ | √ |  |
| putaway_rule_code | varchar | 128 | 上架规则编号 |  |  |  |
| putaway_rule_name | varchar | 255 | 上架规则名称 |  |  |  |
| is_enable | varchar | 50 | 是否启用 |  |  | [[dict.IS_ENABLE]] |
| remark | varchar | 255 | 备注 |  |  |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| rule_sort | int4 |  | 排序 |  |  |  |
| rule_expr | varchar | 40960 | 匹配表达式 |  | √ |  |
#wms/db/基础数据
