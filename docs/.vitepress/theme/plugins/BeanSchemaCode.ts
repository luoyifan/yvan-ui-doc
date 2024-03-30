/**
 * 解析 Obsidian 的 CallOut 语法
 * > [!CallOutType] CallOutTitle
 * > CallOutContent1
 * > CallOutContent2
 * > CallOutContent3
 *
 * 解析至成
 *
 * <YvCallOut type="CallOutType" title="CallOutTitle">
 *     <slot />
 * </YvCallOut>
 */
function BeanSchemaCode(md) {
    const fenceDefault = md.renderer.rules.fence
    md.renderer.rules.fence = (...args) => {
        const [tokens, idx] = args
        const token = tokens[idx]

        if (token.info === 'beanSchema') {
            const rawCode = token.content
            // 将双引号变成 &quot;
            let str = rawCode.replace(/"/g, '&quot;')
            return `<YvBeanSchema content="${str}" />`
        } else if (token.info === 'dataview') {
            return ''
        } else if (token.info === 'bpmn') {
            return ''
        } else if (token.info === 'ignore') {
            return ''
        }
        return fenceDefault(...args)
    }
}

export default BeanSchemaCode