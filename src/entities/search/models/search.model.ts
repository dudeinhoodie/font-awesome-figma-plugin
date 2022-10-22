import { createDomain } from 'effector';

const searchDomain = createDomain();

/**
 * Search query change handler
 */
const searchQueryChanged = searchDomain.createEvent<string>();

/**
 * Search query string
 */
const $query = searchDomain
  .createStore<string>('')
  .on(searchQueryChanged, (_, value) => value);

const inputs = {
  searchQueryChanged,
};

const outputs = {
  $query,
};

const internals = {
  //
};

export { inputs, outputs, internals };
