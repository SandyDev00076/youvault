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
  faPhotoVideo,
  faExclamationCircle,
  faHome,
  faTimes
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
    faPhotoVideo,
    faExclamationCircle,
    faHome,
    faTimes
  );
}

export default initializeIcons;
