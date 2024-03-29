<template>
  <div v-if="errorInfo" class="danger custom-block">
    <p class="custom-block-title">JSON错误</p>
    <p>{{ errorInfo }}</p>
    <pre>{{ content }}</pre>
  </div>
  <pre v-else class="myobj">
    {{ text }}
  </pre>
</template>
<script>
export default {
  props: ['content'],
  data() {
    let content
    let errorInfo = undefined
    try {
      content = JSON.parse(this.content)
    } catch (e) {
      errorInfo = e
    }

    return {
      text: this.content,
      errorInfo,
    }
  }
}
</script>