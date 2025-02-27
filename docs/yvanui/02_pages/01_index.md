---
title: 功能开发
date: 2024-03-29 22:02
author: yvan
------

# 功能组成

每个典型的功能，至少由4个部分组成：

- .vue 文件, 基本功能模块前端文件，这个文件允许手写复杂前端逻辑、样式、复杂html等，他回引用 .design.js 文件，共同拼凑成一个前端功能模块;
- .design.js 文件, 这个文件是由凯乐士视图设计器生成. 都是以 vjson 格式存储;
- .java 文件, 后端接口逻辑，这个文件是手写的，并且与前端功能模块对应，共同完成权限控制、数据交互等功能;
- .xml 文件, Mybatis的SQL文件，这个文件会被二开设计器写入，同时也允许手写，当遇到复杂 SQL 时，可以手写定制 SQL;

## vue 文件
例如，模块名称为 CurrentTask.vue, 内容如下

```vue
<template>
  <YvVjsonLayout :vjson="vjson" :vcxt="vcxt"/>
</template>
<script>
import {YvI18nMixin, BizMixin} from 'yvan-workbench'
import Design from './CurrentTask.design'  // 引用同路径同名的 .design.js 文件, 在这个例子中就是 CurrentTask.design

export default {
  mixins: [Design, YvI18nMixin, BizMixin],
  mounted() {
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
```

## design.js 文件
例如，模块名称为 CurrentTask.vue, 内容如下
```javascript
export default {
    data() {
        return {
            // 模块组件的引用句柄. 
            // 如果组件定义了 reference 属性，则自动生成支持组件句柄，放到 refs 中，方便编程时使用
            // 每个引用属性，都会带上 @type 注释以支持在 IDE 环境中的代码提示
            refs: {
                /**
                 * @type {aggridplus}
                 */
                grid1: null,
                /**
                 * @type {form}
                 */
                form1: null,
                /**
                 * @type {dialog}
                 */
                dialog1: null,
                /**
                 * @type {textfield}
                 */
                textbox1: null,
                /**
                 * @type {combo}
                 */
                combo2: null,
            },

            // 数据部分，一部分高级组件（比如对话框 dialog / aggridplus 组件，会自动将一些数据绑定到模块数据中，让其具备双向绑定特性）
            grid1: {
                isChanged: false,
                selections: [],
                checkedRows: [],
                selection: null,
            },
            dialog1: {
                isShow: false,
                loading: false,
                width: false,
                title: false,
                row: {},
            },
            // 数据部分，vjson中定义的 bind.xxx 会双向绑定到某个属性上
            query: {
                value1: '',
                value2: '',
            },

            // 视图定义部分
            vjson: {
                title: 'N/A',  // 模块标题
                isFlex: true,  // 是否自适应高度，开启这个选项之后，布局模式最高高度是 100%，且不会出现纵向滚动条
                layout: 'DefaultLayout',   // 布局模式，( PC页面=DefaultLayout; 移动端=MobileLayout, 大屏页面=DashboardLayout )

                // 页面中包含的子对话框组件
                dialogs: [
                    {
                        reference: 'dialog1', // reference 属性如果有值，会在模块 refs 中生成一个属性，方便编程时使用组件引用
                        xtype: 'drawer',      // xtype 既组件类型，所有的组件都会有 xtype，具体见 defineVjsonComponent 定义 vjson 组件
                        // 对话框内的组件
                        items: [
                            {
                                xtype: 'aggridplus',
                                reference: 'grid1',
                                listeners: {
                                    rowClick: '{grid1_rowClick}',
                                },
                            }
                        ]
                    }
                ],

                // 所有下级组件
                items: [
                    {
                        xtype: 'form',
                        // form 组件的内部组件
                        items: [
                            {
                                xtype: 'textfield',
                                reference: 'textbox1',
                                fieldLabel: '查询条件1',
                                bind: {
                                    value: '{query.f1}', // 文本输入框中的值，双向绑定到 query.f1 属性
                                },
                                listeners: {
                                    change: '{f1_change}', // change 事件绑定到 f1_change 方法
                                },
                            },
                            {
                                xtype: 'combo',
                                reference: 'combo2',
                                fieldLabel: '查询条件2',
                                displayField: 'text', // 下拉框中显示的字段名
                                valueField: 'id', // 下拉框中的值字段名
                                dataType: 2, // 下拉框数据类型(1=自定义枚举字典; 2=数据字典; 3=界面引用表达式; 5=URL, 设置 optionUrl)
                                dataDict: 'DIV_TYPE', // 当下拉框数据类型是2，这个属性是数据字典的名称
                                required: true,
                                bind: {
                                    value: '{query.f2}', // 下拉框中的值，双向绑定到 query.f2 属性
                                    disabled: '{combo2_disabled}',
                                },
                                listeners: {
                                    change: '{f2_change}', // change 事件绑定到 f2_change 方法
                                },
                            }
                        ]
                    }
                ]
            }
        }
    },
    computed: {
        combo2_disabled() {
            return (this.refs.grid1.selections ?? []).length === 0
        },
    },
    methods: {
        grid1_rowClick() {
        },
        f1_change() {
        },
        f2_change() {
        },
    }
}
```

### 详细解读
::: tip 详细解读
- 每个功能模块的 design.js 是作为 vue 模块的一个 mixins, 混入到 vue 功能模块中的。因此 design.js 有完整的 vue 混入模块的结构，他会有自己的 data() / computed / watch / methods 等基本方法;
- design.js 返回的 data 固定有 vjson / refs 属性, 还有一些扩展出来的自定义属性
  - refs: 模块组件的引用句柄. 如果组件定义了 reference 属性，则自动生成支持组件句柄，放到 refs 中，方便编程时使用
  - vjson: 视图定义部分，是一个 json 对象，包含了模块的所有视图定义. vjson 属性, 固定有 title / isFlex / layout / dialogs / items 属性
    - title: 模块标题
    - isFlex: 是否自适应高度，开启这个选项之后，布局模式最高高度是 100%，且不会出现纵向滚动条
    - layout: 布局模式，( PC页面=DefaultLayout; 移动端=MobileLayout, 大屏页面=DashboardLayout )
    - dialogs: 页面中包含的子对话框组件
    - items: 所有下级组件
  - 其他属性，可能是 bind.xxx 中定义的可双向绑定属性，也可能高阶组件允许双向绑定的属性，比如 grid1.checkedRows. 具体见 [组件定义](#组件定义-definevjsoncomponent)
- 在 vjson 中，每个组件都有固定的4个属性 ( xtype / reference / bind / listeners )，以及一些动态属性
  - xtype: 组件类型
  - reference: 组件引用，如果有值，会在模块 refs 中生成一个属性，方便编程时使用组件引用
  - bind: 组件数据绑定，双向绑定到某个 vue 属性上，属性可能在data中或 vue 计算属性(computed)中。
  比如 bind.value = '{query.f1}' 就是绑定到 query.f1 属性上, bind.value = '{combo2_disabled}' 就是绑定到 combo2_disabled 属性上, 可能这个属性是个计算属性.
  如果计算属性只有 get 方法，没有 set 方法, 有可能会造成程序异常。  
  - listeners: 组件事件监听，绑定到当前功能模块(vue) 的 methods 方法中, 语法为: "{方法名}", 这个方法可能位于 design.js 中，也可以在 vue 文件中
:::

### 组件定义 defineVjsonComponent
```javascript
/**
 * 在 PC 端布局下，xtype='button' 的组件定义
 */
export default defineVjsonComponent('button', 'web', {
    /**
     * 运行时组件
     */
    runtime: 'YvVjsonButton',

    /**
     * 设计时组件
     */
    designer: 'YvDesignButton',

    /**
     * 用于 app.use() 注册至全局组件
     */
    install(Vue) {
        Vue.component('YvVjsonButton', YvVjsonButton)
        Vue.component('YvDesignButton', YvDesignButton)
    },

    /**
     * 组件的工具箱定义
     */
    Toolbox: [
        {
            // 注册到基本工具面板，在低代码拖拽时回调 onCreate 方法进行创建
            category: 'basic', order: 1, icon: '/assets/yv-design-icon/ic_light_button.png', dragGroup: "fieldGroup",
            onCreate() {
                const vjson = _.defaults({
                    xtype: 'button',
                    text: 'NewButton',
                }, Button)

                return addVJsonId(vjson)
            }
        },
    ],

    /**
     * 组件在生成文档大纲时，如何用字符串表示
     */
    getLabel(props) {
        let ret = ''
        if (props.text) {
            ret = ret + props.text + ' '
        }
        if (props.reference) {
            ret = ret + props.reference + ' '
        }
        return _.trim(ret)
    },

    /**
     * 组件在设计时，右侧展示的属性面板描述
     */
    propertyPanel: {
        /**
         * 组件在设计时，"基础属性" 面板描述
         */
        basicPanel: [
            ...basicPanelBase,
            {name: 'hidden', label: '隐藏', editor: 'Switch', bindable: true},
            {name: '-'},
            {
                name: 'text', label: '文本', editor: 'TextInput', bindable: true,
                desc: '按钮的文本'
            },
            {name: 'iconCls', label: '图标', editor: 'Icon', bindable: true},
            {
                name: 'isActionLog', label: '记录操作日志', editor: 'Checkbox', bindable: false,
                desc: '按钮点击后系统会记录下操作日志, 用于审计. 开启这个选项之后，一定要填写"操作名"'
            },
            {
                name: 'actionName', label: '操作名', editor: 'TextInput', bindable: false,
                desc: '记录操作日志时的操作名',
                showIf(vjson) {
                    return vjson.isActionLog
                },
            },
            {
                name: 'type', label: '显示类型', editor: 'Select', bindable: true,
                desc: '按钮的颜色, 目前有: default / primary / success / info / warning / danger',
                options: [
                    {value: 'default', label: '默认'},
                    {value: 'primary', label: '主要'},
                    {value: 'success', label: '成功'},
                    {value: 'info', label: '信息'},
                    {value: 'warning', label: '警告'},
                    {value: 'danger', label: '危险'},
                ]
            },
            {name: '-'},
            {
                name: 'shortcut', label: '快捷键', editor: 'ShortCutCmp', bindable: false,
                desc: '按钮的快捷键'
            },
            {
                name: 'plain', label: '朴素', editor: 'Switch', bindable: true,
                desc: '朴素按钮将没有背景色和边框，鼠标悬停时会显示背景色'
            },
            {
                name: 'round', label: '圆角', editor: 'Switch', bindable: true,
                desc: '开启这个选项之后，按钮会变成圆角按钮'
            },
            {
                name: 'circle', label: '圆形', editor: 'Switch', bindable: true,
                desc: '开启这个选项之后，按钮会变成圆形按钮',
            },
            {
                name: 'link', label: '文本模式', editor: 'Switch', bindable: true,
                desc: '开启这个选项之后，按钮会变成文本模式，没有背景色和边框，鼠标悬停时会显示背景色',
            },
            {
                name: 'loading', label: '加载中', editor: 'Switch', bindable: true,
                desc: '开启这个选项之后，按钮会至于不可用状态，并且显示一个加载中的图标',
            },
            '-',
            {
                name: 'size', label: '尺寸', editor: 'ButtonGroup', bindable: true,
                desc: '按钮的尺寸, 目前只有 large / default / small 三种',
                options: [
                    {value: "large", label: "大"},
                    {value: "default", label: "中"},
                    {value: "small", label: "小"},
                    {value: "custom", label: "自定义"},
                ]
            },
            {
                name: 'customSize', label: '自定义大小', editor: 'TextInput', bindable: true,
                desc: '自定义按钮大小', showIf: (vjson) => vjson.size === 'custom'
            },
            {
                name: 'customIconSize', label: '图标大小', editor: 'TextInput', bindable: true,
                desc: '自定义按钮图标大小', showIf: (vjson) => vjson.size === 'custom'
            },
        ],

        /**
         * 组件在设计时，"数据属性" 面板描述
         */
        dataPanel: [],

        /**
         * 组件在设计时，"高级属性" 面板描述
         */
        advancedPanel: [],

        /**
         * 组件在设计时，"样式属性" 面板描述
         */
        stylePanel: [
            {className: 'cls', styleName: 'style'},
        ],

        /**
         * 组件拥有的事件
         */
        eventPanel: [
            ...eventPanelBase,
            {name: 'click', label: '点击时触发', params: []},
        ],

        /**
         * 组件拥有的方法
         */
        methodPanel: [
            ...methodPanelBase,
            {name: 'performClick', label: '触发点击', desc: '触发点击事件'},
        ]
    }
})
```
::: tip 组件定义 defineVjsonComponent
defineVjsonComponent 方法接受3个参数，分别是
- xtype:组件名
- 组件类型(web=PC端组件; mobile=移动端组件; dashboard=大屏组件)
- 组件详细定义
  - designer 设计时组件
  - runtime  运行时组件
  - Toolbox  工具箱定义
  - childrenProps  子元素属性名称集
  - install  用于
  - properties  组件的属性描述
  - getLabel  组件的标签描述
  - propertyPanel  属性面板组件
    - basicPanel  组件在设计时，"基础属性" 面板描述
      - name: 属性名
      - label: 属性标签
      - editor: 属性编辑器
      - bindable: 是否可绑定(该属性是否可以用于 bind.xxx), 默认为 false
      - desc: 属性详细中文描述文档
    - dataPanel 组件在设计时，"数据属性" 面板描述
    - advancedPanel 组件在设计时，"高级属性" 面板描述
    - stylePanel 组件在设计时，"样式属性" 面板描述
    - methodPanel 组件拥有的方法
    - eventPanel 组件拥有的事件
:::

## java 示例
```java
package com.yvan.workbench.test;

import com.yvan.data.jdbc.DaoFactory;
import com.yvan.data.jdbc.MyBatis;
import com.yvan.data.jdbc.QueryDSL;
import com.yvan.model.response.Model;
import lombok.extern.slf4j.Slf4j;

import java.util.List;
import java.util.Map;

@Slf4j
public class Test2 {
    private static final QueryDSL queryDSL = DaoFactory.getQueryDSL();
    private static final MyBatis mybatis = DaoFactory.getMyBatis(Test2.class);

    public static Model<Object> grid1QueryData(Map<String, Object> params) {
        List<Map<String, Object>> list = mybatis.queryMany("grid1QueryData", params);
        return Model.newSuccess(list);
    }
}
```

## mybatis 示例
```xml
<?xml version="1.0" encoding="UTF-8"?>
<mapper namespace="">
<select id="grid1QueryData">
select * from yv_user
</select>
</mapper>
```

- 凯乐士开发平台主要使用 QueryDSL 和 MyBatis 框架与数据库交互. QueryDSL 主要应付数据的添加、更新、删除，及简单的数据查询, MyBatis 主要支持复杂的 SQL，可以与低代码设计器结合.
- DaoFactory.getQueryDSL() 获取 QueryDsl 工具类。DaoFactory.getMyBatis(class) 获取当前类的 MyBatis 帮助类. 
- design.js 中的 aggridplus 组件，设定了 dataSource 属性，可以直接对接后台的 static 方法，方法中将分页、筛选、排序等细节都在框架中处理掉了

# 编码规范
[后台编码规范](./01_zback.md) 

# API函数库

[前端 system 函数](./01_system.md)

[MyBatis框架特性](./01_mybatis.md)

[QueryDsl框架特性](./01_queryDSL.md)

[业务日志特性](./01_logtrace.md)

# 示例

| 组件名                                | 说明             |
|:-----------------------------------|----------------|
| [example1.md](./01_zexample1.md)   | 示例1.基础资料       |
| [example2.md](./01_zexample2.md)   | 示例2.开发表单       |
| [example3.md](./01_zexample3.md)   | 示例3.开发ASN单据界面  |
| [example4.md](./01_zexample4.md)   | 示例4.主表、子表模式的开发 |
| [example5.md](./01_zexample5.md)   | 示例5.平板应用开发     |

## 前端组件表

| 组件名                                          | 说明       | 
|:---------------------------------------------|----------|
| [button](02_button.md)                       | 按钮       |
| [textfield](03_textfield.md)                 | 文本输入框    |
| [titlefield](./04_titlefield.md)             | 标题字段     |
| [treefield](./05_treefield.md)               | 树形下拉框    |
| [checkbox](./06_checkbox.md)                 | 勾选框      |
| [combo](./07_combo.md)                       | 下拉框      |
| [combogrid](./08_combogrid.md)               | 下拉表      |
| [combosearch](./09_combosearch.md)           | 自定义搜索框   |
| [datefield](./10_datefield.md)               | 日期输入框    |
| [daterangefield](./11_daterangefield.md)     | 日期范围输入框  |
| [datetimefield](./12_datetimefield.md)       | 日期时间输入框  |
| [fieldslot](./12_fieldslot.md)               | 字段插槽     |
| [filefield](./13_filefield.md)               | 文件上传     |
| [numberfield](./14_numberfield.md)           | 数字输入框    |
| [radiogroup](./15_radiogroup.md)             | 单选输入组    |
| [staticfield](./16_staticfield.md)           | 静态文本字段   |
| [form](./17_form.md)                         | 表单组件     |
| [toolbar](./18_toolbar.md)                   | 工具条      |
| [tree](./19_tree.md)                         | 树        |
| [split](./20_split.md)                       | 分割面板     |
| [alert](./21_alert.md)                       | 提示框      |
| [tabs](./22_tabs.md)                         | 选项卡      |
| [scrollbar](./23_scrollbar.md)               | 滚动容器     |
| [aggrid](./24_aggrid.md)                     | 表格       |
| [aggridplus](./25_aggridplus.md)             | 高级表格     |
| [divider](./26_divider.md)                   | 横向分割条    |
| [divider_formitem](./27_divider_formitem.md) | 表单横向分割条  |
| [iframe](./28_iframe.md)                     | Iframe容器 |
| [slot](./29_slot.md)                         | 插槽       |
| [img](./31_img.md)                           | 图片组件     |
| [yvlist](./34_yvlist.md)                     | 列表组件     |