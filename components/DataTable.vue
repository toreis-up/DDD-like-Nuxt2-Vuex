<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
    ></v-data-table>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['items', 'search'],
  data() {
    return {
      headers: [
        { text: 'isDone?', value: 'state' },
        { text: 'タスク名', value: 'title' },
        { text: '説明', value: 'description' },
      ],
    }
  },
})
</script>
