<template>
  <div class="suits-page">
    <apollo-query
      :query="require('../graphql/AllSuits.gql')"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">An error occured</div>
        <div v-else-if="data" class="result apollo">
          <suits-list :suits="data.allSuits"/>
        </div>
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </apollo-query>
    <div class="create-suit-container">
      <create-suit />
    </div>
  </div>
</template>

<script>
import SuitsList from '@/components/SuitsList';
import CreateSuit from '@/components/CreateSuit';

export default {
  name: 'Suits',
  components: {
    SuitsList,
    CreateSuit,
  },
};
</script>

<style scoped lang="scss">
  .suits-page {
    height: calc(100vh - 64px);
    position: relative;
  }

  .create-suit-container {
    position: absolute;
    bottom: 30px;
    left: 30px;
  }
</style>
