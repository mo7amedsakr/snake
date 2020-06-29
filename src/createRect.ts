import { ctx } from './getElements.js';

export const createRect = (
  x: number,
  y: number,
  width: number,
  height: number,
  color: string
) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};
