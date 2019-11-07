figma.showUI(__html__, {
    width: 300,
    height: 350,
});

const ICON_WIDTH = 22;
const ICON_HEIGHT = 24;

figma.ui.onmessage = async (msg) => {
    const { values } = msg;
    const icon = figma.createNodeFromSvg(values.content);

    icon.name = values.name;
    icon.backgrounds = [{ type: 'SOLID', opacity: 0, color: { r: 0, g: 0, b: 0 } }];
    icon.x = figma.viewport.center.x + ICON_WIDTH;
    icon.y = figma.viewport.center.y + ICON_HEIGHT;
    icon.resize(ICON_WIDTH, ICON_HEIGHT);

    figma.currentPage.appendChild(icon);
    figma.closePlugin();
};
