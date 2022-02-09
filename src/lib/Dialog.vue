<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="z-dialog-overlay" @click="onClickOverlay"></div>
      <div class="z-dialog-wrapper">
        <div class="z-dialog">
          <header>
            <slot name="title"/>
            <span @click="close" class="z-dialog-close"></span>
          </header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <z-button v-if='cancel' @click="onClickCancel">Cancel</z-button>
            <z-button v-if='ok' theme='primary' @click="onClickOk">OK</z-button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
<script lang='ts'>
export default {
  name:'ZDialog'
}
</script>
<script setup="props, context" lang="ts">
import { withDefaults } from 'vue';
import ZButton from "./Button.vue";
const emit = defineEmits(['update:visible'])


interface Props {
  visible: boolean,
  closeOnClickOverlay?: boolean,
  ok?: () => void | boolean,
  cancel?: () => void,
}

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  closeOnClickOverlay: true,
  ok: () => {
  },
  cancel: () => {
  }
})

const close = () => {
  emit('update:visible', false)
}
const onClickOverlay = () => {
  if (props.closeOnClickOverlay) {
    close()
  }
}
const onClickOk = () => {
  if (props.ok && props.ok() !== false) {
    close()
  }
}
const onClickCancel = () => {
  props.cancel && props.cancel()
  close()
}
</script>

<style lang="scss">
@import "global";

$radius: 4px;
$border-color: #d9d9d9;


.z-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    color: $main-color;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: $main-color;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }

  }
}
</style>
