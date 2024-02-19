<template>
  <q-layout view="lHh lpR lFf">

    <q-header elevated class="bg-dark text-white" height-hint="98">
      <div class="q-mx-xl">
      <q-toolbar>
        <q-toolbar-title>
          Mail Dashboard
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Входящие" />
        <q-route-tab to="/sendemail" label="Отправить письмо" />
        <q-route-tab to="/createmaillinglist" label="Создать рассылку" />
        <q-route-tab to="/createmailtemplate" label="Шаблон рассылки" />
        <q-route-tab to="/agentpage" label="Агенты" />
      </q-tabs>
    </div>
    </q-header>

    <q-page-container class="q-mx-xl">
      <div class="q-my-lg">
        <router-view />
      </div>
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MainLayout',
  components: {

  }
})
</script>
<style scoped>

</style>
