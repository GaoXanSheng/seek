<template>
  <div class="mdui-bottom-nav mdui-bottom-nav-text-auto bottomNavColor">
    <router-link to="/Movies">
      <i class="mdui-icon material-icons">live_tv</i>
      <label>Movies</label>
    </router-link>
    <router-link to="/Music">
      <i class="mdui-icon material-icons">music_note</i>
      <label>Music</label>
    </router-link>
    <router-link to="/Books">
      <i class="mdui-icon material-icons">book</i>
      <label>Books</label>
    </router-link>
    <router-link to="/About">
      <i class="mdui-icon material-icons">library_books</i>
      <label>About</label>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "bottomNavigationBar"
}
</script>

<style scoped>
.bottomNavColor{
  z-index: 99;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: white;
}
</style>
