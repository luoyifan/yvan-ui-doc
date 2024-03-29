---
title: rule_view_fields
desc: 
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] rule_view_fields
> 

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| profile_id | int8 |  | 板块 | √ | √ |  |
| view_id | int8 |  | 界面元素Key | √ | √ |  |
| block | varchar | 64 | 板块 | √ | √ |  |
| ui_key | varchar | 64 | 界面元素Key | √ | √ |  |
| is_display | int4 |  | 是否显示 |  |  | [[dict.IS_ENABLE]] |
| ui_label | varchar | 64 | 界面label |  |  |  |
| is_not_null | int4 |  | 是否必填 |  |  | [[dict.IS_ENABLE]] |
| ui_validate | varchar | 2000 | 校验 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
