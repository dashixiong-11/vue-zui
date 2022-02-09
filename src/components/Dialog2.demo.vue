<demo>
一键打开 Dialog
</demo>
<template>
  <div>
    <z-button @click="showDialog">打开对话框</z-button>
  </div>
</template>

<script lang="ts">
import {
  openDialog
} from "../lib/index";
import {h} from 'vue'

export default {
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      showDialog
    }
  }
}
</script>
