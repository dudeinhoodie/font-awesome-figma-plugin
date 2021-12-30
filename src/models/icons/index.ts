import { combine, createDomain } from 'effector';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

import { initializeIcons, filterIcons } from '&models/icons/lib';
import { $searchQuery } from '&models/search';
import { $activeCategories } from '&models/categories';

const iconsDomain = createDomain();

const $icons = iconsDomain.createStore<IconDefinition[]>(initializeIcons());
const $filteredIcons = combine($searchQuery, $activeCategories, $icons, filterIcons);

export { $icons, $filteredIcons };
