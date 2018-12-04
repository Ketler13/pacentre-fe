<template>
  <apollo-query
    :query="require('../graphql/AllUsersShort.gql')"
  >
    <template slot-scope="{ result: { loading, error, data } }">
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
            Добавить масть
          </v-card-title>

          <v-card-text>
            <v-text-field
              type="text"
              label="Масть: "
              v-model="userData.title"/>

            <v-text-field
              type="text"
              label="Для бакланов: "
              v-model="userData.description"/>

            <v-select
              v-model="userData.createdBy"
              label="Начальник"
              item-text="name"
              item-value="id"
              :items="data ? data.allUsers : []"
            ></v-select>
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
  </apollo-query>
</template>

<script>
import CREATE_SUIT from '../graphql/CreateSuit.gql';
import ALL_SUITS from '../graphql/AllSuits.gql';

export default {
  name: 'CreateSuit',
  data() {
    return {
      dialog: false,
      userData: {
        title: '',
        description: '',
        createdBy: '',
      },
    };
  },
  methods: {
    createUser() {
      const { title, description, createdBy } = this.userData;

      const email = 'petrenko@serg.pol.us';
      const password = 'secret';

      this.resetUserInput();
      this.closeDialog();

      this.$apollo.mutate({
        mutation: CREATE_SUIT,
        variables: {
          title,
          description,
          createdBy,
          email,
          password,
        },
        update(store, { data: { createSuit } }) {
          const data = store.readQuery({ query: ALL_SUITS });
          data.allSuits.push(createSuit);
          store.writeQuery({ query: ALL_SUITS, data });
        },
        optimisticResponse: {
          __typename: 'Mutation',
          createSuit: {
            __typename: 'Suit',
            id: 42666777,
            title,
            description,
          },
        },
      });
    },
    closeDialog() {
      this.dialog = false;
    },
    resetUserInput() {
      this.userData = {
        title: '',
        description: '',
        createdBy: '',
      };
    },
  },
};
</script>

<style lang="css">
</style>
