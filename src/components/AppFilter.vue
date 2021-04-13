<template>
  <div class="filter">
    <label
      class="filter__item"
      v-for="filter in getFilters"
      :key="filter.title"
    >
      <input
        class="filter__checkbox"
        type="checkbox"
        :checked="filter.selected"
        :value="filter.selected"
        name="filter"
        @change="changeFilter(filter.title)"
      />
      <span class="filter__checkbox_custom"></span>
      {{ filter.title }}
    </label>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getFilters"]),
  methods: {
    changeFilter(payload) {
      this.$store.commit("changeFilter", payload);
    },
  },
};
</script>

<style scoped></style>
