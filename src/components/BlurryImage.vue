<template>
  <transition-group name="blur" tag="div">
    <div v-show="currentSrc === null" class="placeholder blur-transition" key="placeholder"></div>
    <canvas v-show="currentSrc === loResSrc" height="17" width="27" key="canvas" class="blur-transition"></canvas>
    <img v-show="currentSrc === hiResSrc" :src="hiResSrc" key="image" class="blur-transition"></img>
  </transition-group>
</template>

<style scoped>
  img, canvas, .placeholder {
    height: 600px;
    width: 900px;
    position: absolute;
  }
  .placeholder {
    background-color: rgba(0,0,0,.05);
  }
  canvas {
  filter: blur(10px);
  }
  .blur-transition {
    transition: opacity linear .4s 0s;
    opacity: 1;
  }
  .blur-enter, .blur-leave {
    opacity: 0;
  }
</style>

<script>
  export default {
    props: [
      'hiResSrc',
      'loResSrc'
    ],
    data: function() {
      return {
        currentSrc: null
      }
    },
    mounted: function () {
      var loResImg, hiResImg, that, context;
      loResImg = new Image();
      hiResImg = new Image();
      that = this;
      context = this.$el.getElementsByTagName('canvas')[0].getContext('2d');

      loResImg.onload = function(){
        context.drawImage(loResImg, 0, 0);
        that.currentSrc = that.loResSrc;
      }
      hiResImg.onload = function(){
        that.currentSrc = that.hiResSrc;
      }
      loResImg.src = that.loResSrc;
      hiResImg.src = that.hiResSrc;
    }
  }
</script>
