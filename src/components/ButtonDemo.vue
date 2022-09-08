<template>
  <div class="grid">
    <div class="col-12 md:col-6">
      <div class="card">
        <h5>Default</h5>
        <Button class="mr-2 mb-2" label="Submit"></Button>
        <Button :disabled="true" class="mr-2 mb-2" label="Disabled"></Button>
        <Button class="p-button-link mr-2 mb-2" label="Link"/>
      </div>

      <div class="card">
        <h5>Severities</h5>
        <Button class="mr-2 mb-2" label="Primary"/>
        <Button class="p-button-secondary mr-2 mb-2" label="Secondary"/>
        <Button class="p-button-success mr-2 mb-2" label="Success"/>
        <Button class="p-button-info mr-2 mb-2" label="Info"/>
        <Button class="p-button-warning mr-2 mb-2" label="Warning"/>
        <Button class="p-button-danger mr-2 mb-2" label="Danger"/>
      </div>

      <div class="card">
        <h5>Text</h5>
        <Button class="p-button-text mr-2 mb-2" label="Primary"/>
        <Button class="p-button-secondary p-button-text mr-2 mb-2" label="Secondary"/>
        <Button class="p-button-success p-button-text mr-2 mb-2" label="Success"/>
        <Button class="p-button-info p-button-text mr-2 mb-2" label="Info"/>
        <Button class="p-button-warning p-button-text mr-2 mb-2" label="Warning"/>
        <Button class="p-button-help p-button-text mr-2 mb-2" label="Help"/>
        <Button class="p-button-danger p-button-text mr-2 mb-2" label="Danger"/>
        <Button class="p-button-plain p-button-text mr-2 mb-2" label="Plain"/>
      </div>

      <div class="card">
        <h5>Outlined</h5>
        <Button class="p-button-outlined mr-2 mb-2" label="Primary"/>
        <Button class="p-button-outlined p-button-secondary mr-2 mb-2" label="Secondary"/>
        <Button class="p-button-outlined p-button-success mr-2 mb-2" label="Success"/>
        <Button class="p-button-outlined p-button-info mr-2 mb-2" label="Info"/>
        <Button class="p-button-outlined p-button-warning mr-2 mb-2" label="Warning"/>
        <Button class="p-button-outlined p-button-help mr-2 mb-2" label="Help"/>
        <Button class="p-button-outlined p-button-danger mr-2 mb-2" label="Danger"/>
      </div>

      <div class="card">
        <h5>Button Group</h5>
        <span class="p-buttonset">
					<Button icon="pi pi-check" label="Save"/>
					<Button icon="pi pi-trash" label="Delete"/>
					<Button icon="pi pi-times" label="Cancel"/>
				</span>
      </div>

      <div class="card">
        <h5>SplitButton</h5>
        <SplitButton :model="items" class="p-button-secondary mr-2 mb-2" icon="pi pi-check" label="Save"></SplitButton>
        <SplitButton :model="items" class="p-button-success mr-2 mb-2" icon="pi pi-check" label="Save"></SplitButton>
        <SplitButton :model="items" class="p-button-info mr-2 mb-2" icon="pi pi-check" label="Save"></SplitButton>
        <SplitButton :model="items" class="p-button-warning mr-2 mb-2" icon="pi pi-check" label="Save"></SplitButton>
        <SplitButton :model="items" class="p-button-danger mr-2 mb-2" icon="pi pi-check" label="Save"></SplitButton>
      </div>

      <div class="card">
        <h5>Templating</h5>
        <Button class="mr-2 mb-2 px-3" type="button">
          <img alt="logo" src="images/primevue-logo.svg" style="width: 1.5rem"/>
        </Button>
        <Button class="p-button-outlined p-button-success mr-2 mb-2" type="button">
          <img alt="logo" src="images/primevue-logo.svg" style="width: 1.5rem"/>
          <span class="ml-2 text-bold">PrimeVue</span>
        </Button>
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="card">
        <h5>Icons</h5>
        <Button class="mr-2 mb-2" icon="pi pi-star-fill"></Button>
        <Button class="mr-2 mb-2" icon="pi pi-bookmark" label="Bookmark"></Button>
        <Button class="mr-2 mb-2" icon="pi pi-bookmark" iconPos="right" label="Bookmark"></Button>
      </div>

      <div class="card">
        <h5>Raised</h5>
        <Button class="p-button-raised mr-2 mb-2" label="Primary"/>
        <Button class="p-button-raised p-button-secondary mr-2 mb-2" label="Secondary"/>
        <Button class="p-button-raised p-button-success mr-2 mb-2" label="Success"/>
        <Button class="p-button-raised p-button-info mr-2 mb-2" label="Info"/>
        <Button class="p-button-raised p-button-warning mr-2 mb-2" label="Warning"/>
        <Button class="p-button-raised p-button-danger mr-2 mb-2" label="Danger"/>
      </div>

      <div class="card">
        <h5>Rounded</h5>
        <Button class="p-button-rounded mr-2 mb-2" label="Primary"/>
        <Button class="p-button-rounded p-button-secondary mr-2 mb-2" label="Secondary"/>
        <Button class="p-button-rounded p-button-success mr-2 mb-2" label="Success"/>
        <Button class="p-button-rounded p-button-info mr-2 mb-2" label="Info"/>
        <Button class="p-button-rounded p-button-warning mr-2 mb-2" label="Warning"/>
        <Button class="p-button-rounded p-button-danger mr-2 mb-2" label="Danger"/>
      </div>

      <div class="card">
        <h5>Rounded Icons</h5>
        <Button class="p-button-rounded mr-2 mb-2" icon="pi pi-star-fill"/>
        <Button class="p-button-rounded p-button-secondary mr-2 mb-2" icon="pi pi-bookmark"/>
        <Button class="p-button-rounded p-button-success mr-2 mb-2" icon="pi pi-check"/>
        <Button class="p-button-rounded p-button-info mr-2 mb-2" icon="pi pi-search"/>
        <Button class="p-button-rounded p-button-warning mr-2 mb-2" icon="pi pi-user"/>
        <Button class="p-button-rounded p-button-danger mr-2 mb-2" icon="pi pi-sign-out"/>
      </div>

      <div class="card">
        <h5>Rounded Text</h5>
        <Button class="p-button-rounded p-button-text mr-2 mb-2" icon="pi pi-check"/>
        <Button class="p-button-rounded p-button-secondary p-button-text mr-2 mb-2" icon="pi pi-bookmark"/>
        <Button class="p-button-rounded p-button-success p-button-text mr-2 mb-2" icon="pi pi-search"/>
        <Button class="p-button-rounded p-button-info p-button-text mr-2 mb-2" icon="pi pi-user"/>
        <Button class="p-button-rounded p-button-warning p-button-text mr-2 mb-2" icon="pi pi-bell"/>
        <Button class="p-button-rounded p-button-help p-button-text mr-2 mb-2" icon="pi pi-heart"/>
        <Button class="p-button-rounded p-button-danger p-button-text mr-2 mb-2" icon="pi pi-times"/>
        <Button class="p-button-rounded p-button-plain p-button-text mr-2 mb-2" icon="pi pi-filter"/>
      </div>

      <div class="card">
        <h5>Rounded Outlined</h5>
        <Button class="p-button-rounded p-button-outlined mr-2 mb-2" icon="pi pi-check"/>
        <Button class="p-button-rounded p-button-secondary p-button-outlined mr-2 mb-2" icon="pi pi-bookmark"/>
        <Button class="p-button-rounded p-button-success p-button-outlined mr-2 mb-2" icon="pi pi-search"/>
        <Button class="p-button-rounded p-button-info p-button-outlined mr-2 mb-2" icon="pi pi-user"/>
        <Button class="p-button-rounded p-button-warning p-button-outlined mr-2 mb-2" icon="pi pi-bell"/>
        <Button class="p-button-rounded p-button-help p-button-outlined mr-2 mb-2" icon="pi pi-heart"/>
        <Button class="p-button-rounded p-button-danger p-button-outlined mr-2 mb-2" icon="pi pi-times"/>
      </div>

      <div class="card">
        <h5>Loading</h5>
        <Button :loading="loading[0]" class="mr-2 mb-2" icon="pi pi-search" label="Search" type="button"
                @click="load(0)"/>
        <Button :loading="loading[1]" class="mr-2 mb-2" icon="pi pi-search" iconPos="right" label="Search" type="button"
                @click="load(1)"/>
        <Button :loading="loading[2]" class="mr-2 mb-2" icon="pi pi-search" type="button" @click="load(2)"/>
        <Button :loading="loading[3]" class="mr-2 mb-2" label="Search" type="button" @click="load(3)"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: 'Update',
          icon: 'pi pi-refresh'
        },
        {
          label: 'Delete',
          icon: 'pi pi-times'
        },
        {
          separator: true
        },
        {
          label: 'Home',
          icon: 'pi pi-home'
        },
      ],
      loading: [false, false, false]
    }
  },
  methods: {
    load(index) {
      this.loading[index] = true;
      setTimeout(() => this.loading[index] = false, 1000);
    }
  }
}
</script>
