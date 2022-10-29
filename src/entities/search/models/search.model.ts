import { createDomain } from 'effector';

const searchDomain = createDomain();

const searchQueryChanged = searchDomain.createEvent<string>();

const $query = searchDomain
  .createStore<string>('')
  .on(searchQueryChanged, (_, value) => value);

const inputs = {
  searchQueryChanged,
};

const outputs = {
  $query,
};

export { inputs, outputs };
