import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import silent from '../components/silent.vue'
import Foo from '../components/test/foo.vue'
import Bar from '../components/test/bar.vue'
import vuedraggable0 from '../components/vuedraggable0.vue'
import learnform from '../components/learnvue/learnformvue.vue'
import apivue from '../components/learnvue/apivue.vue'
import learntransition from '../components/learnanimate/transition.vue'
import learncomponent from '../components/learnvue/learncomponent.vue'
import learnclass from '../components/learnvue/learnclass.vue'

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
    },
    {
      path: '/apivue', component: apivue
    },
    {
      path: '/learnttransition', component: learntransition
    },
    {
      path: '/learncomponent', component: learncomponent
    },
    {
      path: '/learnclass', component: learnclass
    }
  ]
})
