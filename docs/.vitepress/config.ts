import {defineConfig} from 'vitepress'
import wms from '../wms/index'
import yvanui from '../yvanui/index'
import timeline from "vitepress-markdown-timeline"

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
    lang: 'zh-CN',
    title: 'YvanUI',
    description: '企业级无代码框架',
    head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
    appearance: 'dark',
    // postRender(context) {
    //     // ...
    //     console.log('postRender', context)
    // },
    // transformHead(context) {
    //     // ...
    //     console.log('transformHead', context)
    // },
    // transformPageData(pageData) {
    //     console.log('transformPageData', pageData)
    // },
    // transformHtml(code, id, context) {
    //     // ...
    //     console.log('transformHtml', code, id, context)
    // },
    themeConfig: {
        nav: [
            yvanui.getNav(),
            wms.getNav(),
            {
                text: "关于",
                items: [
                    {text: '作者', link: '/author'},
                ],
            }
        ],

        sidebar: {
            '/yvanui/': yvanui.getSidebar(),
            // '/yvanui/': [
            //     {
            //         text: 'basic', collapsed: false,
            //         items: [
            //             {text: 'basic', link: '/yvanui/basic/'},
            //         ]
            //     },
            //     {
            //         text: 'cmp', collapsed: false,
            //         items: [
            //             {text: 'button', link: '/yvanui/cmp/button'},
            //             {text: 'aggrid', link: '/yvanui/cmp/aggrid'},
            //         ]
            //     }
            // ],

            // 当用户位于 `config` 目录时，会显示此侧边栏
            '/wms/': wms.getSidebar(),
            // '/wms/': [
            //     {
            //         text: 'inbound', collapsed: false,
            //         items: [
            //             {text: 'button', link: '/wms/inbound/'},
            //         ]
            //     },
            //     {
            //         text: 'outbound', collapsed: false,
            //         items: [
            //             {text: 'button', link: '/wms/outbound/'},
            //         ]
            //     },
            //     {
            //         text: 'inner', collapsed: false,
            //         items: [
            //             {text: 'button', link: '/wms/inner/'},
            //         ]
            //     }
            // ]
        },

        //页脚
        footer: {
            copyright: 'Copyright © 2024 备案号：<a href="https://beian.miit.gov.cn/">鄂ICP备18029062号</a>',
        },

        //本地搜索
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                },
                            },
                        },
                    },
                },
            },
        },

        //手机端深浅模式文字修改
        darkModeSwitchLabel: '深浅模式',

        //侧边栏文字更改(移动端)
        sidebarMenuLabel: '目录',

        //返回顶部文字修改(移动端)
        returnToTopLabel: '返回顶部',

        //大纲显示2-3级标题
        outline: {
            level: [2, 3],
            label: '当前页大纲'
        },

        //自定义上下页名
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
    },

    //markdown配置
    markdown: {
        //行号显示
        lineNumbers: true,

        //时间线
        config: (md) => {
            md.use(timeline);
        },

        // 开启图片懒加载
        image: {
            lazyLoading: true
        },
    },
});