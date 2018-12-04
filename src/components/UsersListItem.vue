<template>
  <v-card
    class="users-list-item"
    :class="{ temporary: isTemporary, 'is-me': isMe }">
    <v-card-title primary-title>
      <h3>{{ user.name }}</h3>
    </v-card-title>
    <v-card-text>
      <p class="email">{{ user.email }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'UsersListItem',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isTemporary() {
      return this.user.id === 42666777;
    },
    isMe() {
      return this.$store.state.user.email === this.user.email;
    },
  },
};
</script>

<style scoped lang="scss">
  .temporary {
    opacity: 0.2;
  }

  .is-me {
    h3 {
      color: rgba(45,166,53,1);
    }
  }
</style>
