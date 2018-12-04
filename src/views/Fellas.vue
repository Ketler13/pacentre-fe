<template>
  <div class="fellas-page">
    <apollo-query
      :query="require('../graphql/AllFellas.gql')"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">An error occured</div>
        <div v-else-if="data" class="result apollo">
          <fellas-list :fellas="data.allFellas"/>
        </div>
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </apollo-query>
    <div class="create-fella-container">
      <create-fella />
    </div>
  </div>
</template>

<script>
import FellasList from '../components/FellasList';
import CreateFella from '../components/CreateFella';

export default {
  name: 'Fellas',
  components: {
    FellasList,
    CreateFella,
  },
};
</script>

<style scoped lang="scss">
  .fellas-page {
    height: calc(100vh - 64px);
    position: relative;
  }

  .create-fella-container {
    position: absolute;
    bottom: 30px;
    left: 30px;
  }
</style>
