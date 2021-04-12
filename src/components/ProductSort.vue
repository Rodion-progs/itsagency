<template>
  <ul class="sort">
    <li
      class="sort__item"
      :class="{ 'sort__item_active': item.active }"
      v-for="item in list"
      :key="item.title">{{ item.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "ProductSort",
  data() {
    return {
      list: [
        {
          title: "Сначала дорогие",
          active: true,
        },
        {
          title: "Сначала недорогие",
          active: false,
        },
        {
          title: "Сначала популярные",
          active: false,
        },
        {
          title: "Сначала новые",
          active: false,
        },
      ],
    };
  },
  }
</script>

<style scoped>

</style>
