import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faFolder,
  faGhost,
  faVideo
} from "@fortawesome/free-solid-svg-icons";

function initializeIcons() {
  library.add(faArrowLeft, faFolder, faGhost, faVideo);
}

export default initializeIcons;
