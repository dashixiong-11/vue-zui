<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Toast2Demo"/>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Toast2Demo from './Toast2.demo.vue'

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Toast2Demo
    }
  }
}
</script>
