figma.showUI(__html__, {
    width: 300,
    height: 250,
});

figma.ui.onmessage = async (msg) => {
    figma.closePlugin();
};
