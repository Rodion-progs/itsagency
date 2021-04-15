<template>
  <ul class="sort">
    <li
      class="sort__item"
      :class="{ sort__item_active: item.active }"
      v-for="item in getSorting.list"
      @click="changeSorting(item)"
      :key="item.title"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ProductSort",
  computed: mapGetters(["getSorting"]),
  methods: mapMutations(["changeSorting"]),
};
</script>
