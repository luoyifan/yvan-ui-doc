---
title: sys_oper_log_category
desc: 操作日志分类提取表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] sys_oper_log_category
> 操作日志分类提取表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| log_category_id | int8 |  | 主键 | √ | √ |  |
| action | varchar | 64 | 操作行为 |  |  |  |
| url | varchar | 255 | 正则抓取ANT表达式 |  |  |  |
| attext1 | varchar | 255 | 需要抓取的报文 body 属性名1 |  |  |  |
| attext2 | varchar | 255 | 需要抓取的报文 body 属性名2 |  |  |  |
| attext3 | varchar | 255 | 需要抓取的报文 body 属性名3 |  |  |  |
| success | int4 |  | 1=success是true情况下命中 / 0=success是false情况下命中 |  |  |  |
| remark_disp | varchar | 255 | 形成操作备注字段的toString字符串描述 |  |  |  |
| sort | int4 |  | 排序 |  |  |  |
#wms/db/基础数据
