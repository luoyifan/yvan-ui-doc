---
title: simulator_wcs_task
desc: wcs模拟器任务表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] simulator_wcs_task
> wcs模拟器任务表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| task_no | varchar | 128 | 指令号 | √ | √ |  |
| task_classify | varchar | 50 | 任务分类(按照接口文档msgCode区分) |  | √ |  |
| task_type | int4 |  | 任务类型 |  | √ |  |
| from_location | varchar | 128 | 源货位 |  | √ |  |
| to_location | varchar | 128 | 目的货位 |  | √ |  |
| priority | int4 |  | 优先级 |  | √ |  |
| container_code | varchar | 128 | 容器号 |  | √ |  |
| container_type | int4 |  | 容器类型 |  | √ |  |
| container_small_type | int4 |  | 容器小类 |  | √ |  |
| from_road_code | varchar | 128 | 源巷道 |  | √ |  |
| to_road_code | varchar | 128 | 目的巷道 |  | √ |  |
| led_msg | varchar | 255 | LED屏显示信息 |  | √ |  |
| wave_no | varchar | 128 | 波次号 |  | √ |  |
| so_code | varchar | 128 | 订单号 |  | √ |  |
| task_status | varchar | 50 | 任务状态(0000:添加,0001:执行中,0002:完成,0003取消,0004错误) |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| is_uploade | varchar | 50 | 是否上传 |  | √ |  |
#wms/db/基础数据
