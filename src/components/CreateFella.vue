<template>
  <apollo-query
    :query="require('../graphql/AllSuits.gql')"
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
            Добавить пацантрэ
          </v-card-title>

          <v-card-text>
            <v-text-field
              type="text"
              label="Имя: "
              v-model="userData.name"/>

            <v-text-field
              type="text"
              label="Фамилия: "
              v-model="userData.surname"/>

            <v-text-field
              type="text"
              label="Погоняло"
              v-model="userData.nick"/>

            <v-select
              v-model="userData.suitId"
              label="Масть"
              item-text="title"
              item-value="id"
              :items="data ? data.allSuits : []"
            ></v-select>

            <v-text-field
              type="text"
              label="Обитает"
              v-model="userData.region"/>

            <v-text-field
              type="text"
              label="Музло"
              v-model="userData.music"/>

            <v-text-field
              type="text"
              label="Тачка "
              v-model="userData.car"/>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="closeDialog">
              Та не, стремно
            </v-btn>
            <v-btn
              color="#546e7a"
              @click="createFella"
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
import CREATE_FELLA from '../graphql/CreateFella.gql';
import ALL_FELLAS from '../graphql/AllFellas.gql';

export default {
  name: 'CreateFella',
  data() {
    return {
      dialog: false,
      userData: {
        name: '',
        surname: '',
        nick: '',
        car: '',
        region: '',
        music: '',
        suitId: '',
      },
    };
  },
  methods: {
    createFella() {
      const fella = {
        ...this.userData,
        addedBy: this.$store.state.user.id,
      };

      console.log(fella);

      this.resetUserInput();
      this.closeDialog();

      this.$apollo.mutate({
        mutation: CREATE_FELLA,
        variables: {
          ...fella
        },
        update(store, { data: { createFella } }) {
          const data = store.readQuery({ query: ALL_FELLAS });
          data.allFellas.push(createFella);
          store.writeQuery({ query: ALL_FELLAS, data });
        },
        optimisticResponse: {
          __typename: 'Mutation',
          createFella: {
            __typename: 'Fella',
            id: 42666777,
            ...fella,
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
        surname: '',
        nick: '',
        car: '',
        region: '',
        music: '',
        suitId: '',
      };
    },
  },
};
</script>

<style lang="css">
</style>
