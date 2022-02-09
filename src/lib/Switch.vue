<template>
  <button class="z-switch" @click="toggle" :class="{'z-checked':value}">
    <span></span>
  </button>
</template>
<script lang='ts'>
export default {
  name: 'ZSwitch',
}
</script>
<script lang="ts" setup>
interface Props {
  value: boolean
}

const emit = defineEmits(["update:value"])
const props = defineProps<Props>()


const toggle = () => {
  console.log(props.value);
  emit("update:value", !props.value);
};
</script>

<style lang="scss">
@import "global";

$h: 22px;
$h2: $h - 4px;
.z-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }

  &.z-checked {
    background: $main-color;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.z-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>