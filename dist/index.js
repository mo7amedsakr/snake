import { canvas, score } from './getElements.js';
import { createRect } from './createRect.js';
import { randomPoint } from './randomPoint.js';
const SNAKE_THICCNESS = 20;
let SNAKE_SPEED = 1, SNAKE_SPEED_X = SNAKE_SPEED, SNAKE_SPEED_Y = 0;
let SNAKE = [{ x: SNAKE_THICCNESS, y: SNAKE_THICCNESS }];
let SNAKE_LENGTH = SNAKE.length;
let FOOD = randomPoint();
const FOOD_THICCNESS = SNAKE_THICCNESS / 2;
const GAME_INIT = () => {
    SNAKE_SPEED_X = SNAKE_SPEED;
    SNAKE_SPEED_Y = 0;
    SNAKE = [{ x: SNAKE_THICCNESS, y: SNAKE_THICCNESS }];
    SNAKE_LENGTH = SNAKE.length;
    FOOD = randomPoint();
};
window.onload = () => {
    setInterval(() => {
        moveEverything();
        drawEverything();
    }, 75);
    window.addEventListener('keydown', (e) => {
        switch (e.keyCode) {
            case 38:
            case 87:
                // UP
                if (SNAKE_SPEED_Y >= 0 && SNAKE_SPEED_X !== 0) {
                    SNAKE_SPEED_X = 0;
                    SNAKE_SPEED_Y = -SNAKE_SPEED;
                }
                break;
            case 40:
            case 83:
                // DOWN
                if (SNAKE_SPEED_Y <= 0 && SNAKE_SPEED_X !== 0) {
                    SNAKE_SPEED_X = 0;
                    SNAKE_SPEED_Y = SNAKE_SPEED;
                }
                break;
            case 39:
            case 68:
                // RIGHT
                if (SNAKE_SPEED_X <= 0 && SNAKE_SPEED_Y !== 0) {
                    SNAKE_SPEED_X = SNAKE_SPEED;
                    SNAKE_SPEED_Y = 0;
                }
                break;
            case 37:
            case 65:
                // LEFT
                if (SNAKE_SPEED_X >= 0 && SNAKE_SPEED_Y !== 0) {
                    SNAKE_SPEED_X = -SNAKE_SPEED;
                    SNAKE_SPEED_Y = 0;
                }
                break;
            case 13:
            case 32:
                GAME_INIT();
                break;
            default:
                break;
        }
    });
};
const moveEverything = () => {
    SNAKE.unshift({
        x: SNAKE[0].x + SNAKE_SPEED_X * SNAKE_THICCNESS,
        y: SNAKE[0].y + SNAKE_SPEED_Y * SNAKE_THICCNESS,
    });
    SNAKE.pop();
    for (let i = 1; i < SNAKE_LENGTH; i++) {
        if (SNAKE[0].x === SNAKE[i].x && SNAKE[0].y === SNAKE[i].y) {
            GAME_INIT();
        }
    }
    if (FOOD.x + FOOD_THICCNESS > SNAKE[0].x &&
        FOOD.x < SNAKE[0].x + SNAKE_THICCNESS &&
        FOOD.y + FOOD_THICCNESS > SNAKE[0].y &&
        FOOD.y < SNAKE[0].y + SNAKE_THICCNESS) {
        FOOD = randomPoint();
        SNAKE_LENGTH = SNAKE.push({
            x: SNAKE[0].x,
            y: SNAKE[0].y,
        });
    }
    if (SNAKE[0].x > canvas.width - SNAKE_THICCNESS || SNAKE[0].x < 0) {
        // SNAKE_SPEED_X = 0;
        GAME_INIT();
    }
    if (SNAKE[0].y > canvas.height - SNAKE_THICCNESS || SNAKE[0].y < 0) {
        // SNAKE_SPEED_Y = 0;
        GAME_INIT();
    }
};
const drawEverything = () => {
    createRect(0, 0, canvas.width, canvas.height, 'black');
    createRect(FOOD.x, FOOD.y, FOOD_THICCNESS, FOOD_THICCNESS, 'green');
    for (let i = SNAKE_LENGTH - 1; i >= 0; i--) {
        if (i === 0) {
            createRect(SNAKE[i].x, SNAKE[i].y, SNAKE_THICCNESS, SNAKE_THICCNESS, 'blueviolet');
        }
        else {
            createRect(SNAKE[i].x, SNAKE[i].y, SNAKE_THICCNESS, SNAKE_THICCNESS, 'cornflowerblue');
        }
    }
    score.textContent = `SCORE: ${SNAKE_LENGTH - 1}`;
};
