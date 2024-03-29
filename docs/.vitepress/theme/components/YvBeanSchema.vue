<template>
  <div v-if="errorInfo" class="danger custom-block">
    <p class="custom-block-title">JSON错误</p>
    <p>{{ errorInfo }}</p>
    <pre>{{ content }}</pre>
  </div>
  <YvBeanRow v-else :items="calcList"/>
</template>
<script>
import YvBeanRow from './YvBeanRow.vue'

export default {
  components: {YvBeanRow},
  props: ['content'],
  data() {
    let parameters
    let errorInfo = undefined
    try {
      parameters = JSON.parse(this.content)
    } catch (e) {
      errorInfo = e
    }

    return {
      parameters: parameters,
      errorInfo,
    }
  },
  computed: {
    calcList() {
      /**
       *     "properties": {
       *       "reqCode": {
       *         "title": "请求编号",
       *         "valueType": "string",
       *         "desc": "请求编号，每个请求都要一个唯一编号，同一个请求重复提交，使用同一编号"
       *       },
       *       ...
       *     }
       *     =>
       *     <ul class="has-list-bullet">
       *     - reqCode `string` **请求编号, 请求编号，每个请求都要一个唯一编号，同一个请求重复提交，使用同一编号**
       */
      function buildProp(parentItems, parentSchema) {
        if (parentSchema.valueType === 'object') {
          Object.keys(parentSchema.properties).forEach((key, idx) => {
            const value = parentSchema.properties[key]
            if (value.valueType === 'object') {
              const item = {
                key,
                valueType: value.valueType,
                title: value.title,
                desc: value.desc,
                children: []
              }
              buildProp(item.children, value)
              parentItems.push(item)

            } else if (value.valueType === 'array') {
              const item = {
                key,
                valueType: value.valueType,
                title: value.title,
                desc: value.desc,
                children: []
              }
              buildProp(item.children, value.items)
              parentItems.push(item)

            } else {
              // sb.push(`${'    '.repeat(level)}- ${key} \`${value.valueType}\` **${value.title}. ${value.desc}**`)
              const item = {
                key,
                valueType: value.valueType,
                title: value.title,
                desc: value.desc,
              }
              parentItems.push(item)
            }
          })
        } else if (parentSchema.valueType === 'array') {
          const item = {
            key: '',
            valueType: parentSchema.valueType,
            title: parentSchema.title,
            desc: parentSchema.desc,
            children: []
          }
          buildProp(item.children, parentSchema.items)
        } else {
          // sb.push(`${'    '.repeat(level)}- ${sec.title} \`${sec.valueType}\` **${sec.desc}**`)
        }
      }

      const items = []
      buildProp(items, this.parameters.root)
      return items
    }
  }
}
</script>