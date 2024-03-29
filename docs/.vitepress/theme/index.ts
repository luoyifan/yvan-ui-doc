import {h, onMounted, watch, nextTick} from 'vue'
import {useData, useRoute} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import "vitepress-markdown-timeline/dist/theme/index.css"
import YvBeanSchema from './components/YvBeanSchema.vue'
import YvCallOut from './components/YvCallOut.vue'

console.log('DefaultTheme', DefaultTheme)

export default {
    extends: DefaultTheme,

    enhanceApp({app}) {
        // 注册全局组件
        app.component('YvCallOut', YvCallOut)
        app.component('YvBeanSchema', YvBeanSchema)
    },

    Layout: () => {
        const props: Record<string, any> = {}
        // 获取 frontmatter
        const {frontmatter} = useData()

        /* 添加自定义 class */
        if (frontmatter.value?.layoutClass) {
            console.log(' frontmatter.value.layoutClass', frontmatter.value.layoutClass)
            props.class = frontmatter.value.layoutClass
        }

        // console.log('props', props)
        return h(DefaultTheme.Layout, props)
    },

    setup() {
        const route = useRoute();

        // Get frontmatter and route
        const {frontmatter} = useData();

        // console.log('setup')
    }
}