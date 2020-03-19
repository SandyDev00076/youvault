import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faFolder,
  faGhost,
  faVideo,
  faPencilAlt,
  faExternalLinkAlt,
  faTrash,
  faShareAlt,
  faArrowAltCircleRight,
  faPhotoVideo
} from "@fortawesome/free-solid-svg-icons";

function initializeIcons() {
  library.add(
    faArrowLeft,
    faFolder,
    faGhost,
    faVideo,
    faPencilAlt,
    faExternalLinkAlt,
    faTrash,
    faShareAlt,
    faArrowAltCircleRight,
    faPhotoVideo
  );
}

export default initializeIcons;
