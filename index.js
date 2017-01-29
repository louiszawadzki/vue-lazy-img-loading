import Vue from 'vue'
import BlurryImage from './src/components/BlurryImage.vue'

new Vue({
  el: '#app',
  render: function(createElement) {
    return createElement(BlurryImage, {
      props: {
        hiResSrc: 'https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg',
        loResSrc: 'https://cdn-images-1.medium.com/freeze/max/27/1*sg-uLNm73whmdOgKlrQdZA.jpeg?q=20'
      }
    })
  }
})
