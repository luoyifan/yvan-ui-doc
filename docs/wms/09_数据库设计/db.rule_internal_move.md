---
title: rule_internal_move
desc: 库内移动规则
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_internal_move
> 库内移动规则

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| internal_move_id | int8 |  | 库内移动规则id | √ | √ |  |
| order_type | int4 |  | 业务类型 |  | √ |  |
| pipeline_marking | int4 |  | 输送线标示 |  | √ |  |
| is_elevator | int4 |  | 是否电梯 |  | √ | [[dict.YESNO]] |
| wh_area_from_id | int8 |  | 源库区 |  | √ |  |
| wh_area_to_id | int8 |  | 目的库区 |  | √ |  |
| remark | varchar | 255 | 备注 |  |  |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |

