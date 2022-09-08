<template>
  <div id="layout-config" :class="containerClass">
    <a id="layout-config-button" class="layout-config-button" href="#" @click="toggleConfigurator">
      <i class="pi pi-cog"></i>
    </a>
    <Button :style="{'z-index': 1}" class="p-button-danger layout-config-close p-button-rounded p-button-text"
            icon="pi pi-times" @click="hideConfigurator"></Button>

    <div class="layout-config-content">
      <h5 class="mt-0">Component Scale</h5>
      <div class="config-scale">
        <Button :disabled="scale === scales[0]" class="p-button-text" icon="pi pi-minus" @click="decrementScale()"/>
        <i v-for="s of scales" :key="s" :class="{'scale-active': s === scale}" class="pi pi-circle-on"/>
        <Button :disabled="scale === scales[scales.length - 1]" class="p-button-text" icon="pi pi-plus"
                @click="incrementScale()"/>
      </div>

      <h5>Input Style</h5>
      <div class="p-formgroup-inline">
        <div class="field-radiobutton">
          <RadioButton id="input_outlined" :modelValue="$primevue.config.inputStyle" name="inputstyle" value="outlined"
                       @change="changeInputStyle('outlined')"/>
          <label for="input_outlined">Outlined</label>
        </div>
        <div class="field-radiobutton">
          <RadioButton id="input_filled" :modelValue="$primevue.config.inputStyle" name="inputstyle" value="filled"
                       @change="changeInputStyle('filled')"/>
          <label for="input_filled">Filled</label>
        </div>
      </div>

      <h5>Ripple Effect</h5>
      <InputSwitch :modelValue="rippleActive" @update:modelValue="changeRipple"/>

      <h5>Menu Type</h5>
      <div class="p-formgroup-inline">
        <div class="field-radiobutton">
          <RadioButton id="static" v-model="d_layoutMode" name="layoutMode" value="static"
                       @change="changeLayout($event, 'static')"/>
          <label for="static">Static</label>
        </div>
        <div class="field-radiobutton">
          <RadioButton id="overlay" v-model="d_layoutMode" name="layoutMode" value="overlay"
                       @change="changeLayout($event, 'overlay')"/>
          <label for="overlay">Overlay</label>
        </div>
      </div>

      <h5>Themes</h5>
      <h6 class="mt-0">Bootstrap</h6>
      <div class="grid free-themes">
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'bootstrap4-light-blue', false)">
            <img alt="Bootstrap Light Blue" class="block" src="images/themes/bootstrap4-light-blue.svg"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'bootstrap4-light-purple', false)">
            <img alt="Bootstrap Light Blue" class="block" src="images/themes/bootstrap4-light-purple.svg"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'bootstrap4-dark-blue', true)">
            <img alt="Bootstrap Dark Blue" class="block" src="images/themes/bootstrap4-dark-blue.svg"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'bootstrap4-dark-purple', true)">
            <img alt="Bootstrap Dark Blue" class="block" src="images/themes/bootstrap4-dark-purple.svg"/>
          </button>
        </div>
      </div>

      <h6>Material Design</h6>
      <div class="grid free-themes">
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'md-light-indigo', false)">
            <img alt="Material Light Indigo" class="block" src="images/themes/md-light-indigo.svg"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'md-light-deeppurple', false)">
            <img alt="Material Light Deep Purple" class="block" src="images/themes/md-light-deeppurple.svg"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'md-dark-indigo', true)">
            <img alt="Material Dark Indigo" class="block" src="images/themes/md-dark-indigo.svg"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'md-dark-deeppurple', true)">
            <img alt="Material Dark Deep Purple" class="block" src="images/themes/md-dark-deeppurple.svg"/>
          </button>
        </div>
      </div>

      <h6>Material Design Compact</h6>
      <div class="grid free-themes">
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'mdc-light-indigo', false)">
            <img alt="Material Compact Light Indigo" class="block" src="images/themes/md-light-indigo.svg"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'mdc-light-deeppurple', false)">
            <img alt="Material Compact Deep Purple" class="block" src="images/themes/md-light-deeppurple.svg"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'mdc-dark-indigo', true)">
            <img alt="Material Compact Dark Indigo" class="block" src="images/themes/md-dark-indigo.svg"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'mdc-dark-deeppurple', true)">
            <img alt="Material Compact Dark Deep Purple" class="block" src="images/themes/md-dark-deeppurple.svg"/>
          </button>
        </div>
      </div>

      <h6>Tailwind</h6>
      <div class="grid free-themes">
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'tailwind-light', false)">
            <img alt="Tailwind Light" class="block" src="images/themes/tailwind-light.png"/>
          </button>
        </div>
      </div>

      <h6>Fluent UI</h6>
      <div class="grid free-themes">
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'fluent-light', false)">
            <img alt="Fluent Light" class="block" src="images/themes/fluent-light.png"/>
          </button>
        </div>
      </div>

      <h6>PrimeOne Design - 2022</h6>
      <div class="grid free-themes">
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'lara-light-indigo', false)">
            <img alt="Lara Light Indigo" class="block" src="images/themes/lara-light-indigo.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'lara-light-blue', false)">
            <img alt="Lara Light Blue" class="block" src="images/themes/lara-light-blue.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'lara-light-purple', false)">
            <img alt="Lara Light Purple" class="block" src="images/themes/lara-light-purple.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'lara-light-teal', false)">
            <img alt="Lara Light Teal" class="block" src="images/themes/lara-light-teal.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'lara-dark-indigo', true)">
            <img alt="Lara Dark Indigo" class="block" src="images/themes/lara-dark-indigo.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'lara-dark-blue', true)">
            <img alt="Lara Dark Blue" class="block" src="images/themes/lara-dark-blue.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'lara-dark-purple', true)">
            <img alt="Lara Dark Purple" class="block" src="images/themes/lara-dark-purple.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'lara-dark-teal', true)">
            <img alt="Lara Dark Teal" class="block" src="images/themes/lara-dark-teal.png"/>
          </button>
        </div>
      </div>

      <h6>PrimeOne Design - 2021</h6>
      <div class="grid free-themes">
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'saga-blue', false)">
            <img alt="Saga Blue" class="block" src="images/themes/saga-blue.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'saga-green', false)">
            <img alt="Saga Green" class="block" src="images/themes/saga-green.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'saga-orange', false)">
            <img alt="Saga Orange" class="block" src="images/themes/saga-orange.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'saga-purple', false)">
            <img alt="Saga Purple" class="block" src="images/themes/saga-purple.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'vela-blue', true)">
            <img alt="Vela Blue" class="block" src="images/themes/vela-blue.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'vela-green', true)">
            <img alt="Vela Green" class="block" src="images/themes/vela-green.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'vela-orange', true)">
            <img alt="Vela Orange" class="block" src="images/themes/vela-orange.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'vela-purple', true)">
            <img alt="Vela Purple" class="block" src="images/themes/vela-purple.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'arya-blue', true)">
            <img alt="Arya Blue" class="block" src="images/themes/arya-blue.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'arya-green', true)">
            <img alt="Arya Green" class="block" src="images/themes/arya-green.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'arya-orange', true)">
            <img alt="Arya Orange" class="block" src="images/themes/arya-orange.png"/>
          </button>
        </div>
        <div class="col-3 text-center">
          <button class="p-link" type="button" @click="changeTheme($event, 'arya-purple', true)">
            <img alt="Arya Purple" class="block" src="images/themes/arya-purple.png"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from './AppEventBus';

export default {
  props: {
    layoutMode: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      active: false,
      d_layoutMode: this.layoutMode,
      scale: 14,
      scales: [12, 13, 14, 15, 16]
    }
  },
  outsideClickListener: null,
  themeChangeListener: null,
  watch: {
    $route() {
      if (this.active) {
        this.active = false;
        this.unbindOutsideClickListener();
      }
    },
    layoutMode(newValue) {
      this.d_layoutMode = newValue;
    }
  },
  beforeUnmount() {
    EventBus.off('theme-change', this.themeChangeListener);
  },
  mounted() {
    this.themeChangeListener = () => {
      this.applyScale();
    };

    EventBus.on('theme-change', this.themeChangeListener);
  },
  methods: {
    toggleConfigurator(event) {
      this.active = !this.active;
      event.preventDefault();

      if (this.active)
        this.bindOutsideClickListener();
      else
        this.unbindOutsideClickListener();
    },
    hideConfigurator(event) {
      this.active = false;
      this.unbindOutsideClickListener();
      event.preventDefault();
    },
    changeInputStyle(value) {
      this.$primevue.config.inputStyle = value;
    },
    changeRipple(value) {
      this.$primevue.config.ripple = value;
    },
    changeLayout(event, layoutMode) {
      this.$emit('layout-change', layoutMode);
      event.preventDefault();
    },
    bindOutsideClickListener() {
      if (!this.outsideClickListener) {
        this.outsideClickListener = (event) => {
          if (this.active && this.isOutsideClicked(event)) {
            this.active = false;
          }
        };
        document.addEventListener('click', this.outsideClickListener);
      }
    },
    unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener('click', this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    isOutsideClicked(event) {
      return !(this.$el.isSameNode(event.target) || this.$el.contains(event.target));
    },
    decrementScale() {
      this.scale--;
      this.applyScale();
    },
    incrementScale() {
      this.scale++;
      this.applyScale();
    },
    applyScale() {
      document.documentElement.style.fontSize = this.scale + 'px';
    },
    changeTheme(event, theme, dark) {
      EventBus.emit('theme-change', {theme: theme, dark: dark});
      event.preventDefault();
    }
  },
  computed: {
    containerClass() {
      return ['layout-config', {'layout-config-active': this.active}];
    },
    rippleActive() {
      return this.$primevue.config.ripple;
    },
    inputStyle() {
      return this.$appState.inputStyle;
    }
  }
}
</script>
