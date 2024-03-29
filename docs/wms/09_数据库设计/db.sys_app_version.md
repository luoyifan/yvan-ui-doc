---
title: sys_app_version
desc: 应用程序版本
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] sys_app_version
> 应用程序版本

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| app_version_d | int8 |  | ID |  | √ |  |
| app_code | varchar | 255 | 应用程序标识 |  | √ |  |
| app_name | varchar | 255 | 应用程序名称 |  | √ |  |
| major | int4 |  | 大版本 |  | √ |  |
| minor | int4 |  | 小版本 |  | √ |  |
| patch | int4 |  | 补丁 |  | √ |  |
| file_path | varchar | 255 | 应用程序包路径 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
#wms/db/基础数据
