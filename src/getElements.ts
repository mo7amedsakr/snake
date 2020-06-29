export const canvas = document.getElementById(
  'gameCanvas'
) as HTMLCanvasElement;

export const ctx = canvas.getContext('2d')!;

export const score = document.getElementById('score') as HTMLHeadingElement;
