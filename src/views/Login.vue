<template>
  <apollo-mutation
    :mutation="require('../graphql/Login.gql')"
    :variables="{ email, password }"
    @done="onLoggedIn"
  >
    <template slot-scope="{ mutate, loading, error }">
      <div class="login-page">
        <loader v-if="loading" />
        <v-card class="login-form">
          <v-card-title primary-title>
            <h3>
              Предъяви ксиву, начальник!
            </h3>
          </v-card-title>

          <v-text-field
          type="text"
          label="Почта: "
          v-model="email"/>

          <v-text-field
          type="password"
          label="Пароль: "
          v-model="password"/>

          <v-card-actions>
            <v-spacer/>
            <v-btn
              color="#546e7a"
              :disabled="loading"
              @click="mutate()"
            >
              Погнали
            </v-btn>
          </v-card-actions>
          <p v-if="error">Ошибочка, начальник: {{ error }}</p>
        </v-card>
      </div>
    </template>
  </apollo-mutation>
</template>

<script>
import Loader from '@/components/Loader';

export default {
  name: 'Login',
  components: {
    Loader,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onLoggedIn({ data }) {
      const { id, email } = data.login;
      this.$store.commit('SET_USER', { id, email });
      this.$router.replace({ name: 'home' });
    },
  },
};
</script>

<style scoped lang="scss">
  .login-page {
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-form {
    width: 400px;
    padding: 20px;
  }

  h3 {
    font-size: 18px;
  }
</style>
