<template>
  <aside class="cart">
    <div class="cart__header">
      <h3 class="cart__title">Корзина</h3>
      <button class="cart__close" @click="closeCart">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="#1F2020"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#1F2020"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div class="cart__body">
      <div class="cart-list-header">
        <span class="cart-list-header__count"
          >{{ products.length }} {{ normalize }}</span
        >
        <button class="cart-list-header__reset" @click="deleteAllCart">
          очистить список
        </button>
      </div>
      <div class="cart-list">
        <div
          class="cart-item"
          :class="{ 'cart-item_disabled': product.deleted }"
          v-for="product in products"
          :key="product.id"
        >
          <img
            :src="require('/src/assets/img/products/product_2.jpg')"
            alt=""
            class="cart-item__img"
          />
          <div class="cart-item__info">
            <p class="cart-item__title">{{ product.title }}</p>
            <span class="cart-item__price">{{ product.price }} ₽</span>
          </div>
          <div class="cart-item__control">
            <button
              class="cart-item__control-button"
              @click="decreaseCount(product.id)"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.3335 8H12.6668"
                  stroke="black"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <span class="cart-item__count">{{ product.count }}</span>
            <button
              class="cart-item__control-button"
              @click="addToCart(product.id)"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3.33325V12.6666"
                  stroke="black"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.3335 8H12.6668"
                  stroke="black"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <button
            v-if="!product.deleted"
            class="cart-item__delete"
            @click="deleteOneProduct(product.id)"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2">
                <path
                  d="M18 6L6 18"
                  stroke="#1F2020"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#1F2020"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
          <button
            v-else
            class="cart-item__delete"
            @click="recoverProduct(product.id)"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 1L21 5L17 9"
                stroke="black"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 11V9C3 7.93913 3.42143 6.92172 4.17157 6.17157C4.92172 5.42143 5.93913 5 7 5H21"
                stroke="black"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 23L3 19L7 15"
                stroke="black"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 13V15C21 16.0609 20.5786 17.0783 19.8284 17.8284C19.0783 18.5786 18.0609 19 17 19H3"
                stroke="black"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="cart__footer">
      <div class="cart__total">
        <span class="cart__total-text">Итого</span>
        <span class="cart__total-price">{{ totalPrice }}₽</span>
      </div>
      <button class="cart__order button button-primary">Оформить заказ</button>
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { normalizeEnding } from "@/utils/utils";
export default {
  name: "AppCart",
  computed: {
    normalize() {
      return normalizeEnding(this.products.length, [
        "товар",
        "товара",
        "товаров",
      ]);
    },
    totalPrice() {
      console.log(this.products);
      return this.products
        .filter((product) => !product.deleted)
        .reduce((acc, item) => (acc += item.price * item.count), 0)
        .toLocaleString();
    },
    ...mapGetters({
      products: "getProductsInCart",
      isCart: "getIsCartShow",
    }),
  },
  methods: {
    ...mapMutations(["deleteAllCart", "deleteOneProduct"]),
    closeCart() {
      this.$store.commit("toggleCart", false);
    },
    addToCart(id) {
      if (this.products.find((item) => item.id === id).deleted) return;
      this.$store.commit("increaseCountInCart", id);
    },
    decreaseCount(id) {
      if (this.products.find((item) => item.id === id).deleted) return;
      this.$store.commit("decreaseCountInCart", id);
    },
    recoverProduct(id) {
      this.$store.commit("recoverProduct", id)
    },
  },
};
</script>

<style scoped></style>
