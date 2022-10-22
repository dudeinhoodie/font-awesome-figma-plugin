import * as R from 'ramda';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export function filterBySearchQuery(query: string) {
  return function(icons: IconDefinition[]) {
    if (!query) {
      return icons;
    }

    return R.filter((icon) => R.includes(R.toLower(query), R.toLower(icon.iconName)), icons);
  };
}
