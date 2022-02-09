<script setup='props' lang="ts">
import {ref} from 'vue'
import Switch from '../lib/Switch.vue'
const bool = ref(false)
</script>

<template>
  <Switch v-model:value="bool" />
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
