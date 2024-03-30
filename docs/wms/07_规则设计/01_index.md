---
title: 规则设计
date: 2024-03-29 22:02
author: yvan
---

# 07.规则设计
>[!rule] 规则设计

```ignore
{ 
	"args": [ 
		{
			"type": "rule"
		} 
	] 
}
```

```dataview
table desc as "描述", name as "名称", version as "版本"
from "wms/07_规则设计"
where contains(file.name, "rule.")
```

| 名称                                               | 描述     | 版本 |
|--------------------------------------------------| -------- | ---- |
| [TaskSplit](/wms/07_规则设计/rule.TaskSplit.md)      | 任务拆分 | 2 |
| [AllocateMerge](rule.AllocateMerge.md)           | 分配合并 | 1 |
| [LocDispatch](rule.LocDispatch.md)               | 库位分配 | 4 |
| [InvAllocate](./rule.InvAllocate.md)             | 库存分配 | 1 |
| [InvReservation](./rule.InvReservation.md)       | 库存预占 | 2 |
| [LotAllocate](./rule.LotAllocate.md)             | 批次分配 | 1 |
| [WaveTemplate](./rule.WaveTemplate.md)           | 波次模板 | 4 |
| [Test](./rule.Test.md)                           | 测试 | 21 |
| [Rep](./rule.Rep.md)                             | 补货 | 1 |
| [OrderWaveTemplate](./rule.OrderWaveTemplate.md) | 订单波次模板 | 4 |