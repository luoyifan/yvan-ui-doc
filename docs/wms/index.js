import {deepTravDir} from '../utils'

// console.log('deepTravMarkdownFile', __dirname);
const result = deepTravDir('/wms', __dirname, '')
// console.log('Result: ', JSON.stringify(result, null, 2))

export default {
    getNav() {
        // 只将一级目录放到导航栏
        const items = [
            {text: '介绍', link: '/wms/01_index'},
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
            text: 'WMS系统',
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