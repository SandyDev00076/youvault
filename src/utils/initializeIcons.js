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
  faTimes,
  faPlus,
  faImage,
  faFileAlt,
  faNewspaper,
  faWindowMaximize,
  faIdBadge,
  faArrowUp,
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
    faTimes,
    faPlus,
    faImage,
    faFileAlt,
    faNewspaper,
    faWindowMaximize,
    faIdBadge,
    faArrowUp
  );
}

export default initializeIcons;
