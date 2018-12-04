<template>
  <div class="users-list">
    <router-link
      v-for="user in users"
      :key="user.id"
      :to="{ name: 'user', params: { id: user.id } }"
    >
      <users-list-item
        class="users-list-item"
        :user="user"/>
    </router-link>
  </div>
</template>

<script>
import UsersListItem from './UsersListItem';

export default {
  name: 'UsersList',
  components: {
    UsersListItem,
  },
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
  .users-list-item {
    width: calc(25% - 20px);
    display: inline-block;
    margin: 10px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  }
</style>
