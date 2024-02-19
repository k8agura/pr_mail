<template>
  <div>
    <q-select
      filled
      v-model="modelMultiple"
      multiple
      :options="options"
      use-chips
      stack-label
      label="Агенты"
    />
  </div>
  <div class="q-pa-md">
    <q-list>
      <!--
        Rendering a <label> tag (notice tag="label")
        so QRadios will respond to clicks on QItems to
        change Toggle state.
      -->

      <q-item tag="label" v-ripple :key="template.id" v-for="template in templates">
        <q-item-section avatar>
          <q-radio color="dark" :id="template.id" v-model="selectedTemplate" name="template" :val="template.name" />
        </q-item-section>
        <q-item-section>
          <q-item-label> <strong> Название шаблона: </strong> {{ template.name }}</q-item-label>
          <q-item-label> <strong> Тема письма: </strong> {{ template.theme }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="q-px-sm q-mt-sm">
      Вы выбрали <strong> <br> {{ selectedTemplate }}</strong>
    </div>
    <div class="text-center q-my-lg">
      <q-btn label="Отправить рассылку" type="submit" color="dark"/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data () {
    return {
      selectedTemplate: '',
      templates: [
        {
          id: '1',
          name: 'Шаблон первый',
          theme: 'JobSearch'
        },
        {
          id: '2',
          name: 'Шаблон второй',
          theme: 'Дипломная работа'
        },
        {
          id: '3',
          name: 'Шаблон третий',
          theme: 'Лето!'
        }
      ]
    }
  },
  setup () {
    return {
      modelMultiple: ref([]),
      color: ref('cyan'),
      options: [
        'komos@yandex.mail.ru', 'red@yandex.mail.ru', 'google@gmail.mail.ru'
      ]
    }
  }
}
</script>
