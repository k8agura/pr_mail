<template>
  <MailsList :mails="mails"/>
</template>

<script>
import { defineComponent } from 'vue'
import MailsList from 'components/MailsList.vue'
export default defineComponent({
  name: 'InboxPage',
  components: {
    MailsList
  },
  data () {
    return {
      mails: [
        {
          id: '1',
          date: '25.09.2003',
          email: 'komos@yandex.mail.ru',
          name: 'Komos',
          theme: 'JobSearch',
          message: 'TextTextTextText TextTextTextT extTextTextTextTex TextTextTextTextText TextTextTextText TextTextTextText'
        },
        {
          id: '2',
          date: '26.09.2003',
          email: 'red@yandex.mail.ru',
          name: 'Red',
          theme: 'JobSearch',
          message: 'TextTextTextText TextTextTextT extTextTextTextTex TextTextTextTextText TextTextTextText TextTextTextText'
        },
        {
          id: '3',
          date: '27.09.2003',
          email: 'google@gmail.mail.ru',
          name: 'Google',
          theme: 'JobSearch',
          message: 'TextTextTextText TextTextTextT extTextTextTextTex TextTextTextTextText TextTextTextText TextTextTextText'
        }
      ],
      id: '',
      date: '',
      email: '',
      name: '',
      theme: '',
      message: ''
    }
  }
})
</script>
