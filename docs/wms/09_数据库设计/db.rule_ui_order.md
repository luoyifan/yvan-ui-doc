---
title: rule_ui_order
desc: 
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] rule_ui_order
> 

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| version_id | int8 |  | 版本ID | √ | √ |  |
| page_id | int8 |  | 页面ID | √ | √ |  |
| ui_block | varchar | 255 | 界面块 | √ | √ |  |
| key_order_string | varchar | 40960 | 界面元素排序 |  |  |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |
#wms/db/基础数据
