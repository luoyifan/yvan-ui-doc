---
title: dev_print_terminal
desc: 打印终端
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] dev_print_terminal
> 打印终端

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| print_terminal_id | int8 |  | 打印终端ID | √ | √ |  |
| wh_id | int8 |  | 仓库ID |  |  |  |
| print_terminal_name | varchar | 255 | 打印终端名称 |  |  |  |
| print_terminal_comment | varchar | 255 | 打印终端描述 |  |  |  |
| server_addr | varchar | 255 | 服务地址 |  |  |  |
| server_port | varchar | 255 | 服务端口 |  |  |  |
| default_printer_name | varchar | 255 | 默认打印机名称 |  |  |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |
#wms/db/基础数据
