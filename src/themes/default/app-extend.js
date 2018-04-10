// You can extend main app.js file here. The function param is a root Vue instance.

import Vuetify from 'vuetify'
import Flickity from 'vue-flickity'

export default function (Vue) {
  Vue.use(Vuetify)
  Vue.component(Flickity)
}
