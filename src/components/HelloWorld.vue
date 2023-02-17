<template>
  <div class="hello">
    <flat-pickr v-model="date"/>
    <loading :active.sync="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"></loading>
    <b-button variant="danger" @click.prevent="load">Button</b-button>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: 'HelloWorld',
  components:{
    flatPickr,Loading
  },
  props: {
    msg: String
  },
  data(){
    return {
      isLoading: false,
      fullPage: true,
      date:null
    }
  },
  methods:{
    load:function(){
      this.isLoading = true;
          // simulate AJAX
           setTimeout(() => {
                this.isLoading = false
           }, 5000)
    },
    onCancel() {
        console.log('User cancelled the loader.')
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
