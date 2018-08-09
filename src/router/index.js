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
import gether from '../components/dataStructureAlgorithm/gether.vue'
import algorithms from '../components/dataStructureAlgorithm/algorithms.vue'
import frontEndSplit from '../components/frontEndSplit/front.vue'
import elementui from '../components/elementui/elementui.vue'
import eleFirst from '../components/elementui/first.vue'
import eleSecond from '../components/elementui/second.vue'
import eleThree from '../components/elementui/three.vue'
import eleFour from '../components/elementui/four.vue'
import eleUser from '../components/elementui/user.vue'
import elTVFirst from '../components/elementui/tvFirst.vue'
import route from '../components/route/route.vue'
import routeFirst from '../components/route/routeFirst.vue'
import routeFour from '../components/route/routeFour.vue'
import routeUser from '../components/route/routeUser.vue'
import routeSecond from '../components/route/routeSecond.vue'
import routeThree from '../components/route/routeThree.vue'

Vue.use(Router)

const vueRouter = new Router({
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
      path: '/bar',
      name: 'bar',
      component: Bar
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
    },
    {
      path: '/dataStructureAlgorithm', component: gether
    },
    {
      path: '/algorithms', component: algorithms
    },
    {
      path: '/frontEndSplit', component: frontEndSplit
    },
    {
      path: '/elementui',
      component: elementui,
      children: [
        {
          path: 'first',
          component: eleFirst,
          children: [
            {
              path: 'four',
              component: eleFour
            }
          ]
        },
        {
          path: 'second',
          component: eleSecond
        },
        {
          path: 'three',
          component: eleThree
        },
        {
          path: 'user/:userId',
          name: 'user',
          component: eleUser
        },
        {
          path: 'testViewFirst',
          name: 'tvFirst',
          components: {
            testview: elTVFirst
          }
        },
        {
          path: ''
        }
      ]
    },
    {
      path: '/route',
      component: route,
      children: [
        {
          path: '/',
          redirect: 'first'
        },
        {
          path: 'first',
          components: {
            firstRoute: routeFirst,
            secondRoute: eleSecond,
            threeRoute: eleThree
          },
          children: [
            {
              path: '/',
              // redirect: 'one'
              component: eleFirst
            },
            {
              path: 'two',
              name: 'two',
              component: eleSecond
            },
            {
              path: 'one',
              name: 'one',
              component: eleFirst
            },
            {
              path: 'three',
              component: eleThree
            }
          ]
        },
        {
          path: 'second',
          components: {
            firstRoute: eleSecond,
            secondRoute: eleSecond,
            threeRoute: eleThree
          },
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'three',
          components: {
            firstRoute: eleThree,
            secondRoute: eleSecond,
            threeRoute: eleThree
          }
        },
        {
          path: 'four/:id',
          components: {
            default: routeFour
          }
        },
        {
          path: 'five'
        },
        {
          path: 'six',
          beforeEnter: (to, from, next) => {
            console.log(to)
            console.log(from)
            console.log(this)
            vueRouter.push('/route/three')
          }
        },
        {
          path: 'user/:userId',
          components: {
            default: eleUser
          }
        },
        {
          path: 'routeUser/:userId',
          // components: {
          //   default: eleThree,
          //   second: eleSecond
          // },
          // props: {
          //   default: true,
          //   second: true
          // },
          component: routeUser,
          children: [
            {
              path: '/',
              components: {
                default: routeSecond,
                second: routeThree
              },
              props: {
                default: dynamicDate,
                second: { key: 'value' }
                // second: true
              }
            }
          ],
          props: true
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log(to)
    console.log(from)
    console.log(savedPosition)
    return { x: 205, y: 300 }
  }
})
// vueRouter.beforeEach(function (to, from, next) {
//   if (to.path === '/route/five') {
//     vueRouter.push('/route/second')
//   }
//   next()
// })
vueRouter.afterEach(function (to, from) {
  if (to.path === '/route/five') {
    vueRouter.push('/route/second')
  }
})
function dynamicDate (route) {
  console.log(route)
  const now = new Date()
  return {
    date: now.getFullYear()
  }
}
export default vueRouter
