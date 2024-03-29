<template>
  <div class="yv-callout">
    <span>
      title: {{ title }},
      type: {{ type }}
    </span>
    <slot/>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    type: String,
  },
  data() {
    return {
      text: 'Hello World'
    }
  }
}
</script>