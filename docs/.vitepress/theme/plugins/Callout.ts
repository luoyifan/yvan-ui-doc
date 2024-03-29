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
function CallOutFn(md) {
    const RE = new RegExp(`^\\[\\!(\\w+)\\]([^\\n\\r]*)`, 'i')

    md.core.ruler.after('block', 'github-alerts', (state) => {
        const tokens = state.tokens
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i].type === 'blockquote_open') {
                const open = tokens[i]
                const startIndex = i
                while (tokens[i]?.type !== 'blockquote_close' && i <= tokens.length)
                    i += 1
                const close = tokens[i]
                const endIndex = i
                const firstContent = tokens.slice(startIndex, endIndex + 1).find(token => token.type === 'inline')
                if (!firstContent)
                    continue
                const match = firstContent.content.match(RE)
                if (!match)
                    continue
                const type = match[1].toLowerCase()
                const title = match[2].trim() || capitalize(type)
                firstContent.content = firstContent.content.slice(match[0].length).trimStart()
                open.type = 'alert_open'
                open.tag = 'YvCallOut'
                open.meta = {
                    title,
                    type,
                }
                close.type = 'alert_close'
                close.tag = 'YvCallOut'
            }
        }
    })
    md.renderer.rules.alert_open = function (tokens, idx) {
        const {title, type} = tokens[idx].meta
        console.log('alertOpen', title, type)
        return `<YvCallOut type="${type}" title="${title}">`
    }
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export default CallOutFn