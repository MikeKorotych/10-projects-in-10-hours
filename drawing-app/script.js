const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

const displaySizeEl = document.querySelector("span");
const colorEl = document.getElementById("color");

let size = 10;
let x = 50;
let y = 50;
let isPressed = false;
let color = "black";

function dr(e) {
  if (isPressed) {
    const x = e.offsetX;
    const y = e.offsetY;
    drawCircle(x, y);
  }
}

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  dr(e);
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
});
canvas.addEventListener("mousemove", (e) => {
  dr(e);
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
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

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawCircle(x++, y++);

//   requestAnimationFrame(draw);
// }

// draw();
