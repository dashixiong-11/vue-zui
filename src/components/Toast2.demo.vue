<demo>
设置position
</demo>
<template>
  <z-button @click='toggleTop'> top</z-button>
  <z-button @click='toggleMiddle'> middle</z-button>
  <z-button @click='toggleBottom'> bottom</z-button>
</template>

<script lang="ts">
import {showToast} from '../lib/showToast'

export default {
  setup() {
    const toggleTop = () => {
      showToast({
        message: '顶部弹框!',
        position: 'top',
        onClose: () => {
          console.log('toast close')
        }
      })
    }
    const toggleMiddle = () => {
      showToast({
        message: '中间弹框!',
        position: 'middle',
        onClose: () => {
          console.log('toast close')
        }
      })
    }
    const toggleBottom = () => {
      showToast({
        message: '底部弹框!',
        position: 'bottom',
        onClose: () => {
          console.log('toast close')
        }
      })
    }
    return {
      toggleTop,
      toggleMiddle,
      toggleBottom
    }
  }
}
</script>
