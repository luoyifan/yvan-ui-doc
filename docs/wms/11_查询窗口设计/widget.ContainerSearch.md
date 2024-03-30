---
title: 容器检索
desc: 容器检索
name: ContainerSearch
columnCount: 8
sqlId: selectContainer
type: widget
navIgnore: false
tags:
  - wms/widget/ContainerSearch
---

## 库区检索
>[!widget] ContainerSearch  
> 容器检索  
> 
> sqlId: selectContainer
  
### SQL
```sql
SELECT
        ( SELECT wh_name FROM bas_wh WHERE wh_id = a.wh_id ) AS wh_name,
        a.*
        FROM
        bas_container a
        where
        1=1
        --@ and a.wh_id = #{wh_id, javaType=long}
        --@ and a.container_type = #{container_type, javaType=int}
        --@ and a.container_state = #{container_state, javaType=int}
        ${@com.galaxis.wms.ext.Sql@phrase('and', 'a.container_code like', a.container_id like)}
        --# and a.#
```

### 字段
总共 `8` 个

| 字段  | 描述  |
| --- | --- |
| wh_id | 仓库ID |
| wh_name | 仓库名称 |
| container_id | 容器ID |
| container_code | 容器编号 |
| container_type | 容器类型编号 |
| container_state | 是否占用 |
| create_by | 创建人 |
| create_at | 创建时间 |

