<template>
  <div class="z-tabs">
    <div class="z-tabs-nav" ref="container">
      <div class="z-tabs-nav-item" v-for="(t,index) in titles" :ref="el => { if (t===selected) selectedItem = el }" @click="select(t)" :class="{selected: t=== selected}" :key="index">
        {{ t }}
      </div>
      <div class="z-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="z-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>
<script lang='ts'>
export default {
  name:'ZTabs'
}
</script>
<script lang="ts" setup="props, context">
import Tab from './Tab.vue'
import {
  computed,
  ref,
  watchEffect,
  onMounted,
  useSlots,
} from 'vue'

interface Props {
  selected: string
}

const slots = useSlots()

const emit = defineEmits(['update:selected'])
const props = defineProps<Props>()
const selectedItem = ref<any>(null)
const indicator = ref<HTMLDivElement>(null)
const container = ref<HTMLDivElement>(null)

onMounted(() => {
  watchEffect(() => {
    const {
      width
    } = selectedItem.value.getBoundingClientRect()
    indicator.value.style.width = width + 'px'
    const {
      left: left1
    } = container.value.getBoundingClientRect()
    const {
      left: left2
    } = selectedItem.value.getBoundingClientRect()
    const left = left2 - left1
    indicator.value.style.left = left + 'px'
  }, {
    flush: 'post'
  })
})

const defaults = slots.default()
defaults.forEach((tag) => {
  if ((tag as any).type.name !== Tab.name) {
    throw new Error('Tabs 子标签必须是 Tab')
  }
})
const current = computed(() => {
  return defaults.find(tag => tag.props.title === props.selected)
})
const titles = defaults.map((tag) => {
  return tag.props.title
})
const select = (title: string) => {
  emit('update:selected', title)
}
</script>

<style lang="scss">
@import "global";

$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.z-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $main-color;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $main-color;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
