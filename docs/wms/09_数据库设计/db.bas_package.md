---
title: bas_package
desc: 产品包装基础属性
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] bas_package
> 产品包装基础属性

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| pack_id | int8 |  | 包装ID | √ | √ |  |
| pack_code | varchar | 128 | 包装编号 |  | √ |  |
| pack_name | varchar | 255 | 包装名称 |  | √ |  |
| item_id | int8 |  | 产品ID |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.SYS_IS_ENABLE]] |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
#wms/db/基础数据
