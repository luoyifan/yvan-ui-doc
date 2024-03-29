---
title: doc_container_swap
desc: 容器商品换箱
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_container_swap
> 容器商品换箱

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| swap_id | int8 |  | 换箱ID | √ | √ |  |
| swap_status | varchar | 50 | 换箱状态 |  |  |  |
| staff_id | int8 |  | 换箱员ID |  | √ |  |
| loc_id | int8 |  | 站台ID |  | √ |  |
| container_id | int8 |  | 原容器ID |  | √ |  |
| container_code | varchar | 128 | 原容器编号 |  | √ |  |
| target_container_id | int8 |  | 目标容器ID |  | √ |  |
| target_container_code | varchar | 128 | 目标容器编号 |  | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

