
<template>
  <!-- center the container horizontally -->
  <v-container class="fill-height d-flex align-center justify-center">
    <v-list>
      <v-list-item v-for="n in 30" :key="n" @click="() => { }">Transaction {{ n }}</v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
</script>
