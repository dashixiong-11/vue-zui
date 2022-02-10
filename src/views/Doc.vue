<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav"/>
    <div class="content">
      <main>
        <router-view/>
      </main>
      <!--      <aside v-if="menuVisible">-->
      <aside>
        <div>
          <span @click=" onClick('doc')">文档</span>
          <ol class='install-ol' v-if=" selectedItem === 'doc'">
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">开始使用</router-link>
            </li>
          </ol>
        </div>
        <div>
          <span @click=" onClick('com')">组件列表</span>
          <ol class='com-ol' v-if=" selectedItem === 'com'">
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/toast">Toast 组件</router-link>
            </li>
          </ol>
        </div>
      </aside>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {
  Ref,
  ref,
  inject
} from "vue";

export default {
  components: {
    Topnav
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const selectedItem = ref('doc')
    const onClick = value => {
      selectedItem.value = selectedItem.value === value ? '' : value
    }
    return {menuVisible, selectedItem, onClick};
  },
};
</script>

<style lang="scss" scoped>
$aside-index: 10;
$font-color: #fff;
$border-color: rgba(255, 255, 255, 0.1);

.layout {
  display: flex;
  flex-direction: column;
  background: #000;
  min-height: 100vh;

  main {
    background: #19191959;
  }

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-right: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    color: #fff;
  }
}

aside {
  width: 150px;
  padding: 100px 0 0;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  z-index: $aside-index;
  color: #fff;

  > div {
    line-height: 50px;

    span {
      margin-bottom: 4px;
      padding: 0 16px;
      font-weight: bold;
      cursor: default;
      user-select: none;
    }
  }

  ol {
    > li {
      > a {
        font-size: 14px;
        display: block;
        padding: 2px 22px;
        text-decoration: none;
      }

      .router-link-active {
        //background: white;
      }
    }
  }
}

main {
  overflow: auto;
}
</style>
