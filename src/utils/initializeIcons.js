import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faFolder,
  faGhost
} from "@fortawesome/free-solid-svg-icons";

function initializeIcons() {
  library.add(faArrowLeft, faFolder, faGhost);
}

export default initializeIcons;
