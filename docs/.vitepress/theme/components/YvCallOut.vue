<template>
  <div class="tip custom-block github-alert callout" :data-callout="type">
    <p class="custom-block-title">
      <component :is="calcIcon"/>
      <span>{{ title }}</span>
    </p>
    <slot/>
    <!--
    <p>有助于用户更顺利达成目标的建议性信息。</p>
    -->
  </div>

</template>
<script>
import {markRaw} from "vue"
import {
  Table,
  Info,
  Cable,
  ComponentIcon,
  Workflow,
  PencilRuler,
  PackageSearch,
  BookA,
  ListIcon,
  ScrollText
} from "lucide-vue-next"

export default {
  props: {
    title: String,
    type: String,
  },
  data() {
    return {
      text: 'Hello World'
    }
  },
  computed: {
    calcColor() {

    },
    calcIcon() {
      if (this.type === 'dbtable') {
        return markRaw(Info)

      } else if (this.type === 'dict') {
        return markRaw(BookA)

      } else if (this.type === 'widget') {
        return markRaw(PackageSearch)

      } else if (this.type === 'rule') {
        return markRaw(PencilRuler)

      } else if (this.type === 'workflow') {
        return markRaw(Workflow)

      } else if (this.type === 'module') {
        return markRaw(ComponentIcon)

      } else if (this.type === 'connector') {
        return markRaw(Cable)

      } else if (this.type === 'example') {
        return markRaw(ListIcon)

      } else if (this.type === 'summary') {
        return markRaw(ScrollText)

      } else if (this.type === 'info') {
        return markRaw(Info)

      } else if (this.type === 'tip') {
        return markRaw(Info)

      }
      console.error('未知的类型:' + this.type)
      return markRaw(Table)
    }
  },
}
</script>
<style>
.tip.custom-block.github-alert.callout {
  border-color: rgba(var(--callout-color), 0.25);
  background-color: rgba(var(--callout-color), 0.1);
}

.custom-block-title {
  white-space: nowrap;
}

.custom-block-title > svg {
  margin-right: 5px;
  display: inline-block;
  line-height: 24px;
  vertical-align: middle;
}

.custom-block-title > span {
  display: inline-block;
  line-height: 24px;
  vertical-align: middle;
}

.callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  --callout-icon: lucide-table;
}

.callout[data-callout="summary"] {
  --callout-color: 0, 191, 188;
  --callout-icon: lucide-table;
}

.callout[data-callout="example"] {
  --callout-color: 120, 82, 238;;
  --callout-icon: lucide-table;
}

.callout[data-callout="dbtable"] {
  --callout-color: 8, 109, 221;
  --callout-icon: lucide-table;
}

.callout[data-callout="dict"] {
  --callout-color: 236, 117, 0;
  --callout-icon: lucide-book-a;
}

.callout[data-callout="widget"] {
  --callout-color: 120, 82, 238;
  --callout-icon: lucide-package-search;
}

.callout[data-callout="rule"] {
  --callout-color: 0, 191, 188;
  --callout-icon: lucide-pencil-ruler;
}

.callout[data-callout="workflow"] {
  --callout-color: 12, 181, 79;
  --callout-icon: lucide-workflow;
}

.callout[data-callout="module"] {
  --callout-color: 224, 172, 0;
  --callout-icon: lucide-component;
}

.callout[data-callout="connector"] {
  --callout-color: 213, 57, 132;
  --callout-icon: lucide-cable;
}
</style>