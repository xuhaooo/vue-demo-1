// import Vue from 'vue'
// import App from './App.vue'
const Vue = window.Vue
Vue.config.productionTip = false
import Demo from './Demo.vue'

new Vue({
  components: {Demo},
  data: {
    visible: true,
    n: 0
  },
  template: `
    <div>
      {{n}}
      <button @click="toggle">toggle</button>
      <hr>
      <Demo :message="n" :fn="add"/>
    </div>
  `,
  methods: {
    add(){
      this.n += 1
    },
    toggle(){
      this.visible = !this.visible
    }
  }
}).$mount('#frank')
