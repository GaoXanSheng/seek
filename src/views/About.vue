<template>
  <div>
    <div class="mdui-ripple">
      <div class="Bg-Mask"></div>
      <div class="mdui-img-fluid bg-img">
        <div class="portrait mdui-img-circle">
          <div class="add">
            <button class="mdui-btn mdui-btn-icon mdui-color-theme-accent mdui-ripple" style="background: #ff4081">
              <i class="mdui-icon material-icons">add</i></button>
          </div>
        </div>
        <h1 class="doc-title mdui-text-color-theme name">高旭生</h1></div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
}
</script>

<style>
.add {
  position: relative;
  top: 75px;
  left: 30px;
  width: 30px;
  height: 30px;
  z-index: 1;
  border-radius: 50px;
}
.portrait {
  width: 100px;
  height: 100px;
  background-size: 100px;
  position: relative;
  margin: auto;
  top: 20%;
  background-image: url(../assets/img.png);
  z-index: 1;
}
.bg-img {
  height: 680px;
  background-size: 100%;
  background: url(../assets/About.jpg) no-repeat top;
}
.name{
  position: relative;
  text-align: center;
  top: 20%;
  z-index: 1;
}
.Bg-Mask{
  position: fixed;
  z-index: 1;
  height: 680px;
  width: 100%;
  background-color: rgba(252, 252, 252,0.6);
}
</style>
