import { canvas } from './getElements.js';
export const randomPoint = (rangeX = canvas.width - 50, rangeY = canvas.height - 50) => {
    const x = Math.round(Math.random() * rangeX);
    const y = Math.round(Math.random() * rangeY);
    return { x, y };
};
