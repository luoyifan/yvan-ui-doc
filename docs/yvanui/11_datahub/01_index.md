---
title: 数据集成平台
---

# 数据集成平台

数据集成平台是由凯乐士开发的一款专为优化和增强WMS（仓库管理系统）与上下游外部系统间数据互通而设计的工具平台。该平台致力于将来自不同业务系统的异构数据高效且安全地接入WMS系统，以提高整体运营效率。

此方案利用先进的接口技术和中间件服务，确保在面对复杂多变的数据源时，仍能保持高度的灵活性与兼容性。具体而言，其核心组件包括：

- **API网关**：作为WMS系统的单一入口点，API网关负责对接收到的所有请求进行身份验证、授权及路由，确保数据传输的安全性和效率。

- **消息队列**：支持异步通信机制，确保即使在网络条件不佳的情况下，数据也能可靠地在各个系统间传递。

- **ETL工具**：即提取（Extract）、转换（Transform）、加载（Load）。通过对原始数据进行清洗、格式化及标准化处理，确保其符合WMS系统的数据模型要求。

- **数据映射与转换规则**：定义了如何将外部系统的数据结构映射到WMS内部的数据模型上，确保数据的一致性和准确性。

- **监控与日志记录**：持续监控数据流状态，并记录所有相关的活动，便于问题排查和性能分析。


通过实施这一集成方案，凯乐士不仅显著提升了WMS系统的可扩展性和响应速度，还为企业的仓储管理带来了更加智能、高效的解决方案

# 主界面

![[Pasted image 20240831145339.png]]
#### 顶部工具栏
- **添加数据源**：允许用户创建新的数据源，支持JDBC和REST类型的数据源。
- **添加方案**：创建新的数据集成方案。
- **编辑**：提供基本的编辑功能，如剪切、复制、粘贴等。
- **删除**：移除选定的数据源或集成方案。
- **复制**：复制当前选中的数据源或方案。
- **粘贴**：将复制的数据源或方案粘贴到当前位置。
- **查看源码**：显示当前方案的配置代码，方便高级用户直接编辑。
- **回放数据**：模拟数据流，测试数据集成方案的效果。
- **测试运行**：执行当前配置的方案，以检查其是否按预期工作。

#### 左侧树
- **数据源列表**：列出所有已配置的数据源，每个数据源包含名称和类型等信息。数据源存储在`datahub_datasource`表中，支持JDBC和REST两种类型的数据源。
- **集成方案树**：以树状结构展示所有集成方案，每个方案节点包含方案ID、名称、路径和排序信息。双击方案树节点会弹出对话框，允许用户编辑方案的属性。
- **双击数据源节点**：在右侧区域展开数据源的详细信息，供用户编辑。

#### 中间多标签的方案编辑区
- **方案详情**：左侧显示方案的步骤列表，每一步骤代表数据处理的一个阶段。
- **编辑区域**：位于方案详情的中间部分，提供详细的步骤节点编辑功能，允许用户配置每个步骤的具体参数和逻辑

## 数据源新建和编辑

![[Pasted image 20240831150648.png]]
用于新建数据源的窗口，提供了用户输入和配置新数据源所需的各种字段。下面是每个元素的解释：

1. **ID**: 输入数据源的唯一标识符，通常由系统自动生成，但也可以手动指定。
2. **名称**: 用户友好的数据源名称，用于识别和区分不同的数据源。
3. **类型**: 选择数据源的类型，可以选择"数据库(JDBC)"或"接口(Rest)"。根据选择的不同，后续的URL和其他字段可能会有所不同。
4. **URL**: 根据数据源类型填写相应的URL。如果是JDBC数据源，则填写数据库连接地址；如果是REST接口，则填写接口的URL。
5. **jdbc**: 如果选择了JDBC数据源，此处可能需要填写额外的JDBC相关参数，比如驱动类名等。
6. **用户名**: 提供访问数据源所需的用户名。
7. **密码**: 提供访问数据源所需的密码。
8. **附加参数**: 这个部分允许用户添加额外的参数来配置数据源。例如，对于JDBC数据源，这可能是连接池设置或其他特定于数据库的选项。每个参数都由键值对组成，用户可以通过点击"+"按钮添加更多的参数行。

## 步骤 step

![[Pasted image 20240831151727.png]]
这个步骤列表展示了名为"查询ERP表数据"的集成方案，它包含了多个步骤，用于将ERP系统中的商品数据提取出来并插入到目标系统中的三个表中：商品、包装和包装级别。下面是对每个步骤的详细描述：
- **设置变量-初始化**：在这个步骤中，首先会对一些变量进行初始化，这些变量将在后续的步骤中用作临时存储数据或控制流程的关键因素。
- **查询ERP表数据**：这是整个集成方案的第一步，它从ERP系统中查询商品数据。这通常是通过调用ERP系统的API或直接连接到数据库来完成的。
    - **更新表-商品**：一旦从ERP系统中获得了商品数据，下一步就是将其更新到目标系统的商品表中。这可能涉及到数据清洗、转换和格式化，以适应目标系统的数据模型。
    - **更新表-包装**：接着，将商品数据关联的包装信息也同步到目标系统的包装表中。这同样可能涉及数据清洗和转换。
    - **数据复制--一分四**：这个步骤表明数据会被复制并分成4行，因为在凯乐士WMS商品包装中，每个类型的包装会有：主单位、中包装、箱包装、托盘包装，4行数据
        - **设置变量-初始化**：在数据复制之后，再次对变量进行初始化，准备接下来的步骤。
        - **条件判断**：在此步骤中，会根据某个条件来决定是否继续执行下一个步骤。这可能涉及到检查数据的有效性、完整性或者其他业务逻辑。
        - **更新表-包装级别**：如果条件判断成功，那么就会将包装级别的数据插入到目标系统的包装级别表中。这可能需要先对数据进行预处理，以确保其符合目标系统的规范。
2. **调用API--发邮件通知**：最后，当所有的数据处理完成后，会触发一个API调用来发送电子邮件通知，告知相关人员数据已经成功导入。

这个集成方案共包含5个主要类型的节点：
- **设置变量(setVariable)**：用于初始化变量，这些变量可以在后续的步骤中引用和使用。这有助于在数据处理过程中跟踪状态或存储临时结果。
- **执行SQL查询(jdbcSqlGet)**：这个节点用于从ERP系统中查询商品数据。查询成功后，会依次执行它的子步骤。这意味着查询的结果将作为输入传递给下一级的步骤进行处理。
- **更新表(updateTable)**：这些节点负责将数据写入凯乐士WMS系统的商品(bas_item)、包装(bas_package)、商品级别(bas_package_items)表。这一步骤确保了数据从ERP系统顺利迁移到WMS系统，使两个系统之间的数据保持一致。
- **逻辑判断(ifCondition)**：这个节点用于根据特定条件执行不同的分支。如果条件成立，就执行对应的子步骤。这有助于根据实际情况调整数据处理流程，增加灵活性。
- **调用内部方法(invokeMethod)**：这个节点用于调用内部的方法，例如发送电子邮件通知。在这种情况下，它被用来发送邮件通知，告知相关人员数据迁移已完成。

这个集成方案的目的是确保从ERP系统中提取的商品数据能够准确无误地同步到凯乐士WMS系统中。通过设置变量、执行查询、更新表和逻辑判断，实现了数据的高效迁移

# 节点类型
## 设置变量 setVariable
声明
```typescript
{
	type: 'setVariable',  
	/**  
	 * 设置变量,并合并到上下文  
	 */  
	set: FieldRule[]  
	  
	/**  
	 * 是否展复制行变量  
	 */  
	withDupRow?: boolean,  
	/**  
	 * 展平变量的数据代码  
	 */  
	dupRowCode?: '',
	
	/**  
	 * 分解数据行之后循环的步骤  
	 */  
	steps?: Step[],
	
	/**  
	 * 步骤唯一编码  
	 */  
	id?: string,  
	
	/**  
	 * 步骤中文标题  
	 */  
	title: string,  
	
	/**  
	 * 步骤是否禁用  
	 */  
	disabled?: boolean,  
	
	/**  
	 * 步骤发生异常时中断  
	 */  
	interruptOnException?: boolean,  
	
	/**  
	 * 断言，当条件达成时中断程序，输出异常  
	 */  
	assets?: {  
	    /**  
	     * 断言名称  
	     */  
	    name: string,  
	    /**  
	     * 断言条件  
	     */  
	    condition: YvanCondition,  
	    /**  
	     * 断言异常信息  
	     */  
	    exceptionMessage: '',  
	}[],  
	
	/**  
	 * 是否记录性能  
	 */  
	recordPerformance?: true,  
	
	/**  
	 * 日志格式, 可能用到 ${} 表达式  
	 */  
	loggerFormat?: '',
}
```
示例
```javascript
{  
    type: "setVariable",  
    set: [  
        {field: 'queryDate', value: '2024-08-01', javaType: 'string'},  
    ]  
}
```

## 执行SQL查询 jdbcSqlGet
声明
```typescript
{
	type: 'jdbcSqlGet'  
	
	/**  
	 * 查询 SQL  
	 */
	 selectSql: string,  
	 
	/**  
	 * 是否批量游标读取,如果是0 就不要用游标读取  
	 */  
	cursorBatchSize?: number,
	
	/**  
	 * 数据源ID  
	 */
	 dataSourceId: string,  
	 
	/**  
	 * 是否用将进上下文变量合并到输入参数  
	 */  
	withContextVariable?: boolean,  
	
	/**  
	 * 输入参数  
	 */  
	params?: FieldRule[],

	/**  
	 * 结果集的数据结构  
	 */  
	resultSchema?: YvanModel,  
	  
	/**  
	 * 结果集的变量名  
	 */  
	resultVariable?: string,  
	  
	/**  
	 * 分解数据行之后循环的步骤  
	 */  
	steps?: Step[],  
	  
	/**  
	 * 输出测试数据  
	 */  
	resultTestData?: object,
}
```
示例
```javascript
{  
    type: "jdbcSqlGet",  
    dataSourceId: 'HUBKLS',  
    selectSql: `SELECT * from xxx`, 
    withContextVariable: true,  
    cursorBatchSize: 2000,        // 是否批量游标读取,如果是0 就不要用游标读取  
    resultVariable: 'DSL_ITEM',   // 取一个变量名  
    steps: [  
        // 查询出来的记录，进入下面步骤进行循环处理
        {...}
    ]
}
```


## 更新表 updateTable
声明
```typescript
{
	type: 'updateTable',  
	/**  
	 * 表名  
	 */  
	tableName: string  
	  
	/**  
	 * 更新方式, 可以是只插入,  更新+替换(需要写 whereParams 条件)  
	 */updateMode: 'insert' | 'update' | 'replace'  
	  
	/**  
	 * 是否在未更新到数据时报错  
	 */  
	errorIfNoEffect: boolean  
	  
	/**  
	 * 判断记录是否存在的条件 replace 时有效  
	 */  
	whereParams: FieldRule[]

	/**  
	 * 数据源ID  
	 */
	 dataSourceId: string,  
	 
	/**  
	 * 是否用将进上下文变量合并到输入参数  
	 */  
	withContextVariable?: boolean,  
	
	/**  
	 * 输入参数  
	 */  
	params?: FieldRule[],

	/**  
	 * 是否使用事务  
	 */  
	useTransaction: boolean  
	  
	/**  
	 * 是否批量提交  
	 */  
	batchCommit: boolean  
	  
	/**  
	 * 批量提交的最大数量  
	 */  
	batchMaxCount: number
}
```
示例
```javascript
{  
    type: 'updateTable',       // 更新表  
    dataSourceId: 'master',  
    tableName: 'bas_item',     // 写入 WMS 数据源的 bas_item 表  
    updateMode: 'replace',     // 更新方式, 可以是只插入,  更新+替换(需要写 whereParams 条件)  
    useTransaction: true,      // 使用事务  
    batchCommit: true,         // 批量提交  
    batchMaxCount: 500,        // 批量提交的最大数量  
    errorIfNoEffect: true,     // 是否在未更新到数据时报错  
  
    // 判断记录是否存在的 where 条件 replace 模式时有效  
    // 也用于 update 模式时，update 背后的 where 字段  
    whereParams: [  
        {  
            field: 'item_code',  
            javaType: 'string',  
            sourceDataName: 'DSL_ITEM',  
            sourceDataField: 'item',  
        }  
    ],  
  
    // 写表时，每个字段的定义  
    params: [  
        {  
            field: 'item_code',          // 目标字段名, 不允许用表达式  
            javaType: 'string',          // Java类型  
            updateDisabled: true,        // 禁止 update, 只有在 insert 的时候才有效  
            sourceDataName: 'DSL_ITEM',  // 源数据行的变量名, 不允许用表达式  
            sourceDataField: 'item',     // 源数据行的字段名, 不允许用表达式  
        },  
        {  
            field: 'update_at',  
            javaType: 'timestamp',  
            insertDisabled: true,        // 禁止 insert, 只有在 update 的时候才有效  
            value: '${utils.getTimestamp(System.currentTimeMillis())}'  
        },
    ]
}
```


## 逻辑判断 ifCondition
声明
```typescript
{
	type: 'ifCondition',
	
	/**  
	 * 判断条件的描述  
	 */  
	condition: YvanCondition,  
	  
	/**  
	 * 如果条件达成之后的执行步骤  
	 */  
	steps: Step[]

	/**  
	 * 步骤唯一编码  
	 */  
	id?: string,  
	
	/**  
	 * 步骤中文标题  
	 */  
	title: string,  
	
	/**  
	 * 步骤是否禁用  
	 */  
	disabled?: boolean,  
	
	/**  
	 * 步骤发生异常时中断  
	 */  
	interruptOnException?: boolean,  
	
	/**  
	 * 断言，当条件达成时中断程序，输出异常  
	 */  
	assets?: {  
	    /**  
	     * 断言名称  
	     */  
	    name: string,  
	    /**  
	     * 断言条件  
	     */  
	    condition: YvanCondition,  
	    /**  
	     * 断言异常信息  
	     */  
	    exceptionMessage: '',  
	}[],  
	
	/**  
	 * 是否记录性能  
	 */  
	recordPerformance?: true,  
	
	/**  
	 * 日志格式, 可能用到 ${} 表达式  
	 */  
	loggerFormat?: '',
}
```

## 调用内部方法 invokeMethod
声明
```typescript
{
	type: 'invokeMethod',  
	  
	/**  
	 * 类名  
	 */  
	className: string,  
	  
	/**  
	 * 方法名  
	 */  
	methodName: string,  
	  
	/**  
	 * 方法类型, 静态方法调用，或 springbean 的调用  
	 */  
	invokeType: 'Static' | 'SpringBean',
}
```


# 示例

数据集成方案，是凯乐士二开中，将不同系统的数据接入到WMS系统中来的过程；

```javascript
{  
    id: 'item',          // 集成方案编码,唯一ID  
    title: '商品集成',    // 集成方案的标题  
    path: '接口集成/基础数据/商品', // 菜单路径, 用 / 符号分开  
    sort: 1,                    // 排序，越小越靠前  
    // 预加载字典集合. 凡是用到的字典名称，方案启动时预加载到内存中
    preloadDicts: ['ITEM_CLASSIFY', 'BAS_DIV', 'BAS_GROUPS'],  
    // 交换字典的声明  
    lookups: [],  
    // 步骤的声明  
    steps: []
}
```

## 替换模式（有就更新、没有就插入）
```java
// 从 ERP 查询商品表数据
def mybatis = DaoFactory.getMyBatis(AnalysisCmxApi.class, "HUBKLS");
Map<String, Object> param = [
  startDate: '2024-01-01'
]

mybatis.queryForCursor("analysisItem", param, 2000, it -> {  
    // 用 2000 batch 的游标读取数据
    List<Map<String, Object>> list = it.getRowDataList();

	for (ApiCmxItemMasterIf item : resultList) {
		// 查找 WMS 对应的商品表，有没有 item_code = ERP表 item 字段
		BasItem basItem = queryDsl.selectFrom(QBasItem.basItem)
		    .where(QBasItem.basItem.itemCode.eq(item.getItem()))
		    .fetchFirst();
		    
		if (Objects.isNull(basItem)) {  
		    // WMS没有记录，需要新增
		    basItem = new BasItem(); 
		    basItem.setItemCode(item.getItem()); 
		    
		} else {
			// WMS已有记录，更新数据
			basItem.setUpdateAt(DateUtils.toTimestamp(DateUtils.now()));
		}
	}
}
```
规则描述为
```javascript
{  
    type: "jdbcSqlGet",  // SQL 查询数据
    // 从 ERP 查询商品表数据
    dataSourceId: 'HUBKLS',  
    selectSql: 'select * from cmx_item_master_if where dt>=#{startDate}',
    params: [
		{  
			field: 'startDate',  
			javaType: 'timestamp', 
			sourceDataName: 'INPUT',  
			sourceDataField: 'startDate',  
		},
	],
    cursorBatchSize: 2000,        // 是否批量游标读取,如果是0 就不要用游标读取
	resultVariable: 'DSL_ITEM',   // 取一个变量名
	// 集成方案的步骤声明
	steps: [
		// 查询出来的记录，进入下面步骤进行写入
		{  
		    type: 'updateTable',    // 更新表
		    dataSourceId: 'master', 
		    tableName: 'bas_item',  // 写入 WMS 数据源的 bas_item 表 
		    updateMode: 'replace',  // 更新方式, 可以是只插入,  更新+替换(需要写 whereParams 条件)
		    useTransaction: true,   // 使用事务
		    batchCommit: true,      // 批量提交
		    batchMaxCount: 500,     // 批量提交的最大数量
		    errorIfNoEffect: true,  // 是否在未更新到数据时报错
		    
		    // 判断记录是否存在的 where 条件 replace 模式时有效
		    // 也用于 update 模式时，update 背后的 where 字段
		    whereParams: [  
		        {  
		            field: 'item_code',          // 目标表的字段名
		            javaType: 'string',          // JAVA数据类型
		            sourceDataName: 'DSL_ITEM',  // 变量名
		            sourceDataField: 'item',     // 字段名
		        }  
		    ],  
		    
		    params: [
				{  
				    field: 'item_code',          // 目标字段名, 不允许用表达式  
				    javaType: 'string',          // Java类型  
				    updateDisabled: true,        // 禁止 update, 只有在 insert 的时候才有效  
				    sourceDataName: 'DSL_ITEM',  // 源数据行的变量名, 不允许用表达式  
				    sourceDataField: 'item',     // 源数据行的字段名, 不允许用表达式  
				},  
				{  
				    field: 'update_at',  
				    javaType: 'timestamp',  
				    insertDisabled: true,        // 禁止 insert, 只有在 update 的时候才有效  
				    value: '${utils.getTimestamp(System.currentTimeMillis())}'  
				},
			]
		}
	]
}
```

## 从源到目标的映射值
```java
basItem.setItemName(item.getItemDescSecondary());  
basItem.setCommonName(item.getItemDescSecondary());
```
规则描述为
```javascript
{  
    field: 'item_name',  
    javaType: 'string',  
    sourceDataName: 'DSL_ITEM',  
    sourceDataField: 'item_desc_secondary',  
},  
{  
    field: 'common_name',  
    javaType: 'string',  
    sourceDataName: 'DSL_ITEM',  
    sourceDataField: 'item_desc_secondary',  
},
```

## 固定值 value
```java
basItem.setOwnerId(101L);
```
规则描述为
```javascript
{  
    field: 'owner_id',  
    javaType: 'long',  
    value: '101',  
},
```

## 新增记录时候才使用值 defaultValueOnInsert
```java
//新增
basItem = new BasItem();
basPackage.setIsEnable(CSysYesNo.YES);
basItem.setItemId(daoMain.snowId("ITEM_ID"));
```
规则描述为
```javascript
{  
    field: 'is_enable',  
    javaType: 'string',  
    defaultValueOnInsert: '0001',  
},
{  
    field: 'item_id',  
    javaType: 'long',  
    updateDisabled: true,
    defaultValueOnInsert: '${snow_id("bas_item")}',  
}
```

## 处理助记码 valueFormatter
```java
basItem.setZjm(PinyinUtils.getStringHeadPurePinYin(item.getItemDescSecondary(), ""));
```
规则描述为
```javascript
{  
    field: 'zjm',  
    javaType: 'string',  
    valueFormatter: 'getZjm("${value}")',  
    sourceDataName: 'DSL_ITEM',  
    sourceDataField: 'item_desc_secondary',  
},
```

## 处理字典 dict
```java
basItem.setItemClassify(isKeyInClass(CItemClassify.class, Conv.asString(item.getDept())) ? Conv.asString(item.getDept()) : CItemClassify.CODE999);  

basItem.setItemDiv(isKeyInClass(CBasDiv.class, Conv.asString(item.getDiv())) ? Conv.asString(item.getDiv()) : null);  

basItem.setItemGroup(isKeyInClass(CBasGroups.class, Conv.asString(item.getGroups())) ? Conv.asString(item.getGroups()) : null);
```
规则描述为
```javascript
{  
    field: 'item_classify',  
    javaType: 'string',  
    dict: 'ITEM_CLASSIFY',  
    dictKey: 'var_name',  
    valueMappingNotFoundValue: '9999',  
    sourceDataName: 'DSL_ITEM',  
    sourceDataField: 'dept',  
},  
{  
    field: 'item_div',  
    javaType: 'string',  
    dict: 'BAS_DIV',  
    dictKey: 'var_name',  
    valueMappingNotFoundValue: null,  
    sourceDataName: 'DSL_ITEM',  
    sourceDataField: 'div',  
},  
{  
    field: 'item_group',  
    javaType: 'string',  
    dict: 'BAS_GROUPS',  
    dictKey: 'var_name',  
    valueMappingNotFoundValue: null,  
    sourceDataName: 'DSL_ITEM',  
    sourceDataField: 'groups',  
},

// 在方案描述时，会自动将需要预加载的字典都描述清楚
{  
    id: 'item',  
    title: '商品集成',  
    path: '基础数据.商品',  
    sort: 1,  
    // 预加载字典集合. 凡是用到的字典名称，方案启动时预加载到内存中
    preloadDicts: ['ITEM_CLASSIFY', 'BAS_DIV', 'BAS_GROUPS'],
    ...
}

```


## 值映射关系 valueMapping

```java
basItem.setIsImportable("1".equals(item.getIsImportCargoes()) ? CSysYesNo.YES : CSysYesNo.NO);
basItem.setIsSupervised("1".equals(item.getIsInCtrl()) ? CSysYesNo.YES : CSysYesNo.NO);
basItem.setIsSpecialty("1".equals(item.getIsIncEphedrine()) ? CSysYesNo.YES : CSysYesNo.NO);
```
规则描述为
```javascript
{  
    field: 'is_importable',  
    javaType: 'string',  
    valueMapping: {  
        "1": "0001",  
    },  
    valueMappingNotFoundValue: "0000",  
    sourceDataName: 'DSL_ITEM',  
    sourceDataField: 'is_import_cargoes',  
},  
{  
    field: 'is_supervised',  
    javaType: 'string',  
    valueMapping: {  
        "1": "0001",  
    },  
    valueMappingNotFoundValue: "0000",  
    sourceDataName: 'DSL_ITEM',  
    sourceDataField: 'is_in_ctrl',  
},  
{  
    field: 'is_specialty',  
    javaType: 'string',  
    valueMapping: {  
        "1": "0001",  
    },  
    valueMappingNotFoundValue: "0000",  
    sourceDataName: 'DSL_ITEM',  
    sourceDataField: 'is_inc_ephedrine',  
},
```

## 高级字典用法 lookup 处理多记录，比如 69码子表
```java
//处理69码  
List<ApiCmxItemBarIf> barcodeMap = mybatis.queryMany("getBarcode", item, ApiCmxItemBarIf.class);  
int bound = barcodeMap.size();  
for (int i = 0; i < bound; i++) {  
    ApiCmxItemBarIf obj = barcodeMap.get(i);  
    switch (i) {  
        case 0:  
            basItem.setBarcode(obj.getBarcode());  
            break;  
        case 2:  
            basItem.setBarcode2(obj.getBarcode());  
            break;  
        case 3:  
            basItem.setBarcode3(obj.getBarcode());  
            break;  
        case 4:  
            basItem.setBarcode4(obj.getBarcode());  
            break;  
        case 5:  
            basItem.setBarcode5(obj.getBarcode());  
            break;  
        case 6:  
            basItem.setBarcode6(obj.getBarcode());  
            break;  
        case 7:  
            basItem.setBarcode7(obj.getBarcode());  
            break;  
        case 8:  
            basItem.setBarcode8(obj.getBarcode());  
            break;  
        case 9:  
            basItem.setBarcode9(obj.getBarcode());  
            break;  
        default:  
            break;  
    }  
}
```
规则描述为
```javascript
{
    lookups: [
        {
            lookupKey: 'findItemBarcode',
            cache: false,
            batchLoad: true,
            batchLoadMaxRows: 100,
            resultIsMuliRow: true,
            step: {
                type: 'jdbcSqlGet',
                dataSourceId: 'HUBKLS',
                selectSql: `SELECT *  
FROM cmx_item_barcode t  WHERE
--in and t.item in #{item_code}`,
            } as StepJdbcSqlGet,
        },
    ],
        steps: [
        ...
            {
                type: "jdbcSqlGet",
                dataSourceId: 'HUBKLS',
                selectSql: '...'
                steps: [
                    {
                        type: 'updateTable',
                        tableName: 'bas_item',
                        params: [
                            {
                                field: 'barcode',
                                javaType: 'string',
                                lookupKey: 'findItemBarcode',
                                lookupValue: '${rows[0].barcode}',  // 第1行
                                lookupParams: [
                                    {
                                        field: 'item_code',
                                        sourceDataName: 'DSL_ITEM',
                                        sourceDataField: 'item',
                                    }
                                ],
                            },
                            {
                                field: 'barcode2',
                                javaType: 'string',
                                lookupKey: 'findItemBarcode',
                                lookupValue: '${rows[1].barcode}',  // 第2行  
                                lookupParams: [
                                    {
                                        field: 'item_code',
                                        sourceDataName: 'DSL_ITEM',
                                        sourceDataField: 'item',
                                    }
                                ],
                            },
                            {
                                field: 'barcode3',
                                javaType: 'string',
                                lookupKey: 'findItemBarcode',
                                lookupValue: '${rows[2].barcode}',   // 第3行
                                lookupParams: [
                                    {
                                        field: 'item_code',
                                        sourceDataName: 'DSL_ITEM',
                                        sourceDataField: 'item',
                                    }
                                ],
                            },
                            ...
                        ]
                    }
                ]
            }
    ]
}
```

