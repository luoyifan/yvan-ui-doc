---
title: 文本输入框 textfield
---


# 文本输入框 textfield 组件
textfield组件是一种基础的用户界面元素，允许用户通过鼠标或键盘输入字符，用于表单组件内，便于用户输入和提交数据。
#### 功能描述
1. 用户可以通过键盘输入字符，包括字母、数字和特殊符号
2. 用户可以通过鼠标点击输入框来激活焦点，从而开始输入。
3. 在输入框为空时，显示提示性文字，帮助用户理解需要输入的内容类型。
#### 示例显示
![[03_textfield/img_1.png]]
![[03_textfield/img.png]]
## 事件
调用组件的事件，同上button组件
| 事件名称     | 说明        | 参数和示例                    |
|:---------|-----------|--------------------------|
| focus    | 获取焦点时触发   | textfield1_focus(){}     |
| blur     | 失去焦点触发    | textfield1_blur(){}      |
| change   | 更改时触发     | textfield1_change(){}    |
| input    | 输入时触发     | textfield1_input(){}     |
| scancode | 扫码枪读码后触发  | textfield1_scancode(){}  |

## 方法
方法一般使用于各类事件中，调用即可生效
| 方法名称   | 说明 | 参数和示例                                |
|:-------|--|--------------------------------------|
| focus  | 组件聚焦 | this.refs.input1.focus() |
## 属性

| 属性名称                 | 说明                                                  | 示例                                  |
|:---------------------|-----------------------------------------------------|-------------------------------------|
| reference            | 设置组件的refs                                           | refs:textfield1                     |
| modal                | 设置组件的modal值名                                        | bind:{value:'{whName}'}             |
| hidden               | 隐藏或显示组件，默认为false                                    | hidden:false                        |
| fieldLabel           | 标签名                                                 | fieldLabel:'字段1'                    |
| required             | 组件是否必填，默认为false                                     | required:false                      |
| weight               | 权重的宽度，6中选择，1、2、3、4、5、6，默认为1                         | weight：1                            |
| labelWidth           | 标签宽度，默认为auto                                        | labelWidth:80                       |
| size                 | 设置组件的尺寸大小，三种选项large（大）、default（中）、small（小），默认为false | size:default                        |
| disabled             | 是否禁用组件，默认为false                                     | disabled:false                      |
| textarea             | 是否显示为多行文本，默认为false                                  | textarea:true                       |
| maxlength            | 最大长度，默认为空                                           | maxlength:''                        |
| showPassword         | 是否是密码框，默认为false                                     | showPassword:true(设置为true则显示为密码输入框) |
| readonly             | 是否允许只读，默认为false                                     | readonly:false                      |
| paddingTop           | 距上的内边距，默认为0                                         | paddingTop:5                        |
| paddingRight         | 距右的内边距，默认为0                                         | paddingRight:5                      |
| paddingBottom        | 距下的内边距，默认为0                                         | paddingBottom:5                     |
| paddingLeft          | 距左的内边距，默认为0                                         | paddingLeft:5                       |
| cssBackgroundColor   | 设置整个组件的背景色，默认为none                                  | cssBackgroundColor:"#722ed1"        |
| labelBackgroundColor | 设置组件label的背景色，默认为none                               | labelBackgroundColor: '#eb2f96'     |
| labelSize            | 设置组件label的文字大小，默认为14px                              | labelSize: '12px'                   |
| labelColor           | 设置组件label的文字颜色，默认为'#606266'                         | labelColor: '#fbadd2'               |
| isLabelBlod          | 是否设置label的字题为粗体,默认为false                            | isLabelBlod:true                    |
| valueBackgroundColor | 设置组件value的背景色，默认为none                               | valueBackgroundColor: '#eb2f96'     |
| valueSize            | 设置组件value的文字大小，默认为14px                              | valueSize: '12px'                   |
| valueColor           | 设置组件value的文字颜色，默认为'#606266'                         | valueColor: '#fbadd2'               |
| isValueBlod          | 是否设置value的字题为粗体,默认为false                            | isValueBlod:true                    |
