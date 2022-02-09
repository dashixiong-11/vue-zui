<demo>
常规使用
</demo>
<template>
<z-tabs v-model:selected="x">
  <z-tab title="导航1">内容1</z-tab>
  <z-tab title="导航2">内容2</z-tab>
</z-tabs>
</template>

<script lang="ts">
import {
  ref
} from 'vue'
export default {

  setup() {
    const x = ref('导航2')
    return {
      x
    }
  }
}
</script>
