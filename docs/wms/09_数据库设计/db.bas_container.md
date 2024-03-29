---
title: bas_container
desc: 容器资料表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_container
> 容器资料表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| container_id | int8 |  | 容器ID | √ | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| container_code | varchar | 128 | 容器编号 |  | √ |  |
| container_name | varchar | 255 | 容器名称 |  | √ |  |
| container_type | varchar | 50 | 容器类型 |  | √ | [[dict.CONTAINER_TYPE]] |
| container_state | varchar | 50 | 容器状态 |  | √ | [[dict.BAS_CONTAINER_STATE]] |
| ctn_length | numeric |  | 长 |  | √ |  |
| ctn_width | numeric |  | 宽 |  | √ |  |
| ctn_volume | numeric |  | 体积 |  | √ |  |
| ctn_height | numeric |  | 高 |  | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.SYS_IS_ENABLE]] |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |

