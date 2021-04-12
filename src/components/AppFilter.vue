<template>
  <div class="filter">
    <label class="filter__item" v-for="item in filters" :key="item">
      <input class="filter__checkbox" type="checkbox" />
      <span class="filter__checkbox_custom"></span>
      {{ item }}
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: [
        "Новинки",
        "Есть в наличии",
        "Контрактные",
        "Эксклюзивные",
        "Распродажа",
      ],
    };
  },
};
</script>

<style scoped></style>
