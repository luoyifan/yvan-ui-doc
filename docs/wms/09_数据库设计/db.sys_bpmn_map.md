---
title: sys_bpmn_map
desc: 工作流业务实例映射表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] sys_bpmn_map
> 工作流业务实例映射表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| biz_key | varchar | 255 | 业务主键 | √ | √ |  |
| bpmn_code | varchar | 255 | 工作流编码 |  | √ |  |
| process_instance_id | varchar | 255 | 流程实例Id |  | √ |  |
| version | int4 |  | 流程版本号 |  |  |  |
| version_tag | varchar | 255 | 流程版本标记 |  |  |  |
| process_define_id | varchar | 255 | 流程定义ID |  |  |  |
#wms/db/基础数据
