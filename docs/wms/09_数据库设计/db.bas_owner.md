---
title: bas_owner
desc: 货主
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] bas_owner
> 货主

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| owner_id | int8 |  | 货主ID | √ | √ |  |
| owner_code | varchar | 255 | 货主编码 |  | √ |  |
| owner_name | varchar | 255 | 货主名称 |  | √ |  |
| logogram | varchar | 255 | 助记码 |  | √ |  |
| contact | varchar | 255 | 联系人 |  |  |  |
| telephone | varchar | 255 | 联系电话 |  |  |  |
| province | varchar | 255 | 省份 |  |  |  |
| city | varchar | 255 | 城市 |  |  |  |
| zip | varchar | 255 | 邮编 |  |  |  |
| address | varchar | 255 | 地址 |  |  |  |
| remark | varchar | 255 | 备注 |  |  |  |
| is_default_owner | varchar | 50 | 是否默认货主 |  |  | [[dict.IS_ENABLE]] |
| is_enable | varchar | 50 | 是否启用 |  |  | [[dict.IS_ENABLE]] |
| create_by | varchar | 50 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 50 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
