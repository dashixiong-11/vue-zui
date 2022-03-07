<demo>
常规使用
</demo>
<template>
  <z-button @click='toggle'> show toast</z-button>
  <z-toast position='middle' :autoClose='5' :onClose='close' v-model:visible='bool'>
    <template v-slot:message>
      这是一条弹窗
    </template>
  </z-toast>
</template>

<script lang="ts">
import {ref} from 'vue'

export default {
  setup() {
    const bool = ref(false)
    const toggle = () => {
      bool.value = true
    }
    const close = () => {
      console.log('toast close')
    }
    return {toggle, bool, close}
  }
}
</script>
