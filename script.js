//your code here
const gameContainer = document.getElementById("gameContainer");
const scoreElement = document.getElementById("score");

const ROW_COUNT = 20;
const COLUMN_COUNT = 20;

let score = 0;

// Initialize the grid
for (let row = 0; row < ROW_COUNT; row++) {
    for (let column = 0; column < COLUMN_COUNT; column++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.id = `pixel${row * COLUMN_COUNT + column}`;
        gameContainer.appendChild(pixel);
    }
}

// Create the snake body
const snakeBody = [1, 0];
snakeBody.forEach(index => {
    const pixel = document.getElementById(`pixel${index}`);
    pixel.classList.add("snakeBodyPixel");
});

// Create the food
let foodIndex = generateRandomIndex();
const foodPixel = document.getElementById(`pixel${foodIndex}`);
foodPixel.classList.add("food");

// Set up the game loop
let direction = "right";
let intervalId = setInterval(moveSnake, 100);

function moveSnake() {
    const headIndex = snakeBody[0];
    let nextIndex;

    if (direction === "right") {
        if ((headIndex + 1) % COLUMN_COUNT === 0) {
            // Snake has hit the right wall
            clearInterval(intervalId);
            alert(`Game Over! Your score is ${score}.`);
            return;
        }
        nextIndex = headIndex + 1;
    } else if (direction === "left") {
        if (headIndex % COLUMN_COUNT === 0) {
            // Snake has hit the left wall
            clearInterval(intervalId);
            alert(`Game Over! Your score is ${score}.`);
            return;
        }
        nextIndex = headIndex - 1;
    } else if (direction === "up") {
        if (headIndex < COLUMN_COUNT) {
            // Snake has hit the top wall
            clearInterval(intervalId);
            alert(`Game Over! Your score is ${score}.`);
            return;
        }
        nextIndex = headIndex - COLUMN_COUNT;
    } else if (direction === "down") {
        if (headIndex >= (ROW_COUNT - 1) * COLUMN_COUNT) {
            // Snake has hit the bottom wall
            clearInterval(intervalId);
            alert(`Game Over! Your score is ${score}.`);
            return;
        }
        nextIndex = headIndex
//your code here
const gameContainer = document.getElementById("gameContainer");
const scoreElement = document.getElementById("score");

const ROW_COUNT = 20;
const COLUMN_COUNT = 20;

let score = 0;

// Initialize the grid
for (let row = 0; row < ROW_COUNT; row++) {
    for (let column = 0; column < COLUMN_COUNT; column++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.id = `pixel${row * COLUMN_COUNT + column}`;
        gameContainer.appendChild(pixel);
    }
}

// Create the snake body
const snakeBody = [1, 0];
snakeBody.forEach(index => {
    const pixel = document.getElementById(`pixel${index}`);
    pixel.classList.add("snakeBodyPixel");
});

// Create the food
let foodIndex = generateRandomIndex();
const foodPixel = document.getElementById(`pixel${foodIndex}`);
foodPixel.classList.add("food");

// Set up the game loop
let direction = "right";
let intervalId = setInterval(moveSnake, 100);

function moveSnake() {
    const headIndex = snakeBody[0];
    let nextIndex;

    if (direction === "right") {
        if ((headIndex + 1) % COLUMN_COUNT === 0) {
            // Snake has hit the right wall
            clearInterval(intervalId);
            alert(`Game Over! Your score is ${score}.`);
            return;
        }
        nextIndex = headIndex + 1;
    } else if (direction === "left") {
        if (headIndex % COLUMN_COUNT === 0) {
            // Snake has hit the left wall
            clearInterval(intervalId);
            alert(`Game Over! Your score is ${score}.`);
            return;
        }
        nextIndex = headIndex - 1;
    } else if (direction === "up") {
        if (headIndex < COLUMN_COUNT) {
            // Snake has hit the top wall
            clearInterval(intervalId);
            alert(`Game Over! Your score is ${score}.`);
            return;
        }
        nextIndex = headIndex - COLUMN_COUNT;
    } else if (direction === "down") {
        if (headIndex >= (ROW_COUNT - 1) * COLUMN_COUNT) {
            // Snake has hit the bottom wall
            clearInterval(intervalId);
            alert(`Game Over! Your score is ${score}.`);
            return;
        }
        nextIndex = headIndex
