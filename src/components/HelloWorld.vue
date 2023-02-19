<template>
  <div class="hello">
    <flat-pickr v-model="date"/>
    <loading :active.sync="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"></loading>
    <b-button variant="danger" @click.prevent="load">Button</b-button>
    <el-button type="primary" @click="testPina">主要按钮</el-button>
    <file-upload
    ref="upload"
    v-model="files"
    post-action="/post.method"
    put-action="/put.method"
    @input-file="inputFile"
    @input-filter="inputFilter"
  >
  Upload file
  </file-upload>
  <ul>
    <li v-for="file in files" :key="file.name">{{file.name}} - Error: {{file.error}}, Success: {{file.success}}</li>
  </ul>
  <ul>
    <li v-for="t in tagslist" :key="t.key">
       {{ t.title }}
    </li>
  </ul>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueUploadComponent from 'vue-upload-component';
import { mapState,mapActions } from 'pinia' //引入映射函数
import useStore from '../store/index' //引入store
export default {
  name: 'HelloWorld',
  components:{
    flatPickr,Loading,
    FileUpload: VueUploadComponent
  },
  props: {
    msg: String
  },
  computed:{
    ...mapState(useStore,["tagslist"]) //映射函数，取出tagslist
  },
  data(){
    return {
      files:[],
      isLoading: false,
      fullPage: true,
      date:null
    }
  },
  methods:{
    ...mapActions(useStore, ['changeTagList']), //映射action
    load:function(){
      this.isLoading = true;
          // simulate AJAX
           setTimeout(() => {
                this.isLoading = false
           }, 5000)
    },
    onCancel() {
        console.log('User cancelled the loader.')
    },
    testPina() {
           const t = {
                title: 'OA',
                key: 'oa',
                closable: true
            };
            this.changeTagList(t);
    },
    /**
     * Has changed
     * @param  Object|undefined   newFile   Read only
     * @param  Object|undefined   oldFile   Read only
     * @return undefined
     */
    inputFile: function (newFile, oldFile) {
      if (newFile && oldFile && !newFile.active && oldFile.active) {
        // Get response data
        console.log('response', newFile.response)
        if (newFile.xhr) {
          //  Get the response status code
          console.log('status', newFile.xhr.status)
        }
      }
    },
    /**
     * Pretreatment
     * @param  Object|undefined   newFile   Read and write
     * @param  Object|undefined   oldFile   Read only
     * @param  Function           prevent   Prevent changing
     * @return undefined
     */
    inputFilter: function (newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Filter non-image file
        if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
          return prevent()
        }
      }

      // Create a blob field
      newFile.blob = ''
      let URL = window.URL || window.webkitURL
      if (URL && URL.createObjectURL) {
        newFile.blob = URL.createObjectURL(newFile.file)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
