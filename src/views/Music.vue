<template>
  <div class="mdui-container">
    <h1>Music</h1>
    <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Music</label>
      <input class="mdui-textfield-input" v-model:value="name" type="Music"/>
    </div>
    <button class="mdui-btn mdui-btn-raised mdui-ripple" @click="getMusic">name {{ name }}</button>
    <br>
    <div v-for="i in song" class="song">
      <h2>
        {{i.name}}
      </h2>
<!--      {{i.albums[0].artist.picUrl}}-->
      <img :src="i.artists[0].img1v1Url" width="100px" alt="">
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'Music',
    data(){
      return {
        song:'',
        name:''
      }
    },
    methods:{
      getMusic(){
        axios.get(`http://music.eleuu.com/search/suggest?keywords=${this.name}`).then(res=>{
          console.log(res.data.result.songs)
          this.song=res.data.result.songs
        })
      }
    }
  }
</script>

<style>
.song{
  display: inline-block;
  margin:15px;
}
</style>
