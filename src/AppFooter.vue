<template>
  <div class="layout-footer">
    <img :src="footerImage()" alt="Logo" class="mr-2" height="20"/>
    by
    <span class="font-medium ml-2">PrimeVue</span>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  methods: {
    footerImage() {
      return this.$appState.darkTheme ? 'images/logo-white.svg' : 'images/logo-dark.svg';
    }
  },
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    }
  }
}
</script>
