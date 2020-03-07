import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faFolder } from "@fortawesome/free-solid-svg-icons";

function initializeIcons() {
  library.add(faArrowLeft, faFolder);
}

export default initializeIcons;
