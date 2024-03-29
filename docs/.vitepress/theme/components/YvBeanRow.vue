<template>
  <ul>
    <li v-for="item in items" :key="item.key">
      {{ item.key }}
      <code>{{ item.valueType }}</code>
      <strong>{{ item.title }}</strong>
      {{ item.desc }}
      <YvBeanRow :items="item.children" v-if="item.children"/>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'YvBeanRow',
  props: ['items'],
}
</script>