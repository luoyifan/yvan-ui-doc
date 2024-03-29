---
title: dev_print_template_paper
desc: 打印模板纸张
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] dev_print_template_paper
> 打印模板纸张

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| template_paper_id | int8 |  | 纸张ID | √ | √ |  |
| template_paper_name | varchar | 255 | 纸张名称 |  |  |  |
| paper_type | int4 |  | 纸张类型: 1:通用模板纸张, 2: 自定义模板纸张 |  |  |  |
| wh_id | int8 |  | 仓库ID |  |  |  |
| paper_width | numeric |  | 纸张宽度(mm) |  |  |  |
| paper_height | numeric |  | 纸张高度(mm) |  |  |  |
| is_enable | varchar | 50 | 是否启用 |  |  | [[dict.IS_ENABLE]] |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |
#wms/db/基础数据
