import { $searchQuery, setSearchQuery } from '&models/search/index';

$searchQuery.on(setSearchQuery, (_, value) => value);
