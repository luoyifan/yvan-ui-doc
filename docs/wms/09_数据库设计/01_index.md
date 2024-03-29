---
title: 数据库目录
date: 2024-03-27 23:46
author: yvan
---

# title
>[!tip] 数据库设计
>数据库设计

```json
{ 
	"args": [ 
		{
			"type": "db",
			"datasource": "master", 
			"schema_name": "public", 
			"tables": "*"
		} 
	] 
}
```

# 表格
```dataview
table title as "表名", desc as "描述"
from "wms/数据库设计"
where contains(file.name, "db.")
```

