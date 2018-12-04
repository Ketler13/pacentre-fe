<template>
  <v-card
    class="fellas-list-item"
    :class="{ temporary: isTemporary }">
    <v-card-title primary-title>
      <h3>
        {{ fella.name }} {{ fella.surname }}
      </h3>
    </v-card-title>
    <v-card-text>
      <p>Погоняло: {{ fella.nick }}</p>
      <p>Масть: {{ fella.suit.title }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'FellasListItem',
  props: {
    fella: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isTemporary() {
      return this.fella.id === 42666777;
    },
  },
};
</script>

<style scoped lang="scss">
.temporary {
  opacity: 0.2;
}
</style>
