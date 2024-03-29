---
title: rule_ui_page
desc: 功能模块
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_ui_page
> 功能模块

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| page_id | int8 |  | 主键 | √ | √ |  |
| page_path | varchar | 255 | 页面路径 |  |  |  |
| page_name | varchar | 255 | 功能名称 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

