---
title: dev_print_template
desc: 打印模板
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] dev_print_template
> 打印模板

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| print_template_id | int8 |  | 打印模板ID | √ | √ |  |
| wh_id | int8 |  | 仓库ID |  |  |  |
| project_id | int8 |  | 项目ID |  |  |  |
| template_paper_id | int8 |  | 纸张ID |  |  |  |
| print_template_code | varchar | 255 | 打印模板编码 |  |  |  |
| print_template_name | varchar | 255 | 打印模板名称 |  |  |  |
| template_type | varchar | 50 | 模板类型: 报表模板/标签标签 |  |  |  |
| template_file_path | varchar | 255 | 模板文件路径 |  |  |  |
| template_content | varchar | 40960 | 模板内容 |  |  |  |
| template_width | numeric |  | 模板宽度(mm) |  |  |  |
| template_height | numeric |  | 模板高度(mm) |  |  |  |
| page_id | int8 |  | 单据ID |  |  |  |
| page_code | varchar | 255 | 单据编码 |  |  |  |
| page_name | varchar | 255 | 单据名称 |  |  |  |
| is_default | varchar | 50 | 是否默认 |  |  |  |
| is_enable | varchar | 50 | 是否启用 |  |  | [[dict.IS_ENABLE]] |
| remark | varchar | 40960 | 备注 |  |  |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |
| template_rule_expr | varchar | 40960 | 模板表达式 |  |  |  |
#wms/db/基础数据
