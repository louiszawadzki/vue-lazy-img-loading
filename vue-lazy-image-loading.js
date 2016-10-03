Vue.component('lazy-image-loading', {
  props: [
    'src',
    'smallSrc'
  ],
  data: function () {
    return {
      imageSrc: this.smallSrc
    }
  },
  template: '<img src=\"{{ imageSrc }}\"></img>',
  ready: function () {
    var img, that;
    img = new Image();
    img.src = this.src;
    that = this;

    img.onload = function(){
      that.imageSrc = that.src;
    }
  }
})

new Vue({
  el: 'body'
})
