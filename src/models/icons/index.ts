import { combine, createDomain } from 'effector';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

import { initializeIcons, filterIcons, paintIcon } from '&models/icons/lib';
import { $searchQuery } from '&models/search';
import { $activeCategories } from '&models/categories';

import { PickedIcon } from './types';

const iconsDomain = createDomain();

const paintIconFx = iconsDomain.createEffect(paintIcon);

const $icons = iconsDomain.createStore<IconDefinition[]>(initializeIcons());

const $pickedIconsCounter = iconsDomain.createStore<number>(0);

const $filteredIcons = combine($searchQuery, $activeCategories, $icons, filterIcons);

const iconPicked = iconsDomain.createEvent<PickedIcon>();

export { $icons, $pickedIconsCounter, $filteredIcons, iconPicked, paintIconFx };
