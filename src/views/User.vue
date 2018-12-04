<template>
  <div class="user-page">
    <apollo-query
      :query="require('../graphql/Users.gql')"
      :variables="{ ids: [Number(id)] }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">An error occured</div>
        <div v-else-if="data" class="result apollo">
          <user-card :user="data.users[0]" />
        </div>
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </apollo-query>
  </div>
</template>

<script>
import UserCard from '../components/UserCard';

export default {
  name: 'Users',
  props: ['id'],
  components: {
    UserCard,
  },
};
</script>

<style scoped lang="scss">
  .user {
    height: calc(100vh - 64px);
    position: relative;
  }
</style>
