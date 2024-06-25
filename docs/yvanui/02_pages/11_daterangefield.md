---
title: 日期范围输入框 daterangefield
---

# 日期范围输入框 daterangefield 组件
DateRangeField是一种表单组件，用于方便用户输入起始日期和结束日期。它提供了一个直观的界面，使用户能够轻松选择日期范围，从而更方便地进行日期选择和筛选操作
#### 功能描述
1. 允许用户选择起始日期和结束日期，以定义一个日期范围。
2. 提供日历选择器界面，用户可以通过点击日历上的日期来选择特定的起始日期和结束日期。
3. 允许用户手动输入日期，以满足特定需求或直接输入已知的日期值。
4. 对用户输入的日期进行格式验证，确保输入的日期符合指定的日期格式要求。
#### 示例显示
![[11_daterangefield/img.png]]
## 事件
调用组件的事件，同上button组件

| 事件名称 | 说明      | 参数和示例                                |
|:-----|---------|--------------------------------------|
| focus    | 获取焦点时触发   | daterangefield1_focus(){}     |
| blur     | 失去焦点触发    | daterangefield1_blur(){}      |
| change   | 更改时触发     | daterangefield1_change(){}    |
| input    | 输入时触发     | daterangefield1_input(){}     |

## 方法

| 方法名称 | 说明  | 参数和示例 |
|:-----|-----|-------|
| --   | --  | --    |

## 属性

| 属性名称                 | 说明      | 示例                                   |
|:---------------------|---------|--------------------------------------|
| reference            | 设置组件的refs                                           | refs:daterangefield1                 |
| value                | 设置开始值（必填项，否则运行时组件切换没反应）                             | bind:{value:'{startDate}'}      |
| value2               | 设置结束值（必填项，否则运行时组件切换没反应）                             | bind:{value2:'{endDate}'}       |
| hidden               | 隐藏或显示组件，默认为false                                    | hidden:false                    |
| fieldLabel           | 标签名                                                 | fieldLabel:'NewDate'            |
| required             | 组件是否必填，默认为false                                     | required:false                  |
| weight               | 权重的宽度，6中选择，1、2、3、4、5、6，默认为1                         | weight：1                        |
| labelWidth           | 标签宽度，默认为auto                                        | labelWidth:80                   |
| size                 | 设置组件的尺寸大小，三种选项large（大）、default（中）、small（小），默认为false | size:default                    |
| validateOnRuleChange | 是否立刻校验，默认为false                                     | validateOnRuleChange:false |
| showMessage          | 是否显示错误，默认为false                                     | showMessage:false     |
| inlineMessage        | 是否显示内敛错误，默认为false                                   | inlineMessage:false   |
| startPlaceholder     | 开始日期占位字符，默认为空                                       | startPlaceholder:''             |
| endPlaceholder       | 结束日期占位字符，空                                          | endPlaceholder:''               |
| maxlength            | 最大长度，默认为空                                           | maxlength:''                    |
| valueFormat          | 日期格式，默认为YYYY-MM-DD                                  | valueFormat:''                    |
| disabled             | 是否禁用组件，默认为false                                     | disabled:false                  |
| readonly             | 是否允许只读，默认为false                                     | readonly:false                  |
| marginTop            | 距上的内边距，默认为0                                         | paddingTop:5                    |
| marginRight          | 距右的内边距，默认为0                                         | paddingRight:5                  |
| marginBottom         | 距下的内边距，默认为0                                         | paddingBottom:5                 |
| marginLeft           | 距左的内边距，默认为0                                         | paddingLeft:5                   |
| cssBackgroundColor   | 设置整个组件的背景色，默认为none                                  | cssBackgroundColor:"#722ed1"    |
| labelBackgroundColor | 设置组件label的背景色，默认为none                               | labelBackgroundColor: '#eb2f96' |
| labelSize            | 设置组件label的文字大小，默认为14px                              | labelSize: '12px'               |
| labelColor           | 设置组件label的文字颜色，默认为'#606266'                         | labelColor: '#fbadd2'           |
| isLabelBlod          | 是否设置label的字题为粗体,默认为false                            | isLabelBlod:true                |
| valueBackgroundColor | 设置组件value的背景色，默认为none                               | valueBackgroundColor: '#eb2f96' |
| valueSize            | 设置组件value的文字大小，默认为14px                              | valueSize: '12px'               |
| valueColor           | 设置组件value的文字颜色，默认为'#606266'                         | valueColor: '#fbadd2'           |