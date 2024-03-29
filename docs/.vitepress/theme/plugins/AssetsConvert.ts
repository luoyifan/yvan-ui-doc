function AssetsConvert(md) {
    let defaultRender = md.renderer.rules.text;
    let inLineRender = md.renderer.rules.html_inline;

    md.renderer.rules.text = (tokens, idx, options, env, self) => {
        const token = tokens[idx];

        if (token.content.indexOf('![[') >= 0 && token.content.indexOf(']]') >= 0) {
            // obsidian 图片格式转换
            // ![[Pasted image 20240315152420.png]]
            // 转换为
            // ![](./_assets/Pasted%20image%2020240315152420.png)

            const item = token.content;
            const imgName = item.substring(3, item.length - 2)
                .replace(/ /g, '%20')
            // console.log('imgName =', imgName)

            tokens[idx].content = `<img src="./_assets/${imgName}" alt="" loading="lazy">`
            return inLineRender(tokens, idx, options, env, self);

        } else if (token.content.indexOf('[[') >= 0 && token.content.indexOf(']]') >= 0) {
            // obsidian 外链转换
            // [[yvanui/01_base/02_bean_schema]]
            // 转换为
            // [02_bean_schema](/yvanui/01_base/02_bean_schema)
            // <a href="/yvanui/01_base/02_bean_schema.html">333</a>

            const item = token.content;
            const link = item.substring(2, item.length - 2)
            const linkArr = link.split('/')
            const text = linkArr[linkArr.length - 1]
            tokens[idx].content = `<a href="/${link}.html">${text}</a>`

            return inLineRender(tokens, idx, options, env, self);
        }

        return defaultRender(tokens, idx, options, env, self);
    }
}

export default AssetsConvert