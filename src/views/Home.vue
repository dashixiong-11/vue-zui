<template>
  <div style='background: #000;min-height: 100vh'>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <Icon name='flash' :size='120' />
        <div v-html=" '<code>$ yarn add zui</code>' ">
        </div>
        or
        <div v-html=" '<code>$ npm i zui</code>' ">
        </div>
        <div class="actions">
          <router-link to="/doc" class='start'>快速开始</router-link>
        </div>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <Icon name='vue' :size='60' />
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <Icon name='ts' :size='60' />
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <Icon name='light' :size='60' />
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import Icon from "../lib/Icon.vue";

export default {
  components: {
    Topnav,Icon
  },
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #61DAFB;


.features {
  color: #fff;
  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;

    > ul {
      > li {
        width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;

    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text
      }
    }
  }
}

.banner {
  color: #fff;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .flash {
    width: 100px;
  }

  > .actions {
    padding: 8px 0;
    margin-top: 2em;


    > .start {
      background: $color;
      color: #000;
      padding: 10px 32px;
      margin-right: 1em;
      border-radius: $border-radius;
      background: #fff;
      font-size: 13px;
      font-weight: bold;
    }

    a {
      margin: 0 8px;
      color: $color;
      display: inline-block;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
