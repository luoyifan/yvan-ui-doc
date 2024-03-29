---
title: bas_report
desc: 查询报表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_report
> 查询报表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| report_id | numeric |  | 报表ID | √ | √ |  |
| resoucre_id | numeric |  | 资源ID |  |  |  |
| report_name | varchar | 255 | 报表名称 |  | √ |  |
| report_type | numeric |  | 报表类型 |  | √ | [[dict.BAS_REPORT]] |
| report_title | varchar | 255 | 报表标题 |  | √ |  |
| report_sql | text |  | 报表sql语句 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |

