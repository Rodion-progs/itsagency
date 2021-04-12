<template>
  <div id="app">
    <AppHeader />
    <AppBreadcrumbs />
    <section class="hero">
      <div class="container">
        <swiper ref="hero__slider" :options="swiperOptions">
          <swiper-slide v-for="(banner, i) in banners" :key="banner.title + i">
            <div class="hero__slide">
              <h2 :is="banner.tag || 'h2'" class="hero__title">
                {{ banner.title }}
              </h2>
              <p class="hero__text">{{ banner.text }}</p>
            </div>
          </swiper-slide>
          <template  slot="pagination">
            <div class="swiper-pagination"></div>
          </template>
          <div class="swiper-button-prev" slot="button-prev">
            <svg
                width="22"
                height="42"
                viewBox="0 0 22 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M1 41L21 21L1 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="swiper-button-next" slot="button-next">
            <svg
                width="22"
                height="42"
                viewBox="0 0 22 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M1 41L21 21L1 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
          </div>
        </swiper>

      </div>
    </section>
    <main class="main">
      <div class="container">
        <div class="row">
          <AppFilter />
          <ProductsList />
        </div>
      </div>
    </main>
    <AppCart v-show="isCartShow"/>
    <DarkLayer v-show="isCartShow" @click="closeCart"/>
    <ProductSort v-show="sorting.show" :style="{top: sorting.position.y + 'px', left: sorting.position.x + 'px'}"/>
    <DarkLayer v-show="sorting.show" @click="sortClose"/>
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "@/components/layouts/AppHeader.vue";
import AppFooter from "@/components/layouts/AppFooter.vue";
import AppBreadcrumbs from "@/components/AppBreadcrumbs.vue";
import AppFilter from "@/components/AppFilter.vue";
import ProductsList from "@/components/ProductsList.vue";
import DarkLayer from "@/components/UI/DatkLayer.vue";
import ProductSort from "@/components/ProductSort.vue";
import AppCart from "@/components/AppCart.vue";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import {mapGetters} from "vuex";

export default {
  components: {
    AppHeader,
    AppBreadcrumbs,
    AppFilter,
    ProductsList,
    Swiper,
    SwiperSlide,
    DarkLayer,
    AppCart,
    AppFooter,
    ProductSort
  },
  directives: {
    swiper: directive,
  },
  computed: mapGetters({
    banners: "getBanners",
    isCartShow: "getIsCartShow",
    sorting: "getSorting",
  }),
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
    };
  },
  methods: {
    closeCart () {
      this.$store.commit("toggleCart", false);
    },
    sortClose () {
      this.$store.commit("hideSorting");
    },
  }
};
</script>
