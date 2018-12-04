<template>
  <div class="suits-list">
    <suits-list-item
      v-for="suit in suits"
      class="suits-list-item"
      :key="suit.id"
      :suit="suit"
    />
  </div>
</template>

<script>
import SuitsListItem from './SuitsListItem';

export default {
  name: 'SuitsList',
  components: {
    SuitsListItem,
  },
  props: {
    suits: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
  .suits-list-item {
    width: calc(25% - 20px);
    display: inline-block;
    margin: 10px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  }
</style>
