---
title: task_http_job
desc: Http任务
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] task_http_job
> Http任务

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 主键id | √ | √ |  |
| namespace | varchar | 63 | 命名空间 |  | √ |  |
| job_id | int8 |  | 任务ID |  | √ |  |
| request_method | varchar | 15 | http请求method，ALL GET HEAD POST PUT DELETE CONNECT OPTIONS TRACE PATCH |  | √ |  |
| request_url | varchar | 511 | Http请求地址 |  | √ |  |
| request_data | text |  | Http请求数据json格式，包含：params、headers、body |  |  |  |
| create_at | timestamp |  | 创建时间 |  | √ |  |
| update_at | timestamp |  | 更新时间 |  |  |  |

