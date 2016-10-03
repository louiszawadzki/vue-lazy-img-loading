Vue.component('lazy-image-loading', {
  props: [
    'src',
    'smallSrc'
  ],
  template: '<img src=\"{{ smallSrc }}\"></img>'
})

new Vue({
  el: 'body'
})
