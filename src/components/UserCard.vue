<template>
  <div class="user-card">
    <div class="wrapper">
      <h3>
        {{ user.name }}
      </h3>
      <p>Почта: {{ user.email }}</p>
      <div class="user-fellas">
        <p>Пацантрэ от начальника: <p/>
        <p
          v-for="fella in user.fellas"
          :key="fella.id"
        >
          <router-link :to="{ name: 'fella', params: { id: fella.id} }">
            {{ fella.nick }} - {{ fella.name }} {{ fella.surname }}
          </router-link>
        </p>
      </div>
      <div class="user-suits">
        <p>Масти от начальника: <p/>
        <v-chip
          v-for="suit in user.suits"
          :key="suit.id"
        >{{ suit.title }}</v-chip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="css">
</style>
