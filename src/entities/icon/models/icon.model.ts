import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { createDomain } from 'effector';

import { drawIcon } from '../lib/draw_icon';
import { initializeIcons } from '../lib/initialize_icons';

const iconDomain = createDomain();

const drawIconFx = iconDomain.createEffect(drawIcon);

/**
 * Icons name list
 */
const $icons = iconDomain.createStore<IconDefinition[]>(initializeIcons());

// /**
//  * Added icons counter
//  */
// const $iconCounterAdded = iconDomain.createStore<number>(0);

//
// const $filteredIcons = combine($searchQuery, $activeCategories, $icons, filterIcons);
//
// const iconPicked = iconDomain.createEvent<PickedIcon>();
//
// export { $icons, $pickedIconsCounter, $filteredIcons, iconPicked, paintIconFx };

const inputs = {
  //
};

const outputs = {
  $icons,
};

const internals = {
  drawIconFx,
};

export { inputs, outputs, internals };
