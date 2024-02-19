<template>
      <AgentList :rows="rows"
                 :columns="columns">
      </AgentList>
</template>

<script>
import { defineComponent } from 'vue'
import AgentList from 'components/AgentList.vue'
export default defineComponent({
  name: 'AgentPage',
  components: {
    AgentList
  },
  data () {
    return {
      rows: [
        {
          id: '1',
          name: 'kOMOS',
          email: 'yandex.mail@ru'
        }
      ],
      columns: [
        {
          name: 'id',
          align: 'center',
          label: 'id',
          field: 'id',
          sortable: true
        },
        {
          name: 'name',
          align: 'center',
          label: 'Имя контрагента',
          field: 'name',
          sortable: true
        },
        {
          name: 'email',
          align: 'center',
          label: 'E-mail',
          field: 'email',
          sortable: true
        },
        {
          name: 'actions',
          align: 'right'
        }
      ]
    }
  }
})
</script>
<style scoped>
</style>
