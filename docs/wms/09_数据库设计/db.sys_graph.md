---
title: sys_graph
desc: 系统工作流表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] sys_graph
> 系统工作流表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| graph_code | varchar | 255 | 流程图编码 | √ | √ |  |
| graph_name | varchar | 255 | 流程图名称 |  | √ |  |
| graph_content | varchar | 4096000 | 工作流内容 |  | √ |  |
| deploy_time | timestamptz |  | 最后发布时间 |  |  |  |
| deploy_content | varchar | 4096000 | 最后发布时的内容 |  |  |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

