const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawRect() {
  ctx.fillStyle = "red";
  ctx.fillRect(100, 100, 200, 200);
  ctx.strokeStyle = "black";
  ctx.strokeRect(50, 50, 200, 200);
  ctx.clearRect(200, 200, 50, 50);
}

function drawPath() {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.moveTo(175, 50);
  ctx.lineTo(120, 180);
  ctx.lineTo(230, 180);
  ctx.lineTo(175, 50);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.stroke();
}

function drawArc() {
  const radians = (Math.PI / 180) * 360;
  ctx.strokeStyle = "purple";
  ctx.beginPath();
  ctx.arc(300, 300, 60, 0, radians, true);
  ctx.closePath();
  ctx.stroke();
}

drawRect();
drawPath();
drawArc();

let painting = false;

function handleMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (painting) {
    ctx.lineTo(x, y);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mousedown", () => (painting = true));
  canvas.addEventListener("mouseup", () => (painting = false));
  canvas.addEventListener("mouseleave", () => (painting = false));
}
