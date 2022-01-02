import { sample } from 'effector';

import { $pickedIconsCounter, pickIcon, paintIconFx } from './index';

sample({
  clock: pickIcon,
  source: $pickedIconsCounter,
  fn: (counter, pickedIcon) => ({ icon: pickedIcon, counter }),
  target: paintIconFx,
});

$pickedIconsCounter.on(paintIconFx.done, (counter) => counter + 1);
