<template>
  <div class="app-header">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>PAcentre : </span>
        <span class="font-weight-light">ЕСТЬ ЧО?</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/">Домой</v-btn>
        <v-btn to="/users">Начальники</v-btn>
        <v-btn to="/fellas">Пацантрэ</v-btn>
        <v-btn to="/suits">Масти</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
