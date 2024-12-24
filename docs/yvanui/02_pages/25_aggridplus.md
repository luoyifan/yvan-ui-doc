---
title: 数据表格增强 aggridplus
---

# 数据表格增强 aggridplus 组件
展示行列数据。一般在以下场景下使用：
- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时；

## 1. 显示效果
![[25_aggridplus/01_show_1.png]]
![[25_aggridplus/01_show_2.png]]

## 2. 事件
| 事件名称 | 说明      | 参数和示例                                |
|:-----|---------|--------------------------------------|
| click | 点击 |       |
| onDataLoadComplete | 数据载入完成后回调 |       |
| onReady | 表格渲染完后 |       |
| onCellClick | 单元格点击 |       |
| onCellEditingStart | 单元格开始编辑 |       |
| onCellEditingStop | 单元格结束编辑 |       |
| onCellDoubleClick | 单元格双击 |       |
| onRowClick | 行点击 |       |
| onSelectionChange | 选择内容被改变 |       |
| onRowDblClick | 行双击 |       |

## 3. 方法
| 方法名称 | 说明  | 参数和示例 |
|:-----|-----|-------|
| validate | 校验 |       |
| expandAll | 展开所有节点 |       |
| showAddDialog | 显示新增对话框 |       |
| showEditDialog | 显示编辑对话框 |       |
| appendRow | 新增行 |       |
| appendEditRow | 新增编辑行 |       |
| removeRowByRange | 删除单元格模式下选中的行 |       |
| removeSelectedRow | 删除选中的行 |       |
| stopEditing | 停止编辑 |       |
| setData | 设置数据 |       |
| getDataRows | 获取数据 |       |
| setSelectionRow | 设置选中行 |       |
| setEditRow | 设置当前编辑行的数据 |       |
| reload | 重新载入表格数据 |       |
| getSelectedRows | 获取所有选中行 |       |
| setRowDataByRowid | 根据行ID设置行数据 |       |
| removeRowByRowid | 根据行ID删除行数据 |       |

## 4. 属性
| 属性名称 | 说明      | 示例                                   |
|:-----|---------|--------------------------------------|
| reference | reference |  |
| hidden |  隐藏 |  |
| emptyText | 空文本  |  |
| title | 标题  |  |
| autoLoad | 自动读取数据  |  |
| hideToolbar | 隐藏工具栏  |  |
| showTitle | 显示标题  |  |
| isCustomTitle | 自定义标题  |  |
| customTitle | 标题内容  |  |
| hideQuickFilter | 隐藏快速筛选  |  |
| hideReloadButton | 隐藏刷新按钮  |  |
| hidePagination | 隐藏分页  |  |
| allowQuickFilter | 允许快捷查询  |  |
| allowAppendButton | 允许添加按钮  |  |
| allowDeleteButton | 允许删除按钮  |  |
| allowEditButton | 允许编辑按钮  |  |
| allowSaveButton | 允许保存按钮  |  |
| showFooter | 显示表尾  |  |
| footerRowHeight | 表尾高度  |  |

## 5. 使用步骤
### 5.1 拖拽组件
打开二开页面，点击【工具箱】>【高级】区域选择【数据表格增强】组件，拖拽至内容区域。
![[25_aggridplus/02_create.png]]

### 5.2 设置reference属性
选中内容区里的【数据表格增强】组件，填写右侧属性栏中设置reference属性，如：testGrid，可以通过`this.refs.testGrid`获取当前aggridpuls组件对象。
![[25_aggridplus/03_aggridplus_props.png]]

### 5.3 设置基础属性
选中内容区里的【数据表格增强】组件，点击右侧属性栏【打开设计器】按钮，选择【基础】。
常用配置属性说明：
- **引用名**：就是表格属性中reference
- **模式**：设置表格模式，可选值：单行选择、勾选模式(选中既勾选)、勾选模式(仅勾选框有效)、单击编辑、双击编辑
- **行高**：设置表格每行的高度，可选值：小、中、大、自定义
![[25_aggridplus/04_aggridplus_props_basic.png]]

### 5.4 设置数据查询
#### 5.4.1 设置数据查询属性之SQL模式
选中内容区里的【数据表格增强】组件，点击右侧属性栏【打开设计器】按钮，选择【数据查询】，此处时用于设置表格的数据来源。 SQL语句中`-- where t`和`-- order t`是固定语法，用于实现表格搜索和排序功能。
![[25_aggridplus/05_aggridpuls_datasource_sql.png]]

#### 5.4.2 设置数据查询属性之URL模式
![[25_aggridplus/06_aggridpuls_datasource_url.png]]

定义`queryDeviceList`方法，提供Web访问，可以通过`${domain:port}/${contextPath}/com/galaxis/bas/device/DeviceInfo@queryDeviceList`访问该方法。
```groovy
import com.galaxis.bas.device

class DeviceInfo {
    static def queryDsl = DaoFactory.getQueryDSL()
    static def myBatis = DaoFactory.getMyBatis(DeviceInfo.class)

    def static queryDeviceList(params) {
        params.wh_id = DbConv.asLong(WhIdHolder.getWhId())
        // 分页模式读取
        def pageOfList = myBatis.queryByPage("deviceGridQueryData", YvanExt.getQueryByPage(), params)
        return Model.newSuccess(pageOfList)
    }
}
```

### 5.5 设置字段
字段通常涉及到定义数据模型或构建表单界面时对各列属性的设定。一个典型的表格字段描述会涵盖以下几个方面：
- **字段名：** 这是字段的标识符，在数据库中通常是列名，用户界面中则显示为表头。例如，“产品ID”、“订单日期”等，应简洁明了地反映字段内容。
- **数据类型：** 指定字段存储的数据类型，如字符串（String）、整数（Integer）、浮点数（Float）、日期时间（DateTime）、布尔值（Boolean）等。
- **显示标签：** 用户界面上显示的标签文本，相比字段名称，这个可以更加人性化和易读，比如“产品名称”而不是直接使用“ProductName”。
- **描述：** 对字段功能或内容的简短说明，帮助其他开发者或用户理解该字段的用途。
- **默认值：** 未输入时自动填充的默认值。
#### 5.5.1 SQL模式设置字段
点击【打开设计器】后，在弹层页面选择【数据查询】页面，输入SQL后，可以点击【分析显示字段】，勾选需要需要显示的字段，点击【添加】添加字段。
![[25_aggridplus/08_aggridplus_field_sql.png]]
可以在【字段】页面查看，添加的字段。
![[25_aggridplus/09_aggridplus_field_sql_done.png]]
#### 5.5.2 设计器设置字段
点击【打开设计器】后，在弹层页面选择【字段】页面，点击【添加】按钮，选中字段，可以修改右侧字段属性。
常用属性说明：
- **字段名：** 设置字段名称，该名称需要与SQL或接口返回值字段对应。
- **表头中文：** 设置表格字段显示的内容
- **隐藏：** 设置是否在表格中显示
- **字典：** 用于将具体值转化为对应的字典值。如：数据库存储的是0或1，表格显示是或否
- **字典样式：** 设置字段字段显示的样式
- **宽度：** 设置字段宽度
- **编码显示转换：** 用于将具体值转化为对应的值，此处使用到数据查询窗口，灵活度更高
- **锁定：** 设置字段位置锁定，如将字段固定到左侧
- **强制字段类型：** 设置字段类型
![[25_aggridplus/10_aggridplus_field_add.png]]

### 5.6 设置筛选条件
#### 5.6.1 SQL模式设置筛选条件
点击【打开设计器】后，在弹层页面选择【数据查询】页面，输入SQL后，可以点击【分析筛选字段】，勾选需要显示的筛选条件，点击【添加】添加筛选条件。
![[25_aggridplus/11_aggridplus_search_sql.png]]
![[25_aggridplus/13_aggridplus_search_done.png]]
#### 5.6.2 设计器设置筛选条件
点击【打开设计器】后，在弹层页面选择【筛选条件】页面，点击【添加】按钮添加筛选条件。
常用属性说明：
- **变量名(字段名)：** 该设置项需要与SQL里面的表字段一致
- **表格名(别名)：** 该设置项值需要与SQL里面的表别名一致
- **条件中文名：** 设置筛选条件的标签名称
- **条件类型：** 设置筛选条件的条件类型，可选值：字符串、数字、字典、搜索、日期、编号、隐藏、仅等于。
- **默认操作符：** 设置筛选条件的操作类型，可选值：范围、集合包含、集合不包含、文本包含、文本不包含、开头匹配、开头不匹配、小于等于、大于等于、小于、等于、不等于
- **字典配置：** 设置字典配置
- **默认值：** 设置默认值
![[25_aggridplus/12_aggridplus_search_add.png]]

### 5.7 设置排序
点击【打开设计器】后，在弹层页面选择【排序】页面，勾选需要设置排序的字段。
![[25_aggridplus/14_aggridplus_sort.png]]

### 5.8 设置数据保存
![[25_aggridplus/15_aggridplus_save.png]]

### 关联详情对话框
#### 设定详情对话框校验
找到对话框的 validateCommit 事件，参考如图下代码
```javascript
const resolve = arguments[0]
const reject = arguments[1]
// 行数据
const row = this.quality_review_supply_detail.param.row
const rowType = this.quality_review_supply_detail.param.rowType

if (!row.qty) {
    // 校验有异常
    reject([
        { field: 'quality_review_supply_detail.row.qty', message: '申请复查数量不允许为空' },
    ])
    return
}

// 通过全部校验
resolve()
```
