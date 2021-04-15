<template>
  <div class="product-item">
    <div class="product-card">
      <img :src="img" :alt="title" class="product-card__img" />
      <p class="product-card__title">{{ title }}</p>
      <div class="product-card__footer">
        <span class="product-card__price">{{ price }} ₽</span>
        <button class="product-card__increase" @click="addToCart(id)">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3.33337V12.6667"
              stroke="#1F2020"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.33301 8H12.6663"
              stroke="#1F2020"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product123",
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch("setCartProduct", id);
    },
  },
};
</script>
