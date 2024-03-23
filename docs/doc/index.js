import path from 'path'
import fs from 'fs'
import {deepTravDir, parseMarkdownFile} from '../utils'

function deepTrav2(linkPrefix, rootDir, relDir) {
    const absDirPath = path.join(rootDir, relDir)
    console.log('scanDir', absDirPath)
    const result = {
        text: '根目录',
        items: []
    }
    result.items = []

    fs.readdirSync(absDirPath).forEach(file => {
        const fullPath = path.join(absDirPath, file);

        if (fs.lstatSync(fullPath).isDirectory()) {
            const subItem = deepTrav2(linkPrefix, rootDir, relDir + "/" + file);
            subItem.text = file
            if (subItem) {
                result.items.push(subItem);
            }

        } else if (fullPath.endsWith('.md')) {
            const item = {text: '', link: linkPrefix + relDir + '/' + file}

            // 去掉后缀
            item.link = item.link.substring(0, item.link.length - 3)
            const meta = parseMarkdownFile(fullPath);
            if (meta) {
                item.text = meta.title;
            }

            result.items.push(item);
        }
    })

    return result
}

const shareResult = deepTrav2('/doc', __dirname, '/share')
shareResult.text = '分享'
const techResult = deepTrav2('/doc', __dirname, '/tech')
techResult.text = '技术'

export default {
    getNav() {
        // 只将一级目录放到导航栏
        return {
            text: '随笔',
            items: [
                //{text: "技术", link: '/doc/tech'},
                // {text: "分享", link: '/doc/share',},
                techResult,
                shareResult,
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
                // {text: "技术1"},
                // {text: "技术2"},
                // {text: "技术3"},
                ...techResult.items,
            ],
            '/doc/share': [
                // {text: "分享1"},
                // {text: "分享2"},
                // {text: "分享3"},
                ...shareResult.items,
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