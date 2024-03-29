---
title: bas_wh
desc: 仓库资料
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_wh
> 仓库资料

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| wh_id | int8 |  | 仓库ID | √ | √ |  |
| wh_name | varchar | 255 | 仓库名称 |  |  |  |
| wh_code | varchar | 255 | 仓库编码 |  |  |  |
| is_enable | varchar | 50 | 状态 |  |  | [[dict.IS_ENABLE]] |
| address | varchar | 255 | 地址详情 |  |  |  |
| create_by | varchar | 255 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

