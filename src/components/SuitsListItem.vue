<template>
  <v-card
    class="suits-list-item"
    :class="{ temporary: isTemporary }">
    <v-card-title primary-title>
      <h3>{{ suit.title }}</h3>
    </v-card-title>
    <v-card-text>
      <p class="description">{{ suit.description }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SuitsListItem',
  props: {
    suit: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isTemporary() {
      return this.suit.id === 42666777;
    },
  },
};
</script>

<style scoped lang="scss">
.temporary {
  opacity: 0.2;
}
</style>
