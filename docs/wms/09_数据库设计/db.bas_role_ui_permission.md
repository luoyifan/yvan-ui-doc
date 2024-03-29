---
title: bas_role_ui_permission
desc: UI权限控制表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_role_ui_permission
> UI权限控制表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| role_id | int8 |  | 角色ID | √ | √ |  |
| page_path | varchar | 255 | 功能路径 | √ | √ |  |
| container_code | varchar | 255 | 组件父容器编号 | √ | √ |  |
| el_code | varchar | 255 | 组件编号 | √ | √ |  |
| permission_state | varchar | 50 | 权限状态 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

