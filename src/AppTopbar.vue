<template>
  <div class="layout-topbar">
    <router-link class="layout-topbar-logo" to="/">
      <img :src="topbarImage()" alt="Logo"/>
      <span>SAKAI</span>
    </router-link>
    <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
      <i class="pi pi-bars"></i>
    </button>

    <button v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein',
			leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}"
            class="p-link layout-topbar-menu-button layout-topbar-button">
      <i class="pi pi-ellipsis-v"></i>
    </button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-calendar"></i>
          <span>Events</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-cog"></i>
          <span>Settings</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button" @click="toggle">
          <i class="pi pi-user"></i>
          <span>Profile</span>
        </button>
        <Menu ref="menu" :model="items" :popup="true" />
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      items: [
        {
          label: 'Account',
          items: [
            {label: 'Options', icon: 'pi pi-fw pi-cog', to: '/options'},
            {
              label: 'Sign Out',
              icon: 'pi pi-fw pi-power-off',
              command: () => {
                this.logout()
              }}
          ]
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    onMenuToggle(event) {
      this.$emit('menu-toggle', event);
    },
    onTopbarMenuToggle(event) {
      this.$emit('topbar-menu-toggle', event);
    },
    topbarImage() {
      return this.$appState.darkTheme ? 'images/logo-white.svg' : 'images/logo-dark.svg';
    },
    toggle(event) {
      this.$refs.menu.toggle(event);
    }
  },
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    }
  }
}
</script>
