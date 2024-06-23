---
title: 动态匹配条件
tags: condition search
---

# 介绍
动态匹配是指，通过界面描述生成一系列的 JSON 结构，能够用于程序计算，true / false 结果，比如

![[Pasted image 20240315153219.png]]

生成的JSON代码如下:
```JSON
[
    {
    	"link": "and",
    	"field": "WH.wh_id",
    	"oper": "=",
    	"value": "11"
    }, 
    {
    	"link": "and",
    	"field": "OWNER.owner_id",
    	"oper": "=",
    	"value": "12"
    }, 
    {
    	"link": "and",
    	"exprs": [
        	{
        		"link": "and",
        		"field": "ASN.order_type",
        		"oper": "=",
        		"value": "0100"
        	}, 
        	{
        		"link": "or",
        		"field": "ASN.order_type",
        		"oper": "=",
        		"value": "0300"
        	}
    	]
    }
]
```

解析后执行的逻辑是:
```groovy
WH.wh_id == '11' && OWNER.owner_id == '12' && ( ASN.order_type=='0100' || ASN.order_type == '0300' )
```

# 实体定义
示例中，字段（field）的定义都是实际存在的静态类.
比如 WH / OWNER / ASN 都存在于 com.galaxis.wms.rule.domain 命名空间中
![image.png](https://note.youdao.com/yws/res/34866/WEBRESOURCEc3fa3c2641c2c17a6d497db9c5362fba)

# 方法调用定义
static boolean computCondition(
    - List<Map<String, Object>> 描述
)

# 用途
### 系统参数
动态系统参数是 WMS8.5 一项重要的系统功能，其表格设计为

#### sys_param 系统参数表
- param_code 参数编号[主键]
- param_name 系统参数名称
- param_value 默认值
- param_fact_model 参数计算模型
- param_desc 系统参数描述

#### sys_param_items 系统参数详情表 
- param_item_id 参数详情ID[主键]
- param_item_seq 判断序号
- param_code 参数编号 (外键关联到 sys_param.param_code)
- param_item_name 参数详情名
- param_condition 参数条件JSON
- param_value 参数值

#### 调用系统参数
Object value = SysParam.getValue('LEVEL_SPLIT_BOX')

系统判断流程
- 检查 sys_param_items 表
```SQL
select param_condition, param_value from sys_param_items where param_code = 'LEVEL_SPLIT_BOX' order by param_item_seq
```
按顺序一条一条检查 param_condition 判断条件，当条件达成时，返回这一行的 param_value

- 检查 sys_param 表
```SQL
select param_value,param_fact_model from sys_param where param_code = 'LEVEL_SPLIT_BOX'
```

当所有的判断条件 (sys_param_items.param_condition) 都没有达成时，返回主表的值 (sys_param.param_value)

调用 param_condition 条件时，应注意将 sys_param.param_fact_model 参数带入

### Rule规则解析
动态匹配条件还被用于规则判断，比如
![image.png](https://note.youdao.com/yws/res/34932/WEBRESOURCEaacab858868c094e5112b36d78ffbd3c)

```groovy
factImport = [
        'ITEM',
        'WH',
        'OWNER',
        'RECEIPT',
        'RECEIPT_ITEM',
]
    
rule '异形品', {
    ruleType = 'conditionFlow'
    whenProp = [
            [link: 'and', field: "ITEM.item_physi_spec", oper: '=', value: "0002"],
    ]
    throwError = [
            message: "不支持中药异形品入库"
    ]
    thenProp = [
            name    : 'CTU库',
            whereSql: "loc_use = '0005'",
            orderSql: "",
            steps   : [
                    [type: "SAME_ITEM_LOT", option: ["WEIGHT", "VOLUME", "LENGTH_WIDTH_HEIGHT", "QTY"]],
                    [type: "SAME_ITEM", option: ["WEIGHT", "VOLUME", "LENGTH_WIDTH_HEIGHT", "QTY"]],
                    [type: "FREE", option: ["WEIGHT", "VOLUME", "LENGTH_WIDTH_HEIGHT", "QTY"]],
                    [type: "MIXED", option: ["WEIGHT", "VOLUME", "LENGTH_WIDTH_HEIGHT", "QTY", "MIXED_QUALITY"]],
            ]
    ]
}
```

这里描述的 whenProp 也适用于低代码动态匹配条件功能.
调用条件计算时，要注意将 factImport 带入参数