---
title: iframe
---

# iframe 组件
iframe组件是HTML中的一个元素，用于在当前HTML文档中嵌入另一个文档，是一个强大的工具，能够解决许多复杂的网页集成和内容嵌入问题。
#### 功能描述
1. 最常见的用途是嵌入其他网页或外部资源，如跨域加载的内容，如广告、地图、视频、社交媒体插件等。
2. 以将页面内容分成若干区块，每个区块加载不同的文档或资源，从而实现模块化和更复杂的页面结构。
3. 允许加载来自不同域的内容，实现跨域数据交互。
#### 示例显示
![[28_iframe/img.png]]
## 事件

| 事件名称 | 说明  | 参数和示例 |
|:-----|-----|-------|
| --   | --  | --    |

## 方法

| 方法名称 | 说明  | 参数和示例 |
|:-----|-----|-------|
| --   | --  | --    |

## 属性

| 属性名称          | 说明                                             | 示例             |
|:--------------|------------------------------------------------|----------------|
| reference     | 设置组件的refs                                      | refs:iframe1   |
| hidden        | 隐藏或显示组件，默认为false                               | hidden:false   |
| src           | 设置地址,默认为空                                      | src:''           |
| heightMode    | 设置高度模式,分为fix（固定）,fit（填满）,如果要设置固定高度，需要结合height属性使用 | heightMode:'fix' |
| minHeight     | 设置组件的最小高度，默认为无                             | minHeight:''       |
| maxHeight     | 设置组件的最大的高度，默认为无                            |  maxHeight:''     |
| paddingTop    | 距上的内边距，默认为0                                    | paddingTop:5                    |
| paddingRight  | 距右的内边距，默认为0                                    | paddingRight:5                  |
| paddingBottom | 距下的内边距，默认为0                                    | paddingBottom:5                 |
| paddingLeft   | 距左的内边距，默认为0                                    | paddingLeft:5                   |
| marginTop     | 距上的内边距，默认为0                                    | paddingTop:5                    |
| marginRight   | 距右的内边距，默认为0                                    | paddingRight:5                  |
| marginBottom  | 距下的内边距，默认为0                                    | paddingBottom:5                 |
| marginLeft    | 距左的内边距，默认为0                                    | paddingLeft:5                   |
