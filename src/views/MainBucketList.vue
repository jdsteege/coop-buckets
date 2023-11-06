
<template>
  <v-container class="d-flex align-center justify-center">
    <v-btn @click="() => { createNewBucket(); }">New Bucket</v-btn>
  </v-container>
  <!-- center the container horizontally -->
  <v-container class="fill-height d-flex align-center justify-center">
    <v-list>
      <v-list-item v-for="bucket in buckets" :key="bucket.id" @click="() => { bucketClicked(bucket); }">{{
        bucket.name
      }}<br />Balance: {{
  bucket.balance }}<br />Order: {{ bucket.order }}</v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { set, ref as dbRef, query, orderByChild } from 'firebase/database';
import { useDatabaseList } from 'vuefire';
import { v4 as uuidv4 } from 'uuid';

import { db } from '@/db/firebaseRef'

const buckets = useDatabaseList(query(dbRef(db, 'buckets'), orderByChild('order')));

function createNewBucket() {
  const bucketId = uuidv4();

  set(dbRef(db, 'buckets/' + bucketId), {
    name: 'My Bucket ' + (Math.random() * 100).toFixed(0),
    balance: Math.floor(Math.random() * 100),
    order: getLastBucket().order + 10,
  })


}

function getLastBucket() {
  if (buckets.value?.length === 0) {
    return { order: 0 };
  }

  return buckets.value.reduce((max, item) => {
    return max.order > item.order ? max : item;
  });
}

function bucketClicked(bucketData) {
  console.log(JSON.stringify(bucketData));
}

</script>
