
<template>
  <v-container class="d-flex align-center justify-center">
    <v-btn @click="() => { createNewBucket(); }">New Bucket</v-btn>
  </v-container>
  <!-- center the container horizontally -->
  <v-container class="fill-height d-flex align-center justify-center">
    <v-list>
      <v-list-item v-for="bucket in buckets" :key="bucket.id" @click="() => { }">{{ bucket.name }}<br />Balance: {{
        bucket.balance }}</v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { set, ref as dbRef } from 'firebase/database';
import { db } from '@/db/firebaseRef'
import { useDatabaseList } from 'vuefire';

const buckets = useDatabaseList(dbRef(db, 'buckets'));

function createNewBucket() {

  const bucketId = Date.now();

  set(dbRef(db, 'buckets/' + bucketId), {
    name: 'New Bucket ' + Date.now(),
    balance: (Math.random() * 100).toFixed(0),
  })


}

</script>
