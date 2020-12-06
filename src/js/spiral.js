var canvas = document.getElementById('spiral');
var spiral_ctx = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(spiral_canvasAnimation);
var spiral_circleX = 0;
var spiral_circleY = canvas.height / 2;
var spiral_angle = 0;
var spiral_t = 0;
var spiral_a = 2;



function spiral_canvasAnimation() {
    spiral_circleX = canvas.width / 2 + spiral_a * spiral_t * Math.cos(spiral_t);
    spiral_circleY = canvas.height / 2 + spiral_a * spiral_t * Math.sin(spiral_t);
    spiral_t += 0.07;

    spiral_drawCircle(spiral_circleX, spiral_circleY, 10);
    canvasInterval = requestAnimationFrame(spiral_canvasAnimation);
}

function spiral_drawCircle(x, y, s) {
    spiral_clearCanvas()
    spiral_ctx.fillStyle = "crimson";
    spiral_ctx.beginPath();
    spiral_ctx.arc(x, y, s, 0, 2 * Math.PI);
    spiral_ctx.fill();
    if (spiral_circleX > canvas.width) {
        spiral_t = 0;
    }
}

function spiral_clearCanvas() {
    spiral_ctx.clearRect(0, 0, canvas.width, canvas.height);
}
spiral_drawCircle();