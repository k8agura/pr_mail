<template>
  <q-form
    @submit="onSubmit"
    @reset="onReset"
  >
    <q-input
      filled
      v-model="title"
      label="Тема письма"
      class="q-my-md"
    />
    <QuillEditor :modules="modules" toolbar="full" style="min-height: 300px;"/>
    <q-input
      filled
      v-model="name"
      label="Название шаблона"
      class="q-my-md"
    />
    <div class="text-center q-my-lg">
      <q-btn label="Сохранить шаблон" type="submit" color="dark"/>
    </div>
  </q-form>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import ImageUploader from 'quill-image-uploader'
import axios from 'boot/axios'
import Quill from 'quill'
import { ImageDrop } from 'quill-image-drop-module'
Quill.register('modules/imageDrop', ImageDrop)

export default defineComponent({
  components: {
    QuillEditor
  },
  setup: () => {
    // const $q = useQuasar()
    const title = ref(null)
    const name = ref(null)
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
      modules,
      title,
      name
    }
  }
})
</script>
