<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <div class='logo-wrapper'>
        <Icon name='flash' :size='40'/>
        <span>ZUI</span>
      </div>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">
          <Icon name='github' :size='30'/>
        </router-link>
      </li>
    </ul>

    <Icon name='menu' :size='40' v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu"/>
  </div>
</template>

<script lang="ts">
import Icon from "../lib/Icon.vue";
import {
  inject,
  Ref
} from "vue";

export default {
  components: {Icon},
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {
      toggleMenu
    };
  },
};
</script>

<style lang="scss" scoped>
$color: #61DAFB;

.topnav {
  color: #fff;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  background: #000;

  > .logo {
    max-width: 6em;
    margin-right: auto;

    > .logo-wrapper {
      display: flex;
      align-items: center;
      font-weight: bold;

      > svg {
        margin-right: .5em;
      }

      > span {
        font-size: 24px;
      }
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;

    }
  }

  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out(black, 0.9);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;
    }

    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
