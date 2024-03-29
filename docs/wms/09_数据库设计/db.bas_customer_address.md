---
title: bas_customer_address
desc: 单位多地址资料
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_customer_address
> 单位多地址资料

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| customer_id | int8 |  | 单位ID | √ | √ |  |
| address_id | int8 |  | 地址ID | √ | √ |  |
| province | varchar | 64 | 省 |  |  |  |
| city | varchar | 64 | 市 |  |  |  |
| area | varchar | 64 | 区 |  |  |  |
| address | varchar | 256 | 详细地址 |  |  |  |
| zip | varchar | 64 | 邮编 |  |  |  |
| contact | varchar | 64 | 联系人 |  |  |  |
| telephone | varchar | 128 | 联系电话 |  |  |  |
| remark | varchar | 256 | 备注 |  |  |  |
| is_default_address | varchar | 50 | 是否默认地址 |  | √ | [[dict.IS_ENABLE]] |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |

