<template>
  <div class="mdui-container">
       <h1>Movies</h1>
<!--    <div class="mdui-textfield mdui-textfield-floating-label">-->
<!--      <label class="mdui-textfield-label">Movies</label>-->
<!--      <input class="mdui-textfield-input" v-model:value="name" type="Movies"/>-->
<!--    </div>-->
<!--    <button class="mdui-btn mdui-btn-raised mdui-ripple" @click="getMp4">name {{ name }}</button>-->
<!--    <br>-->
<!--    <pre>-->
<!--      {{vlue}}-->
<!--    </pre>-->
  </div>
</template>

<script>
import axios from "axios";
  export default {
    name: 'Movies',
    data(){
      return{
        name:'',
        vlue:''
      }
    },
    methods:{
      getMp4(){
        axios.get(`https://movie.admin.chuyanlon.com/web/v1/api/webSearch?keyword=${this.name}`).then(res=>{
          this.name =res.data
        })
      }
    }
  }
</script>

<style>
</style>
