---
title: bas_customer
desc: 单位资料
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] bas_customer
> 单位资料

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| customer_id | int8 |  | 单位ID | √ | √ |  |
| customer_code | varchar | 255 | 单位编号 |  | √ |  |
| customer_name | varchar | 255 | 单位名称 |  | √ |  |
| logogram | varchar | 255 | 助记码 |  | √ |  |
| simplename | varchar | 255 | 单位简称 |  | √ |  |
| custom_type | varchar | 50 | 客户类型(1 供应商  2 客户) |  | √ | [[dict.BAS_CUSTOM_TYPE]] |
| address | varchar | 255 | 单位地址 |  | √ |  |
| contact | varchar | 255 | 联系人 |  | √ |  |
| telephone | varchar | 255 | 联系电话 |  | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.SYS_YES_NO]] |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
#wms/db/基础数据
