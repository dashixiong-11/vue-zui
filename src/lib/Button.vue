<template>
  <button class="z-button" :border="border" :class="classes" :disabled="disabled">
    <!--    <span v-if="loading" class="z-loadingIndicator"></span>-->
    <slot/>
  </button>
</template>
<script lang='ts'>
export default {
  name:'ZButton'
}
</script>
<script lang="ts" setup>
import {computed, withDefaults} from "vue";

interface Props {
  theme?: 'button' | 'text' | 'primary';
  size?: 'normal' | 'big' | 'small';
  border?: boolean;
  loading: boolean;
  disabled: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  theme: "button",
  size: "normal",
  disabled: false,
  border: false,
  loading: false
})
const {theme, size, border} = props;
const classes = computed(() => {
  return {
    [`z-theme-${theme}`]: theme,
    [`z-size-${size}`]: size,
    [`z-border`]: border
  };
});
</script>
<style lang="scss">
@import "global";

$disabled-color: #c1c1c1;

$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;

.z-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border: 1px solid $main-color;
  color: $main-color;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  background: none;

  &[disabled] {
    cursor: not-allowed;
    color: $disabled-color;
    border: 1px solid $disabled-color;
  }

  &-border {
    border-radius: 16px;
  }

  & + & {
    margin-left: 8px;
  }


  > .z-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: z-spin 1s infinite linear;
  }
}

.z-theme-primary {
  background: $main-color;
  color: #fff;

  &[disabled] {
    background: #f7f7f7;
    border: 1px solid $disabled-color;
  }
}

.z-theme-text {
  border: none;
  color: $main-color;

  &[disabled] {
    border: none;
    color: $disabled-color;
  }
}

.z-size-big {
  font-size: 24px;
  height: 48px;
  padding: 0 16px;

  &[border] {
    border-radius: 24px;
  }
}

.z-size-small {
  font-size: 12px;
  height: 20px;
  padding: 0 4px;

  &[border] {
    border-radius: 10px;
  }
}

@keyframes z-spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>