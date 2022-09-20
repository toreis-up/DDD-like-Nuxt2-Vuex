<template>
  <v-container fluid>
    <v-card>
      <v-card-title
        >Task List<v-spacer></v-spacer>
        <div>
          <v-dialog v-model="dialog" width="500"
            ><template #activator="{ on, attrs }"
              ><v-btn v-bind="attrs" v-on="on">AddTask</v-btn></template
            >
            <v-card>
              <v-card-title>Add Task</v-card-title>
              <v-card-text
                ><v-form
                  ><v-container
                    ><v-row
                      ><v-col
                        ><v-text-field
                          v-model="title"
                        ></v-text-field></v-col></v-row></v-container></v-form
              ></v-card-text>
              <v-card-actions
                ><v-btn @click="addTask">Send Task</v-btn></v-card-actions
              >
            </v-card>
          </v-dialog>
        </div>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field
      ></v-card-title>
      <v-container fluid>
        <DataTable :items="compItem" :search="search" fluid />
      </v-container>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import DataTable from '~/components/DataTable.vue'

export default Vue.extend({
  components: { DataTable },
  data() {
    return {
      search: '',
      items: [],
      title: '',
      dialog: false,
    }
  },
  computed: {
    compItem() {
      return this.$accessor.task.tasks
    },
  },
  mounted() {
    this.$accessor.task.load()
    this.items = this.$accessor.task.tasks as []
    console.log(this.items)
  },
  methods: {
    addTask() {
      console.log('Event occurred')
      try {
        this.$accessor.task.addTask(this.title)
      } catch (e) {
        console.error(e)
      }
      this.dialog = false
    },
  },
})
</script>

<style></style>
