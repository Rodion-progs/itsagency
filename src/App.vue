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
          <transition name="filter">
            <AppFilter
                v-show="(isFilter && width <= 1200) || width > 1200"
            />
          </transition>
          <ProductsList />
        </div>
      </div>
    </main>
    <transition name="cart">
      <AppCart v-show="isCartShow"/>
    </transition>
    <DarkLayer v-show="isCartShow" @click="closeCart"/>
    <ProductSort v-show="sorting.show" :style="{top: sorting.position.y + 'px', left: sorting.position.x + 'px'}"/>
    <DarkLayer v-show="sorting.show" @click="sortClose"/>
    <DarkLayer v-show="isFilter && width <= 1200" @click="closeFilter"/>
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
    ProductSort,
  },
  mounted() {
    window.addEventListener("resize", this.updateWidth);
    this.$store.commit("changeWindowWidth", window.innerWidth);
  },
  directives: {
    swiper: directive,
  },
  computed: mapGetters({
    banners: "getBanners",
    isCartShow: "getIsCartShow",
    sorting: "getSorting",
    filter: "getFilters",
    width: "getWindowWidth",
    isFilter: "getIsFilter",
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
          prevEl: ".swiper-button-prev",
        },
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
    updateWidth() {
      this.$store.commit("changeWindowWidth", window.innerWidth);
    },
    closeFilter() {
      this.$store.commit("toggleFilter", false);
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateWidth);
  },
};
</script>
<style lang="scss" scoped>
.filter-enter-active {
  transition: all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.filter-leave-active {
  transition: all .3s ease-in-out;
}
.filter-enter, .filter-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.cart-enter-active {
  transition: all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.cart-leave-active {
  transition: all .3s ease-in-out;
}
.cart-enter, .cart-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
