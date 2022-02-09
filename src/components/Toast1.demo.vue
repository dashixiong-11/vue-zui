<demo>
常规使用
</demo>
<template>
  <z-button @click='toggle'> show toast</z-button>
</template>

<script lang="ts">
import {showToast} from '../lib/showToast'

export default {
  setup() {
    const toggle = () => {
      showToast({
        message: '这是一条弹框!',
        onClose: () => {
          console.log('toast close')
        }
      })
    }
    return {toggle}
  }
}
</script>
