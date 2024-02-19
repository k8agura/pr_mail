<template>
  <div class="q-pa-md">
    <q-list bordered class="rounded-borders">
      <q-item-label header>Входяшие сообщения</q-item-label>

      <q-item clickable v-ripple :key="mail.id" v-for="mail in mails" @click="showDialog(mail)">
        <q-item-section avatar top>
          <q-icon name="account_tree" color="black" size="34px" />
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">{{mail.name}}</q-item-label>
          <q-item-label class="q-mt-sm">{{mail.email}}</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">{{mail.theme}}</span>
          </q-item-label>
          <q-item-label caption lines="1">
            {{ mail.date }}
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-dark text-uppercase">
            <span class="cursor-pointer">{{ mail.message }}</span>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-dialog v-model="isMailInfo" transition-show="rotate" transition-hide="rotate">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{currentMail.name}}</div>
          <p> {{ currentMail.email }} </p>
          <p> {{ currentMail.date }} </p>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-h6">{{currentMail.theme}}</div>
          <p>{{ currentMail.message }}</p>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Прочитано" color="dark" v-close-popup />
          <q-btn flat label="Удалить" color="negative" v-close-popup />
        </q-card-actions>
        <q-card-section>
          <div class="text-h6 q-my-lg">Ответить</div>
          <QuillEditor :modules="modules" toolbar="full" style="min-height: 300px;"/>
          <div class="text-center q-my-lg">
            <q-btn type="submit" color="dark">{{BtnLabel}}</q-btn>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { ref } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import ImageUploader from 'quill-image-uploader'
import axios from 'boot/axios'
import Quill from 'quill'
import { ImageDrop } from 'quill-image-drop-module'
Quill.register('modules/imageDrop', ImageDrop)
export default {
  components: { QuillEditor },
  name: 'MailsList',
  data () {
    return {
      BtnLabel: 'Отправить',
      isMailInfo: false,
      maximizedToggle: ref(false),
      editedIndex: -1,
      currentMail: {
        id: '',
        date: '',
        name: '',
        email: '',
        theme: '',
        message: ''
      }
    }
  },
  setup: () => {
    const modules = [
      {
        name: 'imageUploader',
        module: ImageUploader,
        options: {
          upload: file => {
            return new Promise((resolve, reject) => {
              const formData = new FormData()
              formData.append('image', file)
              axios.post('/upload-image', formData)
                .then(res => {
                  console.log(res)
                  resolve(res.data.url)
                })
                .catch(err => {
                  reject('Upload failed')
                  console.error('Error:', err)
                })
            })
          }
        }
      },
      {
        name: 'ImageDrop',
        module: ImageDrop,
        options: {
          upload: file => {
            return new Promise((resolve, reject) => {
              const formData = new FormData()
              formData.append('image', file)
              axios.post('/upload-image', formData)
                .then(res => {
                  console.log(res)
                  resolve(res.data.url)
                })
                .catch(err => {
                  reject('Upload failed')
                  console.error('Error:', err)
                })
            })
          }
        }
      }
    ]
    return {
      modules
    }
  },
  methods: {
    showDialog (mail) {
      this.currentMail.id = mail.id
      this.currentMail.date = mail.date
      this.currentMail.name = mail.name
      this.currentMail.email = mail.email
      this.currentMail.theme = mail.theme
      this.currentMail.message = mail.message
      this.isMailInfo = true
    },
    closeDialog () {
      this.isMailInfo = false
    }
  },
  props: {
    mails: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>

</style>
