import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faFolder,
  faGhost,
  faVideo,
  faPencilAlt
} from "@fortawesome/free-solid-svg-icons";

function initializeIcons() {
  library.add(faArrowLeft, faFolder, faGhost, faVideo, faPencilAlt);
}

export default initializeIcons;
