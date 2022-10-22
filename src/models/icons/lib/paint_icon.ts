import { PickedIcon } from '&models/icons/types';
import { getIconDimensions } from '&models/icons/lib/get_icon_dimensions';

const ICON_SIZE = '4x';

export function paintIcon({
  icon,
  counter,
  size,
}: {
  icon: PickedIcon;
  counter: number;
  size: string;
}) {
  const { name, content } = icon;
  const { width, height } = getIconDimensions(content, ICON_SIZE);

  parent.postMessage(
    {
      pluginMessage: {
        values: {
          content,
          name,
          size,
          width,
          height,
          count: counter,
        },
      },
    },
    '*'
  );
}
