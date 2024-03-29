---
title: sys_module
desc: 
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] sys_module
> 

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| module_id | varchar | 255 | 无代码模块ID | √ | √ |  |
| module_content | varchar | 409600 | 模块内容 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

