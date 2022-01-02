figma.showUI(__html__, {
  width: 600,
  height: 500,
});

figma.ui.onmessage = async (msg) => {
  const {
    values: { name, count, width, height, content },
  } = msg;
  const offset = 50;
  const icon = figma.createNodeFromSvg(content);
  const { x, y } = figma.currentPage.selection[0] || {
    x: figma.viewport.center.x,
    y: figma.viewport.center.y,
  };

  console.log(figma.currentPage.selection);

  console.log({ x, y });

  icon.name = name;
  icon.backgrounds = [{ type: 'SOLID', opacity: 0, color: { r: 0, g: 0, b: 0 } }];
  icon.x = x + offset * count;
  icon.y = y;

  icon.resize(width, height);

  figma.currentPage.appendChild(icon);
};
