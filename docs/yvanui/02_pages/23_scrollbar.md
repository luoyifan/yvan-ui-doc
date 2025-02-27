---
title: 滚动条 scrollbar
---

# 滚动条 scrollbar 组件
scrollbar组件滚动条作为用户界面设计中的基本组件,用于替换浏览器原生滚动条。常用于容器类组件添加滚动效果。
#### 功能描述
1. 滚动条允许用户浏览和访问超出当前可视区域的内容，如长文本、大型表格、图像库等。它们提供了一种直观的方式来管理和操作大量内容，使得用户可以精确地定位到所需部分。
2. 滚动条帮助管理界面上的空间，通过动态显示或隐藏，仅在内容超出视图时才显示。这有助于保持界面的整洁性和可用性。
3. 根据用户当前的日期时间填充默认值，方便用户选择或直接使用当前时间。
4. 滚动条的状态变化（如拖动滑块或点击轨道）提供了实时的反馈，告知用户他们当前在内容中的位置以及可滚动的剩余空间。
5. 通过优化滚动条的响应速度和动画效果，可以提升用户感知到的界面流畅度和操作的即时性。
6. 有效地管理和优化滚动条的渲染和交互，以减少对浏览器性能的负面影响，特别是在处理大量内容或复杂动画时。
7. 滚动条在主流浏览器中通常有良好的兼容性，简化了开发人员在项目中集成和定制滚动条的工作。
#### 示例显示
![[23_scrollbar/img.png]]
## 事件
调用组件的事件，同上button组件

| 事件名称 | 说明  | 参数和示例 |
|:-----|-----|-------|
| --   | --  | --    |

## 方法

| 方法名称 | 说明  | 参数和示例 |
|:-----|-----|-------|
| --   | --  | --    |

## 属性

| 属性名称                | 说明                                                | 示例               |
|:--------------------|---------------------------------------------------|------------------|
| reference           | 设置组件的refs                                         | refs:scrollbar1  |
| heightMode          | 设置高度模式,分为fix（固定）,fit（填满）,如果要设置固定高度，需要结合height属性使用 | heightMode:'fix' |
| minHeight           | 设置组件的最小高度，默认为无                               | minHeight:''       |
| maxHeight           | 设置组件的最大的高度，默认为无                             |  maxHeight:''     |
| paddingTop          | 距上的内边距，默认为0                                         | paddingTop:5                    |
| paddingRight        | 距右的内边距，默认为0                                         | paddingRight:5                  |
| paddingBottom       | 距下的内边距，默认为0                                         | paddingBottom:5                 |
| paddingLeft         | 距左的内边距，默认为0                                         | paddingLeft:5                   |
| marginTop           | 距上的内边距，默认为0                                         | paddingTop:5                    |
| marginRight         | 距右的内边距，默认为0                                         | paddingRight:5                  |
| marginBottom        | 距下的内边距，默认为0                                         | paddingBottom:5                 |
| marginLeft          | 距左的内边距，默认为0                                         | paddingLeft:5                   |
| cssBackgroundColor  | 设置整个组件的背景色，默认为none                                  | cssBackgroundColor:"#722ed1"    |

