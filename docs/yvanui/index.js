import {deepTravDir} from '../utils'

// console.log('deepTravMarkdownFile', __dirname);
const result = deepTravDir('/yvanui', __dirname, '')
// console.log('Result: ', JSON.stringify(result, null, 2))

export default {
    getNav() {
        // 只将一级目录放到导航栏
        const items = [
            {text: '介绍', link: '/yvanui/01_index'},
        ]
        result.items.forEach(item => {
            if (item.items) {
                items.push({
                    text: item.text,
                    link: item.items[0].link
                })
            }
        })

        return {
            text: '基础平台',
            items
        }
        // return result;
    },

    /**
     * 获取侧边栏
     * @return {[{link: string, text: string}]}
     */
    getSidebar() {
        return result.items.map(item => {
            if (item.items) {
                return {
                    collapsed: false,
                    ...item,
                }
            }
            return item
        });
    }
}

// export default {
//     text: "基础平台",
//     items: [
//         {
//             text: '介绍',
//             items: [
//                 {text: '基本介绍', link: '/yvanui/basic/'},
//             ]
//         },
//         {
//             text: '🍉指南',
//             items: [
//                 {text: '基础', link: '/yvanui/basic/'},
//                 {text: '功能设计', link: '/yvanui/page/'},
//                 {text: '数据库', link: '/yvanui/database/'},
//                 {text: '字典', link: '/yvanui/dict/'},
//                 {text: '数据窗口', link: '/yvanui/widget/'},
//                 {text: '工具', link: '/yvanui/tool/'},
//             ]
//         },
//         {
//             text: '进阶',
//             items: [
//                 {text: '自定义组件', link: '/yvanui/create_cmp/'},
//                 {text: '规则', link: '/yvanui/rule/'},
//                 {text: '流程', link: '/yvanui/bpmn/'},
//                 {text: '接口', link: '/yvanui/connector/'},
//             ]
//         }
//     ],
// }