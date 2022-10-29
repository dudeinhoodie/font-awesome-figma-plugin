import { createDomain } from 'effector';

const searchDomain = createDomain();

const queryChanged = searchDomain.createEvent<string>();

const $query = searchDomain
  .createStore<string>('')
  .on(queryChanged, (_, value) => value);

const inputs = {
  queryChanged,
};

const outputs = {
  $query,
};

export { inputs, outputs };
