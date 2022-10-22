import { combine, createDomain } from 'effector';

import { iconModel } from '&entities/icon/models';

import { filterIconsByQuery } from '../lib';

const iconsPanelDomain = createDomain();

/**
 * Search query change handler
 */
const searchQueryChanged = iconsPanelDomain.createEvent<string>();

/**
 * Search query string
 */
const $query = iconsPanelDomain
  .createStore<string>('')
  .on(searchQueryChanged, (_, value) => value);

const $filteredIcons = combine(
  iconModel.outputs.$icons,
  $query,
  (icons, searchQuery) => {

    console.log({icons, searchQuery});
    return filterIconsByQuery(icons, searchQuery);
  }
);

const inputs = {
  searchQueryChanged,
};

const outputs = {
  $query,
  $filteredIcons,
};

const internals = {
  //
};

export { inputs, outputs, internals };
