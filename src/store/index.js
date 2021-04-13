import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCart: false,
    isDarkLayer: false,
    sorting: {
      sortBy: "price",
      sortDir: 'DESC',
      show: false,
      position: {
        x: 0,
        y: 0
      },
    },
    banners: [
      {
        title: "Краски",
        text:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        tag: "h1",
      },
      {
        title: "Краски",
        text:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
      },
      {
        title: "Краски",
        text:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
      },
      {
        title: "Краски",
        text:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
      },
      {
        title: "Краски",
        text:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
      },
    ],
    products: [
      {
        id: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        popularity: 100,
        img: require("../assets/img/products/product_1.jpg"),
        tags: [
          "Новинки",
          "Есть в наличии",
          "Эксклюзивные",
          "Контрактный",
        ],
      },
      {
        id: 2,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        img: require("../assets/img/products/product_2.jpg"),
        tags: [
          "Новинки",
          "Есть в наличии",
          "Контрактный",
        ],
      },
      {
        id: 3,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        popularity: 60,
        img: require("../assets/img/products/product_3.jpg"),
        tags: [
          "Новинки",
          "Есть в наличии",
          "Эксклюзивные",
        ],
      },
      {
        id: 4,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        popularity: 10,
        img: require("../assets/img/products/product_4.jpg"),
        tags: [
          "Новинки",
          "Есть в наличии",
          "Эксклюзивные",
          "Контрактный",
        ],
      },
      {
        id: 5,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 3400,
        img: require("../assets/img/products/product_5.jpg"),
        tags: [
          "Новинки",
          "Есть в наличии",
          "Контрактный",
        ],
      },
      {
        id: 6,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        img: require("../assets/img/products/product_6.jpg"),
        tags: [
          "Есть в наличии",
          "Контрактный",
        ],
      },
      {
        id: 7,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        img: require("../assets/img/products/product_7.jpg"),
        tags: [
          "Новинки",
          "Эксклюзивные",
          "Контрактный",
        ],
      },
      {
        id: 8,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        img: require("../assets/img/products/product_7.jpg"),
        tags: [
          "Новинки",
          "Есть в наличии",
          "Контрактный",
          "Распродажа",
        ],
      },
      {
        id: 9,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        img: require("../assets/img/products/product_8.jpg"),
        tags: [
          "Новинки",
          "Есть в наличии",
          "Эксклюзивные",
        ],
      },
      {
        id: 10,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 3400,
        img: require("../assets/img/products/product_9.jpg"),
        tags: [
          "Новинки",
          "Есть в наличии",
          "Контрактный",
          "Распродажа",
        ],
      },
      {
        id: 11,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        img: require("../assets/img/products/product_6.jpg"),
        tags: [
          "Новинки",
          "Есть в наличии",
          "Эксклюзивные",
          "Контрактный",
        ],
      },
      {
        id: 12,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        img: require("../assets/img/products/product_7.jpg"),
        tags: [
          "Новинки",
          "Есть в наличии",
          "Эксклюзивные",
        ],
      },
      {
        id: 13,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        img: require("../assets/img/products/product_7.jpg"),
        tags: [
          "Новинки",
          "Эксклюзивные",
        ],
      },
      {
        id: 14,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        img: require("../assets/img/products/product_8.jpg"),
        tags: [
          "Новинки",
          "Есть в наличии",
          "Эксклюзивные",
          "Контрактный",
        ],
      },
      {
        id: 15,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 3400,
        img: require("../assets/img/products/product_9.jpg"),
        tags: [
          "Новинки",
          "Есть в наличии",
          "Контрактный",
          "Распродажа",
        ],
      },
    ],
    cartProducts: [],
    filteredProduct: [],
    filters: [
      {
        title: "Новинки",
        selected: false,
      },
      {
        title: "Есть в наличии",
        selected: false,
      },
      {
        title: "Контрактный",
        selected: false,
      },
      {
        title: "Эксклюзивные",
        selected: true,
      },
      {
        title: "Распродажа",
        selected: false,
      },
    ],
  },
  mutations: {
    increaseCountInCart(state, id) {
      // Object.assign(state.cartProducts.find(item => item.id === id), state.cartProducts.find(item => item.id === id).count++)
      state.cartProducts.find(item => item.id === id).count += 1;
    },
    decreaseCountInCart(state, id) {
      // Object.assign(state.cartProducts.find(item => item.id === id), state.cartProducts.find(item => item.id === id).count++)
      if (state.cartProducts.find(item => item.id === id).count <= 1) return
      state.cartProducts.find(item => item.id === id).count -= 1;
    },
    pushInCart(state, payload) {
      console.log(state)
      state.cartProducts.push(payload);
    },
    toggleCart(state, payload) {
      state.isCart = payload;
    },
    showSorting(state, payload) {
      state.sorting.show = true;
      state.sorting.position.x = payload.x;
      state.sorting.position.y = payload.y;
    },
    hideSorting(state) {
      state.sorting.show = false;
    },
    deleteAllCart(state) {
      state.cartProducts = [];
    },
    deleteOneProduct(state, id) {
      state.cartProducts = state.cartProducts.filter((item) => item.id !== id);
    },
    changeFilter(state, payload) {
      state.filters.find((item) => item.title === payload).selected =
        !state.filters.find((item) => item.title === payload).selected;
    },
  },
  actions: {
    setCartProduct({getters, commit}, id) {
      const alreadyInCart = getters.getProductsInCart.some((item) => item.id === id);
      if (alreadyInCart) {
        commit("increaseCountInCart", id);
      } else {
        const item = getters.getProducts.find((item) => item.id === id);
        item.count = 1;
        commit("pushInCart", Object.assign({}, item));
      }
      console.log(getters.getProductsInCart);
    },
  },
  getters: {
    getBanners: state => state.banners,
    getProducts: state => state.products,
    getProductsInCart: state => state.cartProducts,
    getIsDarkLayer: state => state.isDarkLayer,
    getIsCartShow: state => state.isCart,
    getSorting: state => state.sorting,
    getFilters: state => state.filters,
    getActiveFilters: state => {
     return  state.filters.filter((item) => item.selected);
    },
    getFilteredProducts: (state, getters) => {
      if (!getters.getActiveFilters.length) return state.products;
      const products = getters.getActiveFilters.map((item) =>
        state.products.filter((product) => product.tags.includes(item.title))
      );
      if (state.sorting.sortBy === 'price') {
        const sortingBy = state.sorting.sortBy;
        const sortDir = state.sorting.sortDir === 'DESC' ? -1 : 1;
        return products[0].sort((a, b) => sortDir * (a[sortingBy] - b[sortingBy]));
      } else if (state.sorting.sortBy === 'popularity') {
        return products[0].sort((a, b) => a.popularity - b.popularity)
      } else {
        return products[0].sort((a, b) => a - b)
      }
    },
  },
});
