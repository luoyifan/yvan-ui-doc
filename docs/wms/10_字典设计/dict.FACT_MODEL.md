---
title: FACT_MODEL
desc: 规则实体
type: dict
tags:
  - wms
  - dict
  - dynamic
  - sql_dynamic
---
#wms/dict/dynamic

# title
>[!dict] FACT_MODEL
> 规则实体

# 查询语句
```sql
select t.fact_code as dict_value,t.fact_name as dict_text from sys_rule_fact t
```
