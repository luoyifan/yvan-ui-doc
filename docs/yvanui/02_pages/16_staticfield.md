---
title: 静态文本 staticfield
---

# 静态文本 staticfield 组件
staticfield组件通常用于显示不需要用户输入或交互的信息。它可以是单行或多行文本，用于展示如说明文本、提示信息、或者只读数据等内容。用于表单组件内，便于显示数据信息。
#### 功能描述
1. 静态文本组件主要用于展示不可编辑的文本内容，如标题、段落说明等。
2. 用户无法编辑静态文本内容，仅用于显示，展示只读数据用户信息、产品信息等。
3. 能够显示长段落或者格式化的内容。
4. 静态文本组件通常作为表单中的标签或者补充性说明，帮助用户理解表单中的字段或操作。
#### 示例显示
![[16_staticfield/img.png]]
## 事件
调用组件的事件，同上button组件

| 事件名称 | 说明      | 参数和示例                                |
|:-----|---------|--------------------------------------|
| click | 点击组件后触发 | click: '{staticfield1_click}', |
| change   | 更改时触发   | staticfield1_change(){}    |

## 方法

| 方法名称 | 说明  | 参数和示例 |
|:-----|-----|-------|
| --   | --  | --    |

## 属性

| 属性名称                   | 说明                                                  | 示例                         |
|:-----------------------|-----------------------------------------------------|----------------------------|
| reference              | 设置组件的refs                                           | refs:staticfield1          |
| modal                  | 设置组件的modal值名,(必填项，否则选不中选项)                          | bind:{value:'{whExample}'} |
| hidden                 | 隐藏或显示组件，默认为false                                    | hidden:false               |
| fieldLabel             | 标签名                                                 | fieldLabel:'文本字段'          |
| text                   | 文本字段对应的内容                                           | text:'我是内容'                |
| weight                 | 权重的宽度，6中选择，1、2、3、4、5、6，默认为1                         | weight：1                   |
| labelWidth             | 标签宽度，默认为auto                                        | labelWidth:80              |
| paddingTop             | 距上的内边距，默认为0                                                         | paddingTop:5                    |
| paddingRight           | 距右的内边距，默认为0                                                         | paddingRight:5                  |
| paddingBottom          | 距下的内边距，默认为0                                                         | paddingBottom:5                 |
| paddingLeft            | 距左的内边距，默认为0                                                         | paddingLeft:5                   |
| cssBackgroundColor     | 设置整个组件的背景色，默认为none                                                  | cssBackgroundColor:"#722ed1"    |
| labelBackgroundColor   | 设置组件label的背景色，默认为none                                               | labelBackgroundColor: '#eb2f96' |
| labelSize              | 设置组件label的文字大小，默认为14px                                              | labelSize: '12px'               |
| labelColor             | 设置组件label的文字颜色，默认为'#606266'                                         | labelColor: '#fbadd2'           |
| isLabelBlod            | 是否设置label的字题为粗体,默认为false                                            | isLabelBlod:true                |
| valueBackgroundColor   | 设置组件value的背景色，默认为none                                               | valueBackgroundColor: '#eb2f96' |
| valueSize              | 设置组件value的文字大小，默认为14px                                              | valueSize: '12px'               |
| valueColor             | 设置组件value的文字颜色，默认为'#606266'                                         | valueColor: '#fbadd2'           |
| isValueBlod            | 是否设置value的字题为粗体,默认为false                                            | isValueBlod:true                |