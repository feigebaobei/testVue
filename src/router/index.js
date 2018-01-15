import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import silent from '../components/silent.vue'
import Foo from '../components/test/foo.vue'
import Bar from '../components/test/bar.vue'
import vuedraggable0 from '../components/vuedraggable0.vue'
import learnform from '../components/learnvue/learnformvue.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'silent',
      component: silent
    },
    {
      path: '/foo', component: Foo
    },
    {
      path: '/bar', component: Bar
    },
    {
      path: '/vuedraggable', component: vuedraggable0
    },
    {
      path: '/learnform', component: learnform
    }
  ]
})
