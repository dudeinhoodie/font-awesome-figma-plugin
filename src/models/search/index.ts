import { createDomain } from 'effector';

const searchDomain = createDomain();

const $searchQuery = searchDomain.createStore<string>('');

const setSearchQuery = searchDomain.createEvent<string>();

export { $searchQuery, setSearchQuery };
