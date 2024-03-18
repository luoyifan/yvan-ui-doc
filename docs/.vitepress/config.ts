import {defineConfig} from 'vitepress'
import wms from '../wms/index'
import yvanui from '../yvanui/index'
import doc from '../doc/index'
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
            doc.getNav(),
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
            ...doc.getSidebar(),
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

    // buildEnd(config) {
    //     // ...
    //     console.log('buildEnd', config)
    // },

    // vite: {
    //     plugins: [
    //         VitePressPreprocessMdPlugin(),
    //     ],
    // },

    //markdown配置
    markdown: {
        linkify: false,
        lineNumbers: true,
        config: (md) => {
            md.use(timeline);
            md.use((md) => {
                let defaultRender = md.renderer.rules.text;
                let inLineRender = md.renderer.rules.html_inline;

                md.renderer.rules.text = (tokens, idx, options, env, self) => {
                    const token = tokens[idx];

                    // obsidian 图片格式转换
                    // ![[Pasted image 20240315152420.png]]
                    // 转换为
                    // ![](./_assets/Pasted%20image%2020240315152420.png)
                    if (token.type === 'text' && token.content.indexOf('![[') >= 0 && token.content.indexOf(']]') >= 0) {
                        const item = token.content;
                        const imgName = item.substring(3, item.length - 2)
                            .replace(/ /g, '%20')
                        // console.log('imgName =', imgName)

                        tokens[idx].content = `<img src="./_assets/${imgName}" alt="" loading="lazy">`
                        return inLineRender(tokens, idx, options, env, self);
                    }

                    return defaultRender(tokens, idx, options, env, self);
                }
            })
        },
        image: {
            lazyLoading: true
        },
    },
});
//
// function VitePressPreprocessMdPlugin() {
//     return {
//         name: 'vitepress:preprocess-md',
//         transform(code, id) {
//             if (id.endsWith('.md')) {
//
//                 // code = code.replace(/<img/g, '<img loading="lazy"')
//
//                 // 将图片格式做转换
//                 // ![[Pasted image 20240315152420.png]]
//                 // 转换为
//                 // ![](./_assets/Pasted%20image%2020240315152420.png)
//                 code.match(/!\[\[([\s\S]*?)\]\]/g).forEach((item) => {
//                     const imgName = item.substring(3, item.length - 2)
//                         .replace(/ /g, '%20')
//                     console.log('imgName =', item.substring(3, item.length - 2))
//
//                     if (imgName.indexOf('/') >= 0) {
//                         // 图片中包含 / 符号, 转换为 ![](图片地址) 格式
//                         // code = code.replace(item, `![](${imgName})`);
//                         return;
//                     }
//
//                     // 转换为 URLEncode 格式
//                     // code = code.replace(item, `![](_assets/${imgName})`);
//
//                     //<img src="./_assets/Pasted%20image%2020240315152420.png" alt="" loading="lazy">
//                     // code = code.replace(item, `<img src="./_assets/${imgName}" alt="" loading="lazy">`);
//                 });
//                 console.log('transform', id, code)
//                 return {code, id}
//             }
//             return null
//         }
//     }
// }