---
title: 字典目录
date: 2024-03-27 23:36
author: yvan
---




# title

^32b8fe

>[!tip] 字典设计
>字典设计

```json
{ 
	"args": [ 
		{
			"type": "dict",
			"dicts": "*" 
		} 
	] 
}
```

# 表格
```dataview
table desc as "描述", btype as "类型", itemsCount as "数量"
from "wms/字典设计"
where contains(file.name, "dict.")
```
