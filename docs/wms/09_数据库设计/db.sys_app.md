---
title: sys_app
desc: 系统应用集
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] sys_app
> 系统应用集

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| app_key | varchar | 255 | 应用ID | √ | √ |  |
| app_name | varchar | 255 | 应用名称 |  | √ |  |
| app_color | varchar | 255 | 应用颜色 |  | √ |  |
| app_layout | varchar | 50 | 布局类型 |  | √ |  |
| app_icon | varchar | 255 | 应用图标 |  | √ |  |
| is_external | varchar | 50 | 是否外部系统 |  |  | [[dict.IS_ENABLE]] |
| app_sort | int4 |  | 应用排序 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| is_show | varchar | 50 | 是否展示 |  | √ | [[dict.IS_ENABLE]] |
| external_url | varchar | 255 | 外部系统URL |  |  |  |
| open_target | varchar | 20 | 打开目标 |  |  |  |
#wms/db/基础数据
