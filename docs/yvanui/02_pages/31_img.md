---
title: 图片 img
---

# 图片 img 组件
img组件用于在网页中嵌入图像的基本元素
#### 功能描述
1. 指定图片的固定路径或URL
2. 可以直接绑定值，动态变化
3. 支持图片预览，放大缩小旋转等
#### 示例显示
![[31_img/img.png]]
![[31_img/img_1.png]]
## 事件

| 事件名称 | 说明 | 参数和示例 |
|:-----|----|-------|
| --   | -- | --    |

## 方法

| 方法名称 | 说明  | 参数和示例 |
|:-----|-----|-------|
| --   | --  | --    |

## 属性

| 属性名称          | 说明                                                                | 示例                   |
|:--------------|-------------------------------------------------------------------|----------------------|
| reference     | 设置组件的refs                                                         | refs:img1            |
| modal         | 设置开始值（设置modal绑定后，src属性就会失效）                                       | bind:{value:'{img}'} |
| hidden        | 隐藏或显示组件，默认为false                                                  | hidden:false         |
| width         | 容器宽度，默认为空                                                         | width:100            |
| src           | 路径，默认为空                                                           | width:100            |
| fit           | 图片显示方式，有fill、contain、cover、none、scale-down几种方式，默认为空               | fit:'fill'            |
| heightMode    | 设置高度模式,分为fix（固定）,fit（填满）,如果要设置固定高度，需要结合height属性使用                 | heightMode:'fix' |
| minHeight     | 设置组件的最小高度，默认为无                                                    | minHeight:''       |
| maxHeight     | 设置组件的最大的高度，默认为无                                                   |  maxHeight:''     |
| paddingTop    | 距上的内边距，默认为0                                                       | paddingTop:5                    |
| paddingRight  | 距右的内边距，默认为0                                                       | paddingRight:5                  |
| paddingBottom | 距下的内边距，默认为0                                                       | paddingBottom:5                 |
| paddingLeft   | 距左的内边距，默认为0                                                       | paddingLeft:5                   |
| marginTop     | 距上的内边距，默认为0                                                       | paddingTop:5                    |
| marginRight   | 距右的内边距，默认为0                                                       | paddingRight:5                  |
| marginBottom  | 距下的内边距，默认为0                                                       | paddingBottom:5                 |
| marginLeft    | 距左的内边距，默认为0                                                       | paddingLeft:5                   |

