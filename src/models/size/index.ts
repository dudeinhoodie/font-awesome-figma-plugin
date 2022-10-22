import { createDomain } from 'effector';

const sizeDomain = createDomain();

const $size = sizeDomain.createStore<string>('xs');

export { $size };
