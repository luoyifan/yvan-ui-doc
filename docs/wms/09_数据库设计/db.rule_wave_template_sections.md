---
title: rule_wave_template_sections
desc: 出库模式段落定义
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] rule_wave_template_sections
> 出库模式段落定义

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| wave_template_section_id | int8 |  | 模板段落ID | √ | √ |  |
| wave_template_id | int8 |  | 波次模板ID |  | √ |  |
| section_name | varchar | 255 | 名称 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| rule_order | int4 |  | 排序 |  | √ |  |
| rule_param | varchar | 40960 | 运行参数 |  | √ |  |
| rule_condition | varchar | 40960 | 适用范围 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
