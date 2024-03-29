---
title: doc_wave
desc: 波次汇总表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] doc_wave
> 波次汇总表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| wave_id | int8 |  | 波次ID | √ | √ |  |
| wave_code | varchar | 128 | 波次编号 |  | √ |  |
| dates | varchar | 19 | 日期 |  | √ |  |
| out_status | varchar | 50 | 状态 |  | √ |  |
| priority | int4 |  | 优先级 |  | √ |  |
| wave_auto | varchar | 50 | 自动组建波次 |  | √ |  |
| alloc_auto | varchar | 50 | 自动分配 |  | √ |  |
| task_auto | varchar | 50 | 自动任务拆分 |  | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
#wms/db/基础数据
