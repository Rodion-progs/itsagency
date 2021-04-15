<template>
  <section class="product-list">
    <h2 class="product-list__title">Краски</h2>
    <div class="product-list__controls">
      <span class="product-list__count"
        >{{ products.length }} {{ normalize }}</span
      >
      <button
        class="product-list__control-button product-list__control-button_filter"
        @click="toggleFilter(true)"
      >
        Фильтры
      </button>
      <button
        class="product-list__control-button product-list__control-button_with-icon"
        @click="showSorting"
      >
        {{ activeSorting.title }}
        <svg
          class="product-list__control_icon"
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 7.5L8.4641 3L1.5359 3L5 7.5Z" fill="#202020" />
        </svg>
      </button>
    </div>
    <div class="product-list__row row">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :img="product.img"
        :id="product.id"
        :price="product.price"
      />
    </div>
  </section>
</template>

<script>
import { normalizeEnding } from "@/utils/utils";
import ProductItem from "@/components/ProductItem.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ProductsList",
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters({
      products: "sortingProducts",
      activeSorting: "getSortingActive",
    }),
    normalize() {
      return normalizeEnding(this.products.length, [
        "товар",
        "товара",
        "товаров",
      ]);
    },
  },
  methods: {
    showSorting(e) {
      this.$store.commit("showSorting", { y: e.layerY });
    },
    ...mapMutations(["toggleFilter"]),
  },
};
</script>
