---
title: dev_params
desc: 二开配置表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] dev_params
> 二开配置表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| key | varchar | 255 | 配置项 | √ | √ |  |
| value | varchar | 255 | 配置内容 |  | √ |  |

