<template>
  <div class="fella-card">
    <div class="wrapper">
      <h3>
        {{ fella.name }} {{ fella.surname }}
      </h3>
      <p>Погоняло: {{ fella.nick }}</p>
      <p>Масть: {{ fella.suit.title }} ({{ fella.suit.description }})</p>
      <p>Начальник:
        <router-link :to="{ name: 'user', params: { id: fella.user.id } }">
          {{ fella.user.name }}
        </router-link>
      </p>
      <p>Обитает: {{ fella.region }}</p>
      <p>Музло: {{ fella.music }}</p>
      <p>Тачка: {{ fella.car }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fellaCard',
  props: {
    fella: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="css">
</style>
