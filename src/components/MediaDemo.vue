<template>
  <div class="grid p-fluid">
    <div class="col-12">
      <div class="card">
        <h5>Carousel</h5>
        <Carousel :circular="false" :numScroll="3" :numVisible="3" :responsiveOptions="carouselResponsiveOptions"
                  :value="products">
          <template #item="product">
            <div class="product-item">
              <div class="product-item-content">
                <div class="mb-3">
                  <img :alt="product.data.name" :src="'images/product/' + product.data.image" class="product-image"/>
                </div>
                <div>
                  <h4 class="mb-1">
                    {{ product.data.name }}
                  </h4>
                  <h6 class="mt-0 mb-3">${{ product.data.price }}</h6>
                  <span :class="'product-badge status-' + product.data.inventoryStatus.toLowerCase()">{{
                      product.data.inventoryStatus
                    }}</span>
                  <div class="car-buttons mt-5">
                    <Button class="p-button p-button-rounded mr-2" icon="pi pi-search" type="button"></Button>
                    <Button class="p-button-success p-button-rounded mr-2" icon="pi pi-star-fill"
                            type="button"></Button>
                    <Button class="p-button-help p-button-rounded" icon="pi pi-cog" type="button"></Button>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <h5>Galleria</h5>
        <Galleria :circular="true" :numVisible="7" :responsiveOptions="galleriaResponsiveOptions" :value="images"
                  containerStyle="max-width: 800px; margin: auto">
          <template #item="slotProps">
            <img :alt="slotProps.item.alt" :src="slotProps.item.itemImageSrc" style="width: 100%; display: block"/>
          </template>
          <template #thumbnail="slotProps">
            <img :alt="slotProps.item.alt" :src="slotProps.item.thumbnailImageSrc" tyle="width: 100%; display: block;"/>
          </template>
        </Galleria>
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <h5>Image</h5>
        <div class="flex justify-content-center">
          <Image alt="Image" preview src="images/galleria/galleria11.jpg" width="250"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "../service/ProductService";
import PhotoService from "../service/PhotoService";

export default {
  data() {
    return {
      products: [],
      images: [],
      galleriaResponsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 5,
        },
        {
          breakpoint: "960px",
          numVisible: 4,
        },
        {
          breakpoint: "768px",
          numVisible: 3,
        },
        {
          breakpoint: "560px",
          numVisible: 1,
        },
      ],
      carouselResponsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "768px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "560px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
  created() {
    this.productService = new ProductService();
    this.photoService = new PhotoService();
  },
  mounted() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });
    this.photoService.getImages().then((images) => {
      this.images = images;
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/demo/badges.scss';
@import '../assets/demo/items.scss';
</style> 
