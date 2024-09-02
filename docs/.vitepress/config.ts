import {defineConfig} from 'vitepress'
import wms from '../wms/index'
import yvanui from '../yvanui/index'
import doc from '../doc/index'
import timeline from "vitepress-markdown-timeline"
import {applyPlugins} from "./theme/plugins";

// refer https://vitepress.dev/reference/site-config for details
// https://github.com/antfu/markdown-it-github-alerts
// https://github.com/markdown-it/markdown-it-container
export default defineConfig({
    lang: 'zh-CN',
    title: '凯乐士开发平台',
    description: '企业级无代码/低代码开发平台',
    head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
    // appearance: 'light',
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
            // wms.getNav(),
            //@ts-ignore
            doc.getNav(),
        ],

        sidebar: {
            'test': [
                {
                    text: 'test', collapsed: false,
                    items: [
                        {text: 'test', link: '/atest/1.md'},
                    ]
                },
            ],

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
            // '/wms/': wms.getSidebar(),
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

            // ...doc.getSidebar(),
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
            level: [1, 3],
            label: '当前页大纲'
        },

        //自定义上下页名
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
    },

    // buildEnd(config) {
    //     // ...
    //     console.log('buildEnd', config)
    // },

    // vite: {
    //     plugins: [
    //         VitePressPreprocessMdPlugin(),
    //     ],
    // },
    vite: {
        build: {
            chunkSizeWarningLimit: 2000
        }
    },

    //markdown配置
    markdown: {
        linkify: false,
        lineNumbers: true,
        // highlight: function (str, lang) {
        //     if (lang === 'beanSchema') {
        //         // 将 str 中的双引号变成 \"
        //         str = str.replace(/"/g, '\\"')
        //             .replace(/\n/g, '\\n')
        //         // let v = JSON.parse(str)
        //         // v = JSON.stringify(v).replace(/"/g, '\\"')
        //
        //         // const ret = `<YvBeanSchema content="${str}" />`
        //         // console.log(ret)
        //         // const ret = `<div a="${str}" />`
        //         const ret = 'a'
        //         return ret
        //     }
        // },
        config: (md) => {
            md.use(timeline);
            applyPlugins(md)
        },
        image: {
            lazyLoading: true
        },
    },
});