---
title: rule_lot_repo
desc: 库存属性知识库
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_lot_repo
> 库存属性知识库

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| repo_id | int8 |  | ID | √ | √ |  |
| lot_field | varchar | 64 | 物理字段 |  | √ |  |
| lot_type | varchar | 64 | 物理类型 |  | √ |  |
| lot_name | varchar | 64 | 中文描述 |  |  |  |
| edit_model | varchar | 50 | 编辑模式 |  | √ |  |
| lot_value | varchar | 128 | 编辑参数 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 修改人 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |

