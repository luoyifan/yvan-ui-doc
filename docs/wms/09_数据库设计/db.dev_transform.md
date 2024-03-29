---
title: dev_transform
desc: 数据转换资料
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] dev_transform
> 数据转换资料

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| name | varchar | 255 | 转换名 | √ | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| transform_option | varchar | 40960 | 转换设置 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

