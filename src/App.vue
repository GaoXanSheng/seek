<template>
  <div id="app">
    <router-view></router-view>
    <BottomNavigationBar></BottomNavigationBar>
  </div>
</template>

<script>
import BottomNavigationBar from "@/components/bottomNavigationBar";
export default {
  name: 'App',
  components:{
    BottomNavigationBar
  }
}
</script>

<style>
*{
  margin: 0 auto;
  padding: 0;
}
#app{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #F7F9FC;
}
</style>
