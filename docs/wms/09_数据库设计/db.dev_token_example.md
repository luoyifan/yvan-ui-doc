---
title: dev_token_example
desc: 压力测试用的授权示例
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] dev_token_example
> 压力测试用的授权示例

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| wh_id | numeric |  | 仓库ID |  |  |  |
| user_name | varchar | 255 | 用户名 | √ | √ |  |
| token | varchar | 4000 | 授权 |  |  |  |
| test_use_type | numeric |  | 测试用途 |  |  |  |
#wms/db/基础数据
