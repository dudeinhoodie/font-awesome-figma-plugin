figma.showUI(__html__, {
  width: 600,
  height: 500,
});

const config = {
  count: 0,
  offset: 100,
};

const DEFAULT_CONSTRAINTS = {
  x: figma.viewport.center.x,
  y: figma.viewport.center.y,
};

const mapSize = {
  ['xs']: 24,
};

figma.ui.onmessage = async (msg) => {
  const {
    values: { name, width, height, content, size },
  } = msg;
  const icon = figma.createNodeFromSvg(content);

  const offset = mapSize[size];

  const { x, y } = figma.currentPage.selection[0] || DEFAULT_CONSTRAINTS;

  icon.name = name;
  icon.backgrounds = [{ type: 'SOLID', opacity: 0, color: { r: 0, g: 0, b: 0 } }];
  icon.x = x + config.count * offset;
  icon.y = y;

  icon.resize(width, height);
  figma.currentPage.appendChild(icon);

  config.count += 1;
};
