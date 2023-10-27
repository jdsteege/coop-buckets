<template>
  <v-layout>
    <v-app-bar color="primary">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Coop Buckets</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>


    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item title="User Name"></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item title="Buckets" to="/main-bucket-list"></v-list-item>
        <v-list-item title="Transactions" to="/main-transaction-list"></v-list-item>
        <v-list-item title="Accounts" to="/main-account-list"></v-list-item>
        <v-list-item title="Reports" to="/main-report-list"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item title="Edit Buckets"></v-list-item>
        <v-list-item title="Settings"></v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

  </v-layout>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { ref } from 'vue';

var drawer = ref(false);
</script>
