import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import * as R from 'ramda';

library.add(fas, far, fab);

function get(pack: any) {
  const t = R.mapObjIndexed((x, y) => {
    return {
      ...x,
      key: y,
    };
  }, pack);

  return R.values(t);

  // return R.map((value) => ({ ...value }), values);
}

export function initializeIcons() {
  return R.sortBy(R.prop('iconName'), [...get(far), ...get(fas), ...get(fab)]);
}
