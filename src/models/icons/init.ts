import { sample } from 'effector';

import { $pickedIconsCounter, iconPicked, paintIconFx } from './index';
import { $size } from '../size';

// sample({
//   // @ts-ignore
//   clock: iconPicked,
//   source: [$pickedIconsCounter, $size],
//   fn: ([counter, size], search) => ({ search, counter, size }),
//   target: paintIconFx,
// });

$pickedIconsCounter.on(paintIconFx.done, (counter) => counter + 1);
