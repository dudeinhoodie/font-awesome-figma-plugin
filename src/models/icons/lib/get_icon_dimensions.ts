import { SizeProp } from '@fortawesome/fontawesome-svg-core';

export function getIconDimensions(content: string, size: SizeProp) {
  const node = document.createElement('div');
  node.innerHTML = content;
  const SIZE = 'xs'

  const svg = node.children[0];
  svg.classList.remove('fa-2x');
  svg.classList.add(`fa-${SIZE}`);

  console.log('svg')
  console.log(svg)

  document.body.appendChild(node);

  const { width, height } = svg.getBoundingClientRect();

  document.body.removeChild(node);

  return {
    height,
    width,
  };
}
