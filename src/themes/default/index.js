import UIStore from './store/ui-store'
import VuetifyDemo from './pages/VuetifyDemo.vue'
import FlickityDemo from './pages/FlickityDemo.vue'

const routes = [
  { path: '/', component: VuetifyDemo },
  { path: '/flickity-demo', component: FlickityDemo }
]

export default function (app, router, store) {
  router.addRoutes(routes)
  store.registerModule('ui', UIStore)
}
