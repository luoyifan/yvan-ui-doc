---
title: simulator_wcs_task_cancel
desc: wcs模拟器任务取消表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] simulator_wcs_task_cancel
> wcs模拟器任务取消表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| task_no | varchar | 128 | 指令号 | √ | √ |  |
| task_classify | varchar | 50 | 任务分类(按照接口文档msgCode区分) |  | √ |  |
| container_code | varchar | 128 | 容器号 |  | √ |  |
| task_status | varchar | 50 | 任务状态(0000:添加,0001:执行中,0002:完成,0003取消,0004错误) |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| is_uploade | varchar | 50 | 是否上传 |  | √ |  |

