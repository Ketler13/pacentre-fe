<template>
  <div class="users-page">
    <apollo-query
      :query="require('../graphql/AllUsers.gql')"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">An error occured</div>
        <div v-else-if="data" class="result apollo">
          <users-list :users="data.allUsers"/>
        </div>
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </apollo-query>
    <div class="create-user-container">
      <create-user />
    </div>
  </div>
</template>

<script>
import UsersList from '../components/UsersList';
import CreateUser from '../components/CreateUser';

export default {
  name: 'Users',
  components: {
    UsersList,
    CreateUser,
  },
};
</script>

<style scoped lang="scss">
  .users-page {
    height: calc(100vh - 64px);
    position: relative;
  }

  .create-user-container {
    position: absolute;
    bottom: 30px;
    left: 30px;
  }
</style>
