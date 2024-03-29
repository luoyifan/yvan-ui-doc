---
title: dev_transform_log
desc: 数据转换日志
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] dev_transform_log
> 数据转换日志

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| log_id | int8 |  | 序号 | √ | √ |  |
| transform_name | varchar | 255 | 转换名 |  | √ |  |
| insert_count | int4 |  | 插入数量 |  | √ |  |
| update_count | int4 |  | 更新数量 |  | √ |  |
| file_name | varchar | 255 | 文件名 |  | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  |  | [[dict.&nbsp;]] |
| create_by | varchar | 64 | 创建人 |  |  | [[dict.&nbsp;]] |
| update_at | timestamptz |  | 更新时间 |  |  | [[dict.&nbsp;]] |
| update_by | varchar | 64 | 更新人 |  |  | [[dict.&nbsp;]] |
#wms/db/基础数据
