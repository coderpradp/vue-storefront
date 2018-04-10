import UIStore from './store/ui-store'
import VuetifyDemo from './pages/VuetifyDemo.vue'

const routes = [
  { path: '/', component: VuetifyDemo }
]

export default function (app, router, store) {
  router.addRoutes(routes)
  store.registerModule('ui', UIStore)
}
