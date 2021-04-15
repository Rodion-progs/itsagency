<template>
 <div
    class="filter"
    @mousedown="startDrag($event)"
    @mouseup="stopDrag($event)"
  >
    <div class="filter-stick"></div>
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
  computed: mapGetters(["getFilters", "getWindowWidth"]),
  data() {
    return {
      currentPosition: 0,
    };
  },
  methods: {
    changeFilter(payload) {
      this.$store.commit("changeFilter", payload);
    },
    startDrag(e) {
      this.currentPosition = e.clientY;
    },
    stopDrag(e) {
      if (e.clientY - this.currentPosition > 50) {
        this.$store.commit("toggleFilter", false);
      }
    },
  },
};
</script>
