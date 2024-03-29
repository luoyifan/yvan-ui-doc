---
title: bas_device
desc: 设备基础资料表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_device
> 设备基础资料表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| device_id | int8 |  | 设备ID | √ | √ |  |
| device_code | varchar | 128 | 设备编号 |  |  |  |
| device_name | varchar | 128 | 设备名称 |  |  |  |
| device_type | varchar | 50 | 设备类型 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| is_enable | varchar | 50 | 是否启用 |  |  | [[dict.IS_ENABLE]] |
| wh_id | int8 |  | 仓库ID |  |  |  |
| logogram | varchar | 128 | 助记码 |  |  |  |
| is_use | varchar | 50 | 是否可用 |  |  | [[dict.YESNO]] |
| model | varchar | 128 | 品牌型号 |  |  |  |
| director | varchar | 128 | 责任人 |  |  |  |
| remark | varchar | 255 | 备注 |  |  |  |

