import Vue from 'vue'
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faUserCircle,
  faBackward,
  faBroadcastTower,
  faBold,
  faBookmark,
  faMinusCircle,
  faPlayCircle,
  faFileAudio,
  faCashRegister,
  faExclamationTriangle,
  faEllipsisH,
  faEnvelope,
  faHandshake,
  faGripVertical,
  faPalette,
  faCog,
  faListOl,
  faTh,
  faCogs,
  faBars,
  faItalic,
  faSlidersH,
  faImage,
  faMoneyCheckAlt,
  faMoneyBillAlt,
  faMinusSquare,
  faStrikethrough,
  faTrashAlt,
  faUnderline,
  faTrash,
  faCloudUploadAlt,
  faCheckSquare,
  faLink,
  faHeading,
  faFileUpload,
  faShoppingCart,
  faTimes,
  faFile,
  faPlay,
  faStop,
  faTshirt,
  faConciergeBell,
  faChevronRight,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

import {
  faSquare,
} from "@fortawesome/free-regular-svg-icons";

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faFacebook,
  faInstagram,
  faBroadcastTower,
  faHandshake,
  faPalette,
  faYoutube,
  faBold,
  faBookmark,
  faTwitter,
  faUserCircle,
  faFileAudio,
  faExclamationTriangle,
  faEllipsisH,
  faEnvelope,
  faGripVertical,
  faItalic,
  faBackward,
  faMinusCircle,
  faStrikethrough,
  faListOl,
  faTh,
  faLink,
  faHeading,
  faUnderline,
  faCashRegister,
  faCog,
  faCogs,
  faImage,
  faTrashAlt,
  faTrash,
  faCloudUploadAlt,
  faFileUpload,
  faPlayCircle,
  faPlay,
  faStop,
  faMinusSquare,
  faSquare,
  faCheckSquare,
  faSlidersH,
  faBars,
  faMoneyCheckAlt,
  faMoneyBillAlt,
  faShoppingCart,
  faFile,
  faTimes,
  faTshirt,
  faConciergeBell,
  faChevronRight,
  faUsers
)

// looks like this when you need it

/*
  <font-awesome-icon :icon="['fas', 'envelope']"></font-awesome-icon>
*/

// Register the component globally
Vue.component("font-awesome-icon", FontAwesomeIcon);
