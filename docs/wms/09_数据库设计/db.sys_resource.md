---
title: sys_resource
desc: 系统菜单表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] sys_resource
> 系统菜单表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| sys_app | varchar | 255 | 所属应用 | √ | √ |  |
| resource_id | varchar | 255 | 资源ID | √ | √ |  |
| resource_name | varchar | 255 | 资源名称 |  | √ |  |
| resource_icon | varchar | 255 | 图标 |  | √ |  |
| resource_parent_id | varchar | 255 | 父资源ID |  | √ |  |
| resource_type | varchar | 50 | 资源类型 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| is_show | varchar | 50 | 是否展示到菜单 |  | √ | [[dict.IS_ENABLE]] |
| resource_sort | int4 |  | 资源序号 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| open_target | varchar | 255 | 打开目标 |  |  |  |
| resource_url | varchar | 255 | 资源页面目标 |  |  |  |
| remark | varchar | 255 | 备注 |  |  |  |

