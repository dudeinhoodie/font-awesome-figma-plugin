import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import * as R from 'ramda';

export function filterIconsByQuery(icons: IconDefinition[], query: string) {
  if (!query) {
    return icons;
  }

  return icons.filter((icon) =>
    icon.iconName.toLocaleLowerCase().includes(query.toLowerCase())
  );

  // return R.filter(
  //   (icon) => R.includes(R.toLower(query), R.toLower(icon.iconName)),
  //   icons
  // );
}
