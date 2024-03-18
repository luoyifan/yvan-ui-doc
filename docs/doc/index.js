import {deepTravDir} from '../utils'

// console.log('deepTravMarkdownFile', __dirname);
const result = deepTravDir('/doc', __dirname, '')
// console.log('Result: ', JSON.stringify(result, null, 2))

export default {
    getNav() {
        // 只将一级目录放到导航栏
        return {
            text: '随笔',
            items: [
                {text: "技术", link: '/doc/tech'},
                {text: "分享", link: '/doc/share',},
                {text: "关于", link: '/author'},
            ]
        }
    },

    /**
     * 获取侧边栏
     */
    getSidebar() {
        return {
            '/doc/tech': [
                {text: "技术1"},
                {text: "技术2"},
                {text: "技术3"},
            ],
            '/doc/share': [
                {text: "分享1"},
                {text: "分享2"},
                {text: "分享3"},
            ],
        }
    }
}

// export default {
//     text: "WMS系统",
//     items: [
//         {text: '介绍', link: '/wms/introduce'},
//         {text: '基础资料', link: '/wms/bas/'},
//         {text: '入库', link: '/wms/inbound/'},
//         {text: '出库', link: '/wms/outbound/'},
//         {text: '库内作业', link: '/wms/inner/'},
//         {text: '多穿库', link: '/wms/shuttle/'},
//         {text: '立体库', link: '/wms/piler/'},
//         {text: 'AGV', link: '/wms/agv/'},
//     ],
// }