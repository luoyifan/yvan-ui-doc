---
title: doc_put
desc: 上架单汇总表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] doc_put
> 上架单汇总表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| put_id | int8 |  | 上架单ID | √ | √ |  |
| put_code | varchar | 255 | 上架单号 |  | √ |  |
| in_status | varchar | 50 | 入库状态 |  | √ |  |
| dates | varchar | 128 | 日期 |  | √ |  |
| order_type | varchar | 50 | 订单类型 |  | √ |  |
| order_biz_type | varchar | 50 | 业务订单类型 |  | √ |  |
| supplier_id | int8 |  | 供应商id |  | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| owner_id | int8 |  | 货主ID |  | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
#wms/db/基础数据
