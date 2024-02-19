<template>
  <div class="q-ma-md">
    <div class="row">
      <div class="col-md-12 col-lg-12 col-sm-12">
        <span class="text-h6">Контр-агенты</span>
        <q-btn icon="add"
               class="float-right q-ma-sm"
               dense outline
               @click="show_dialog=true,
                disable=true">
        </q-btn>
      </div>
    </div>
    <q-table
      :columns="columns"
      :rows="rows"
      row-key="id"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn icon="edit" color="dark" dense outline @click="Edit(props.row)"></q-btn>
          <q-btn icon="delete" color="red" dense outline @click="Delete(props.row)"></q-btn>
        </q-td>
      </template>
    </q-table>
    <q-dialog v-model="show_dialog">
      <q-card style="width: 600px; max-width: 100%">
        <q-card-section>
          <q-btn round flat dense icon="close" class="float-right" color="grey-8" v-close-popup></q-btn>
          <div class="text-h6">Обновить данные агента</div>
        </q-card-section>
        <q-separator inset></q-separator>
        <q-card-section class="q-pt-none">
          <q-form class="q-gutter-md">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Имя агента</q-item-label>
                  <q-input dense outlined v-model="defaultsItem.name" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Почта агента</q-item-label>
                  <q-input dense outlined v-model="defaultsItem.email" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-form>
        </q-card-section>
        <q-card-section>
          <q-card-actions align="right">
            <q-btn
              flat
              label="Отмена"
              color="red"
              dense
              v-close-popup
            ></q-btn>
            <q-btn
              flat
              label="OK"
              color="dark"
              dense
              v-close-popup
              @click="addRow"
            ></q-btn>
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="show_dialog_delete">
      <q-card style="width: 600px; max-width: 60vw">
        <q-card-section>
          <span class="text-h6">Вы действительно хотите удалить запись?</span>
        </q-card-section>
        <q-card-section>
          <q-btn
            flat
            label="Удалить"
            color="red"
            dense
            v-close-popup
            @click="deleteRecord"
          ></q-btn>
          <q-btn
            flat
            label="Нет"
            color="dark"
            dense
            v-close-popup
          ></q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  name: 'AgentList',
  data () {
    return {
      show_dialog: false,
      show_dialog_delete: false,
      disable: false,
      editedIndex: -1,
      defaultsItem: {
        id: '',
        name: '',
        email: ''
      }
    }
  },
  methods: {
    Edit (item) {
      this.disable = true
      this.editedIndex = this.rows.indexOf(item)
      this.defaultsItem.id = item.id
      this.defaultsItem.name = item.name
      this.defaultsItem.email = item.email
      this.show_dialog = true
    },
    addRow () {
      if (this.editedIndex > -1) {
        this.Update()
      } else {
        this.addRecord()
      }
    },
    Delete (item) {
      this.editedIndex = this.rows.indexOf(item)
      this.defaultsItem.id = item.id
      this.defaultsItem.name = item.name
      this.defaultsItem.email = item.email
      this.show_dialog_delete = true
    },
    async Update () {

    },
    async addRecord () {

    },
    async deleteRecord () {

    }
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>

</style>
