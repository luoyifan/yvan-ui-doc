---
title: 编码显示转换特性
tags: convert
---

# 编码显示转换特性
专门用来解决大数据量的 code 转 text 关系；

显示 code  的组件，在界面被渲染时，回到后台去查询对应的 text 内容；

与枚举字典的区别是：不会预先把 code 和 text 全加载出来，而是在组件显示之后去定量提取 text

比如“甲方项目“有26万数据行，数据库中只记录甲方项目编码，
编码控件在显示时，到后台根据甲方项目编码 查找甲方项目名称，界面显示“甲方项目名称”

转换是借助数据窗口实现的
组件参数：
- **widget**: 编码显示转换, 记录引用的数据字典名称
- **widgetCodeField**: 编码字段, 数据字典的Code字段
- **widgetCodeFieldType**: 编码字段类型, string 或 int
- **widgetTextField**: 显示字段, 可以是单个字段，也可以是 select SQL片段

比如 
```JSON
{
    "widget": "AreaSearch",
    "widgetCodeField": "wh_area_code",
    "widgetCodeFieldType": "string",
    "widgetTextField": "wh_area_name || '-' || region_name"
}
```

在编写数据窗口的查询语句时，注意特殊语法
```sql
select
    TA.project_id,
    TA.project_code,
    TA.project_name,
    TA.is_enable,
    nvl(TB.login_name,TA.create_by) AS create_by,
    TA.create_at,
    TA.update_by,
    TA.update_at
    from bas_project TA
    left join sys_login_agent TB ON TB.login_id = to_number(TA.create_by)
where
    TA.is_enable = '0001'
    --# and TA.#
    ${@com.galaxis.wms.ext.Sql@phrase('AND', TA.project_code like', 'TA.project_name like')}
```

特殊语法
```
--# and a.#

找到 --# 开头的字符串，替换掉--#, 并且最终把 # 替换成目标字段in语法，变换成如下格式

and a.container_code in (1,2,3)
```

比如
```SQL
SELECT
    a.container_id,
    a.wh_id,
    a.container_code,
    a.container_type,
    a.is_occupied,
    ( SELECT wh_name FROM bas_wh WHERE wh_id = a.wh_id ) AS wh_name,
    a.create_by,
    a.create_at,
    a.update_by,
    a.update_at
FROM
    bas_container a
where
    1=1
    --@ a.wh_id = to_number(#{wh_id})
    <if test="!#obj.isEmpty(container_type)">
        AND a.container_type = to_number(#{container_type})
    </if>
    <if test="!#obj.isEmpty(container_state)">
        AND a.container_state = to_number(#{container_state})
    </if>
    ${@com.galaxis.wms.ext.Sql@phrase('and', 'a.container_code like', a.container_id like)}
    --# and a.#

-- 最终会转换成如下格式
select
    a.container_code as code,
    a.wh_area_code || ' ' || a.director as text
where
    1=1
    and a.container_code in (1,2,3)
```



## 输入框示例

## 表格字段示例


![[Pasted image 20240315153002.png]]

![[Pasted image 20240315153008.png]]

## 库存属性示例


![[Pasted image 20240315153107.png]]

![[Pasted image 20240315153114.png]]

## 扩展属性示例

![[Pasted image 20240315153022.png]]

![[Pasted image 20240315153047.png]]