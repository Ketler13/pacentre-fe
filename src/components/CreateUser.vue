<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <v-btn
      slot="activator"
      color="#546e7a"
      fab
      large
    >
      <v-icon color="white">add</v-icon>
    </v-btn>

    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        Добавить начальника
      </v-card-title>

      <v-card-text>
        <v-text-field
          type="text"
          label="Имя: "
          v-model="userData.name"/>

        <v-text-field
          type="email"
          label="Почта: "
          v-model="userData.email"/>

        <v-text-field
          type="password"
          label="Пароль"
          v-model="userData.password"/>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="closeDialog">
          Та не, стремно
        </v-btn>
        <v-btn
          color="#546e7a"
          @click="createUser"
        >
          Погнали
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import CREATE_USER from '../graphql/CreateUser.gql';
import ALL_USERS from '../graphql/AllUsers.gql';

export default {
  name: 'CreateUser',
  data() {
    return {
      dialog: false,
      userData: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    createUser() {
      const { name, email, password } = this.userData;

      this.resetUserInput();
      this.closeDialog();

      this.$apollo.mutate({
        mutation: CREATE_USER,
        variables: {
          name,
          email,
          password,
        },
        update(store, { data: { createUser } }) {
          const data = store.readQuery({ query: ALL_USERS });
          data.allUsers.push(createUser);
          store.writeQuery({ query: ALL_USERS, data });
        },
        optimisticResponse: {
          __typename: 'Mutation',
          createUser: {
            __typename: 'User',
            id: 42666777,
            name,
            email,
          },
        },
      });
    },
    closeDialog() {
      this.dialog = false;
    },
    resetUserInput() {
      this.userData = {
        name: '',
        email: '',
        password: '',
      };
    },
  },
};
</script>

<style lang="css">
</style>
