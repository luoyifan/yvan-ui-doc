---
title: bas_region
desc: 仓库区域资料
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] bas_region
> 仓库区域资料

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| region_id | int8 |  | 区域ID | √ | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| region_code | varchar | 255 | 区域编码 |  | √ |  |
| region_name | varchar | 255 | 区域名称 |  | √ |  |
| logogram | varchar | 255 | 助记码 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| remark | varchar | 255 | 备注 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
#wms/db/基础数据
