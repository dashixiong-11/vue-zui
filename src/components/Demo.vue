<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions" @click='toggle'>
      <Icon name='left'/>
      <Icon :style='{opacity: codeVisible? 0:1}' name='i' :size='15'/>
      <Icon name='right'/>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"/>
    </div>

  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Icon from "../lib/Icon.vue";
import 'prismjs';
import 'prismjs/themes/prism.css'
import {
  computed,
  ref
} from 'vue';

const Prism = (window as any).Prism
export default {
  components: {
    Button,
    Icon
  },
  props: {
    component: Object
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
    const toggle = () => codeVisible.value = !codeVisible.value
    const codeVisible = ref(false)
    return {
      Prism,
      html,
      codeVisible,
      toggle
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  margin: 16px 0 32px;
  border: 1px solid $border-color;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
  }

  &-actions {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      transition: all 300ms;
    }
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
  }

  &-code {
    padding: 8px 16px;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      border-radius: 8px;
    }
  }
}
</style>
