---
title: 流程设计
date: 2024-03-27 23:46
author: yvan
---

```json
{ 
	"args": [ 
		{
			"type": "flow"
		} 
	] 
}
```

# 表格
```dataview
table title as "表名", desc as "描述"
from "wms/08_流程设计"
where contains(file.name, "flow.")
```

# 列表
| 流程  | 名称   | 版本 | 部署时间 |
| ----- | ------ | ---- | ------ |
| [AutoReceipt](./flow.AutoReceipt) | 顺德大参林自动收货 |  | 2024-01-31 10:19:23.214  |
| [ManualReceipt](./flow.ManualReceipt) | 顺德大参林人工收货 |  | 2024-02-01 17:30:39.729  |
| [TestReceipt](./flow.TestReceipt) | 测试收货 |  | 2024-02-01 17:49:01.449738  |
| [PalletStorage](./flow.PalletStorage) | 托盘立库 |  |   |
| [jx_ltk_rk](./flow.jx_ltk_rk) | 嘉兴-立体库-入库 | 49 | 2024-03-25 17:48:27.802  |
| [jx_ltk_ck](./flow.jx_ltk_ck) | 嘉兴-立体库-出库 |  | 2024-03-19 11:29:19.779  |
| [jx_ltk_cgrk](./flow.jx_ltk_cgrk) | 嘉兴-立体库-采购入库 |  | 2024-03-05 14:22:03.856646  |
| [jx_dc_cgrk](./flow.jx_dc_cgrk) | 嘉兴-多穿-采购入库 |  | 2024-03-05 14:42:36.885068  |
| [jx_mjk_cgrk](./flow.jx_mjk_cgrk) | 嘉兴-密集库-采购入库 |  | 2024-03-05 15:05:39.398871  |
| [test2](./flow.test2) | test2 | 1 | 2024-03-20 22:43:28.91  |
| [test1](./flow.test1) | 测试1 |  | 2024-03-05 15:23:10.749  |