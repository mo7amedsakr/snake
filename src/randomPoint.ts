import { canvas } from './getElements.js';

export const randomPoint = (
  rangeX: number = canvas.width - 50,
  rangeY: number = canvas.height - 50
) => {
  const x = Math.round(Math.random() * rangeX);
  const y = Math.round(Math.random() * rangeY);
  return { x, y };
};
