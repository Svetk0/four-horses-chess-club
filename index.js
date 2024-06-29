import * as utils from "./scripts/utils.js";

import joinText from "./scripts/join-text.js";
import activateRunningLine from "./scripts/running-line.js";
import createCarouselButtons from "./scripts/carousel-buttons.js";
import { createSliderParticipants } from "./scripts/carousel-participants.js";


// ------ START INITIALIZING ------

joinText();
activateRunningLine();
createCarouselButtons();
createSliderParticipants();

// const initializeModules = () => { 
//     const currentScreenWidth = utils.updateScreenWidth();
//     joinText(currentScreenWidth);
// }


