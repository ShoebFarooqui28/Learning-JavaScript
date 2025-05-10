const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");

const boxSize = 25;
const canvasSize = 500;

const rows = canvasSize / boxSize;
const cols = canvasSize / boxSize;

let snake = [{ x: 5, y: 5 }];
let direction = "RIGHT";

let food = { x: 10, y: 10 }

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  else if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  else if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  else if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
});

function drawGrid() {
  ctx.clearRect(0, 0, canvasSize, canvasSize);
  ctx.strokeStyle = "#444";

  for (let x = 0; x <= canvasSize; x += boxSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvasSize);
    ctx.stroke();
  }

  for (let y = 0; y <= canvasSize; y += boxSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvasSize, y);
    ctx.stroke();
  }
}

function drawSnake() {
  ctx.fillStyle = "#00ff00";
  snake.forEach((segment) => {
    ctx.fillRect(segment.x * boxSize, segment.y * boxSize, boxSize, boxSize);
  });
}

let gameInterval = setInterval(gameLoop, 150);

function updateSnake() {
  const head = { ...snake[0] };

  if (direction === "RIGHT") head.x += 1;
  else if (direction === "LEFT") head.x -= 1;
  else if (direction === "UP") head.y -= 1;
  else if (direction === "DOWN") head.y += 1;

  if (head.x < 0) head.x = cols - 1;
  if (head.x >= cols) head.x = 0;
  if (head.y < 0) head.y = rows - 1;
  if (head.y >= rows) head.y = 0;

  for (let i = 1; i < snake.length; i++){
    if (head.x == snake[i].x && head.y == snake[i].y ){
      clearInterval(gameInterval);
      alert("Game Over");
      location.reload();
      return;
    }
  }

  if (head.x === food.x && head.y === food.y){
    snake.unshift(head);
    generateFood();
  }
  else{
    snake.unshift(head);
    snake.pop();
  }
}

function generateFood() {
  food.x = Math.floor(Math.random() * cols);
  food.y = Math.floor(Math.random() * rows);
}

function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize)
}

function handleScore() {
  let score = snake.length - 1
  document.getElementById("score").innerText = `Score : ${score}`
}

function handleReset() {
  document.getElementById("resetBtn").addEventListener("click", () => {
    clearInterval(gameInterval);
    location.reload();
  })
}

let isPaused = false;
function handlePause() {
  const pauseBtn = document.getElementById("pauseBtn");

  pauseBtn.addEventListener("click", () => {
    isPaused = !isPaused;
    pauseBtn.innerText = isPaused ? "Play" : "Pause";
  })
}

function gameLoop() {
  if (isPaused) return;
  drawGrid();
  updateSnake();
  drawSnake();
  drawFood();
  handleScore();
}

handleReset();  
handlePause();

