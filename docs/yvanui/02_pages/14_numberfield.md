---
title: 数字输入框 numberfield
---

# 数字输入框 numberfield 组件
numberfield组件是一种用户界面控件，允许用户输入和编辑数字。它常用于表单中需要用户提供数值的场景，如年龄、数量、价格等，用户可以提交输入框中的数值作为表单数据。

#### 功能描述
1. 允许用户通过键盘或增减按钮输入数字。
2. 可以设置数字的最小值和最大值，限制用户的输入范围。
3. 提供增加和减少数字的按钮，方便用户微调数值。
4. 支持使用键盘上的上下箭头键进行数值调整。
5. 允许设置增减按钮每次点击时的数值增加或减少的步进值。
6. 允许设置数字的小数位数或有效位数，限制用户的输入精度。
7. 支持自定义数字的显示格式，如添加千位分隔符、货币符号等。

#### 示例显示
![[14_numberfield/img.png]]
## 事件
调用组件的事件，同上button组件

| 事件名称 | 说明      | 参数和示例                          |
|:-----|---------|--------------------------------|
| focus    | 获取焦点时触发   | numberfield1_focus(){}     |
| blur     | 失去焦点触发    | numberfield1_blur(){}      |
| change   | 更改时触发     | numberfield1_change(){}    |
| input    | 输入时触发     | numberfield1_input(){}     |
| scancode | 扫码枪读码后触发  | numberfield1_scancode(){}  |

## 方法
方法一般使用于各类事件中，调用即可生效

| 方法名称 | 说明      | 参数和示例                                |
|:-----|---------|--------------------------------------|
| focus  | 组件聚焦 | this.refs.numberfield1.focus() |

## 属性

| 属性名称                    | 说明                                                                  | 示例                              |
|:------------------------|---------------------------------------------------------------------|---------------------------------|
| reference               | 设置组件的refs                                                           | refs:numberfield1               |
| modal                   | 设置组件的modal值名                                                        | bind:{value:'{whNum}'}          |
| hidden                  | 隐藏或显示组件，默认为false                                                    | hidden:false                    |
| fieldLabel              | 标签名                                                                 | fieldLabel:'字段1'                |
| required                | 组件是否必填，默认为false                                                     | required:false                  |
| clearable               | 组件是否清空，默认为false                                                     | clearable:false                 |
| weight                  | 权重的宽度，6中选择，1、2、3、4、5、6，默认为1                                         | weight：1                        |
| labelWidth              | 标签宽度，默认为auto                                                        | labelWidth:80                   |
| validateOnRuleChange    | 是否立刻校验，默认为false                                                     | validateOnRuleChange:false      |
| showMessage             | 是否显示错误，默认为false                                                     | showMessage:false               |
| inlineMessage           | 是否显示内敛错误，默认为false                                                   | inlineMessage:false             |
| size                    | 设置组件的尺寸大小，三种选项large（大）、default（中）、small（小），默认为false                 | size:default                    |
| disabled                | 是否禁用组件，默认为false                                                     | disabled:false                  |
| readonly                | 是否允许只读，默认为false                                                     | readonly:false                  |
| placeholder             | 占位字符，默认为请输入                                                         | placeholder:'请输入'               |
| min                     | 最小值，默认为空                                                            | min:1                           |
| max                     | 最大值，默认为空                                                            | max:100                         |
| step                    | 点击上下按钮时的步进值，默认为1                                                    | step:1                          |
| precision               | 输入数字的精度，默认为0                                                        | precision:2                     |
| controlsPosition        | 按钮位置，默认为空                                                           | controlsPosition:'right'        |
| paddingTop              | 距上的内边距，默认为0                                                         | paddingTop:5                    |
| paddingRight            | 距右的内边距，默认为0                                                         | paddingRight:5                  |
| paddingBottom           | 距下的内边距，默认为0                                                         | paddingBottom:5                 |
| paddingLeft             | 距左的内边距，默认为0                                                         | paddingLeft:5                   |
| cssBackgroundColor      | 设置整个组件的背景色，默认为none                                                  | cssBackgroundColor:"#722ed1"    |
| labelBackgroundColor    | 设置组件label的背景色，默认为none                                               | labelBackgroundColor: '#eb2f96' |
| labelSize               | 设置组件label的文字大小，默认为14px                                              | labelSize: '12px'               |
| labelColor              | 设置组件label的文字颜色，默认为'#606266'                                         | labelColor: '#fbadd2'           |
| isLabelBlod             | 是否设置label的字题为粗体,默认为false                                            | isLabelBlod:true                |
| valueBackgroundColor    | 设置组件value的背景色，默认为none                                               | valueBackgroundColor: '#eb2f96' |
| valueSize               | 设置组件value的文字大小，默认为14px                                              | valueSize: '12px'               |
| valueColor              | 设置组件value的文字颜色，默认为'#606266'                                         | valueColor: '#fbadd2'           |
| isValueBlod             | 是否设置value的字题为粗体,默认为false                                            | isValueBlod:true                |
