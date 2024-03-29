---
title: device_cmd
desc: 设备指令表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] device_cmd
> 设备指令表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| device_cmd_id | int8 |  | 设备指令id | √ | √ |  |
| task_no | varchar | 255 | 任务号 |  | √ |  |
| device_cmd_type | varchar | 50 | 设备指令类型 |  | √ |  |
| device_cmd_status | varchar | 50 | 指令状态 |  | √ |  |
| priority | int4 |  | 优先级 |  | √ |  |
| is_active | varchar | 50 | 是否激活 |  | √ | [[dict.SYS_YES_NO]] |
| container_code | varchar | 128 | 容器编号 |  | √ |  |
| start_loc_id | int8 |  | 起始点位 |  | √ |  |
| start_loc_code | varchar | 128 | 起始库位编号 |  | √ |  |
| end_loc_id | int8 |  | 终止点位 |  | √ |  |
| end_loc_code | varchar | 128 | 终止库位编号 |  | √ |  |
| error_msg | varchar | 255 | 错误原因 |  | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| parent_device_cmd_id | int8 |  | 上级设备指令ID |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| try_count | int4 |  | 发送次数 |  | √ |  |
| try_total_count | int4 |  | 总共可发送次数 |  | √ |  |
| try_next_time | timestamptz |  | 下次重试时间 |  | √ |  |
| last_req_content | varchar | 40960 | 最后一次请求报文 |  |  |  |
| last_resp_content | varchar | 40960 | 最后一次响应报文 |  |  |  |
| cmd_device_no | varchar | 255 | 生成指令的设备标识 |  | √ |  |
| cmd_target | varchar | 255 | 发送指令目标 |  | √ |  |
| start_road_code | varchar | 255 | 起始巷道 |  | √ |  |
| end_road_code | varchar | 255 | 目的巷道 |  | √ |  |
| container_type | varchar | 50 | 容器类型 |  | √ |  |
| container_num | int4 |  | 容器数量(空容器时大于0) |  | √ |  |
| led_msg | varchar | 255 | LED屏显示信息 |  | √ |  |
#wms/db/基础数据
