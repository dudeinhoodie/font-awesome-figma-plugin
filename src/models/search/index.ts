import { createDomain } from 'effector';

const searchDomain = createDomain();

const $searchQuery = searchDomain.createStore<string>('');

const searchSet = searchDomain.createEvent<string>();

export { $searchQuery, searchSet };
