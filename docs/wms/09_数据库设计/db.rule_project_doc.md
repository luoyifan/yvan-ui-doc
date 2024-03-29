---
title: rule_project_doc
desc: 
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_project_doc
> 

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| rule_doc_id | int8 |  | 单据规则ID | √ | √ |  |
| rule_doc_name | varchar | 64 | 单据规则名称 |  | √ |  |
| doc_path | varchar | 255 | 单据路径 |  |  |  |
| doc_json | varchar | 40960 | 单据规则 |  |  |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |
| project_id | int8 |  | 项目ID |  | √ |  |

