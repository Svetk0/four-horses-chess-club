import * as utils from "./scripts/utils.js";

import joinText from "./scripts/join-text.js";
import activateRunningLine from "./scripts/running-line.js";
import createCarouselButtons from "./scripts/buttons-carousel.js";
import { createSliderStages } from "./scripts/carousel-stages.js";
import { createSliderParticipants } from "./scripts/carousel-participants.js";



// ------ START INITIALIZING ------

joinText();
activateRunningLine();
createCarouselButtons();
createSliderStages();
createSliderParticipants();



