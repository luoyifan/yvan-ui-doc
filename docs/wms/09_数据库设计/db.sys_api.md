---
title: sys_api
desc: api接口
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] sys_api
> api接口

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| uuid | varchar | 255 | 主键id | √ | √ |  |
| name | varchar | 255 | api名称 |  | √ |  |
| title | varchar | 255 | 中文名 |  | √ |  |
| type | varchar | 50 | 接口类型 |  | √ | [[dict.CONNECTOR_TYPE]] |
| url | varchar | 255 | 接口路径 |  | √ |  |
| method_path | varchar | 255 | 接口调用的方法 |  | √ |  |
| system | varchar | 255 | 隶属系统 |  | √ |  |
| enable | varchar | 50 | 是否启用(1:启用，0:禁用) |  | √ | [[dict.IS_ENABLE]] |
| declare_content | varchar | 409600 | 文件声明内容 |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |

