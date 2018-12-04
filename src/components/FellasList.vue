<template>
  <div class="fellas-list">
    <router-link
      v-for="fella in fellas"
      :key="fella.id"
      :to="{ name: 'fella', params: { id: fella.id } }"
    >
      <fellas-list-item
        class="fellas-list-item"
        :fella="fella"/>
    </router-link>
  </div>
</template>

<script>
import FellasListItem from './FellasListItem';

export default {
  name: 'FellasList',
  components: {
    FellasListItem,
  },
  props: {
    fellas: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="css">
  .fellas-list-item {
    width: calc(25% - 20px);
    display: inline-block;
    margin: 10px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  }
</style>
