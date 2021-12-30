figma.showUI(__html__, {
  width: 600,
  height: 500,
});

figma.ui.onmessage = async (msg) => {
  const {
    values: { name, count, width, height, content },
  } = msg;
  const icon = figma.createNodeFromSvg(content);
  const offset = 20;

  icon.name = name;
  icon.backgrounds = [{ type: 'SOLID', opacity: 0, color: { r: 0, g: 0, b: 0 } }];
  icon.x = figma.viewport.center.x + offset * count;
  icon.y = figma.viewport.center.y;

  icon.resize(width, height);

  figma.currentPage.appendChild(icon);
};
