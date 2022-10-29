import 'figma-plugin-ds/dist/figma-plugin-ds.css';

window.$RefreshReg$ = () => {};
window.$RefreshSig$ = () => () => {};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
