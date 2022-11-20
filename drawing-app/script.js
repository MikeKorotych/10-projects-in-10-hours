const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

const displaySizeEl = document.querySelector("span");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

let size = 10;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

function dr(e) {
  if (isPressed) {
    const x = e.offsetX;
    const y = e.offsetY;
    drawCircle(x, y);
  }
}

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
  dr(e);
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

increaseBtn.addEventListener("click", (e) => {
  size++;
  displaySizeEl.innerHTML = size;
});
decreaseBtn.addEventListener("click", (e) => {
  size--;
  displaySizeEl.innerHTML = size;
});

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

clearEl.addEventListener("click", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
