//your code here
document.addEventListener("DOMContentLoaded", () => {
  const gameContainer = document.getElementById("gameContainer");
  const scoreElement = document.getElementById("score");

  const rows = 10;
  const cols = 10;
  const pixelSize = 40;

  let snake = [{ row: 20, col: 1 }];
  let food = generateFood();
  let direction = "right";
  let score = 0;
  let gameLoop;

  createGrid();

  function createGrid() {
    for (let row = 1; row <= rows; row++) {
      for (let col = 1; col <= cols; col++) {
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.top = (row - 1) * pixelSize + "px";
        pixel.style.left = (col - 1) * pixelSize + "px";
        pixel.id = "pixel" + (row - 1) * cols + col;
        gameContainer.appendChild(pixel);
      }
    }
  }

  function generateFood() {
    const foodPixel = document.createElement("div");
    foodPixel.className = "pixel food";
    let randomPixelId;
    do {
      randomPixelId = Math.floor(Math.random() * (rows * cols)) + 1;
    } while (
      document.getElementById("pixel" + randomPixelId).classList.contains("snakeBodyPixel")
    );
    foodPixel.id = "pixel" + randomPixelId;
    gameContainer.appendChild(foodPixel);
    return randomPixelId;
  }

  function moveSnake() {
    const head = { ...snake[0] };

    if (direction === "up") head.row--;
    else if (direction === "down") head.row++;
    else if (direction === "left") head.col--;
    else if (direction === "right") head.col++;

    if (
      head.row < 1 ||
      head.row > rows ||
      head.col < 1 ||
      head.col > cols ||
      document.getElementById("pixel" + (head.row - 1) * cols + head.col).classList.contains(
        "snakeBodyPixel"
      )
    ) {
      gameOver();
      return;
    }

    snake.unshift(head);

    if (head.row === Math.floor(food / cols) + 1 && head.col === (food - 1) % cols + 1) {
      score++;
      scoreElement.textContent = score;
      document.getElementById("pixel" + food).remove();
      food = generateFood();
    } else {
      const tail = snake.pop();
      document.getElementById("pixel" + (tail.row -