<template>
  <svg class="icon z-icon" :style="{width:size +'px',height:size + 'px'}">
    <use :xlink:href=" `#icon-${name}`"></use>
  </svg>
</template>
<script lang="ts" setup="props">

type props = {
  name: string,
  size?: number;
}
defineProps<props>()

</script>
<style lang="scss">
</style>