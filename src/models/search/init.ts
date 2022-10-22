import { $searchQuery, searchSet } from '&models/search/index';

$searchQuery.on(searchSet, (_, value) => value);
