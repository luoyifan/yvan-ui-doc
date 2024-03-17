import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

/**
 * 解析 markDown 文件，提取出 meta 元数据信息
 */
export function parseMarkdownFile(file) {
    console.log('parseMarkdownFile -> ' + file)
    // 获取文件内容
    let content = fs.readFileSync(file, 'utf-8');

    // 提取第一个 --- 至 --- 的内容, 并且用 yaml 格式解析他
    const r = content.match(/---([\s\S]*?)---/);
    if (!r) {
        console.error('解析失败', file)
        return;
    }
    const result = yaml.load(r[1])

    // 将图片格式做转换
    // ![[Pasted image 20240315152420.png]]
    // 转换为
    // ![](./_assets/Pasted%20image%2020240315152420.png)
    // content.match(/!\[\[([\s\S]*?)\]\]/g).forEach((item) => {
    //     const imgName = item.substring(4, item.length - 2);
    //
    //     if (imgName.indexOf('/') >= 0) {
    //         // 图片中包含 / 符号, 转换为 ![](图片地址) 格式
    //         content = content.replace(item, `![](${imgName})`);
    //         return;
    //     }
    //
    //     // 转换为 URLEncode 格式
    //     const imgNameNew = imgName.replace(/ /g, '%20');
    //     content = content.replace(item, `![](_assets/${imgNameNew})`);
    // });

    return result
}

/**
 * 深度扫描文件夹,获取所有 md 文件的相对路径
 * @param rootDir 根目录, 比如 C:\Projects\yvan-ui-doc\docs\wms
 * @param relDir 深度遍历相对路径, 比如 '/agv'
 */
export function deepTravDir(linkPrefix, rootDir, relDir) {
    const absDirPath = path.join(rootDir, relDir)
    // console.log('scanDir', dir)
    const result = {}

    // 查找有没有 01_index.md
    const absIndexFile = path.join(absDirPath, '/01_index.md')
    if (fs.existsSync(absIndexFile)) {
        const meta = parseMarkdownFile(absIndexFile);
        if (meta) {
            result.text = meta.title;
        } else {
            result.text = relDir
        }
        result.items = [
            {text: '介绍', link: linkPrefix + relDir + '/01_index'}
        ]
        // console.log('push', result)
    } else {
        return
    }

    fs.readdirSync(absDirPath).forEach(file => {
        const fullPath = path.join(absDirPath, file);

        if (fs.lstatSync(fullPath).isDirectory()) {
            const subItem = deepTravDir(linkPrefix, rootDir, "/" + file);
            if (subItem) {
                result.items.push(subItem);
            }

        } else if (fullPath.endsWith('.md') && ('' + file) !== '01_index.md') {
            // 还有其他文件，增加到 items 中
            const item = {text: '', link: linkPrefix + relDir + '/' + file}

            // 去掉后缀
            item.link = item.link.substring(0, item.link.length - 3)
            const meta = parseMarkdownFile(fullPath);
            if (meta) {
                item.text = meta.title;
            }

            result.items.push(item);
        }
    });

    // 如果没有子文件夹，就不需要 items
    if (result.items.length < 0) {
        delete result.items
    }

    // 把文件排在前面，有子项目的排在后面
    result.items.sort((a, b) => {
        if (a.items && !b.items) {
            return 1;
        }
        if (!a.items && b.items) {
            return -1;
        }
        return 0;
    })

    return result
}