<template>
  <div class="fella-page">
    <apollo-query
      :query="require('../graphql/Fellas.gql')"
      :variables="{ ids: [Number(id)] }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">An error occured</div>
        <div v-else-if="data" class="result apollo">
          <fella-card :fella="data.fellas[0]" />
        </div>
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </apollo-query>
  </div>
</template>

<script>
import FellaCard from '../components/FellaCard';

export default {
  name: 'Fellas',
  props: ['id'],
  components: {
    FellaCard,
  },
};
</script>

<style scoped lang="scss">
  .fella-page {
    height: calc(100vh - 64px);
    position: relative;
  }
</style>
