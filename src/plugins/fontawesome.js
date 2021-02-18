
import Vue from 'vue'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationArrow, faTable, faTshirt, faSearchDollar, faUsers, faRandom, faImages, faTags, faShoppingBag, faStore, faShareAlt, faShoppingCart, faForward, faBackward, faTimes, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
library.add(faLocationArrow, faTable, faTshirt, faSearchDollar, faUsers, faRandom, faImages, faTags, faShoppingBag, faStore, faShareAlt, faShoppingCart, faForward, faBackward, faTimes, faCartArrowDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
