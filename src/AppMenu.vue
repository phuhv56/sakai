<template>
  <div class="layout-menu-container">
    <AppSubmenu :items="model" :root="true" class="layout-menu" @keydown="onKeyDown" @menuitem-click="onMenuItemClick"/>
    <a class="block mt-3" href="https://www.primefaces.org/primeblocks-vue">
      <img :src="bannerImage()" alt="primeblocks" class="w-full"/>
    </a>
  </div>
</template>

<script>
import AppSubmenu from './AppSubmenu';

export default {
  props: {
    model: Array
  },
  methods: {
    onMenuItemClick(event) {
      this.$emit('menuitem-click', event);
    },
    onKeyDown(event) {
      const nodeElement = event.target;
      if (event.code === 'Enter' || event.code === 'Space') {
        nodeElement.click();
        event.preventDefault();
      }
    },
    bannerImage() {
      return this.$appState.darkTheme ? 'images/banner-primeblocks-dark.png' : 'images/banner-primeblocks.png';
    }
  },
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    }
  },
  components: {
    'AppSubmenu': AppSubmenu
  }
}
</script>
