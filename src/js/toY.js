var canvas = document.getElementById('animated-canvas2');
var toY_ctx = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(toY_canvasAnimation);
var toY_circleY = 0;

function toY_canvasAnimation(){
    toY_circleY++;
    toY_drawCircle(canvas.width/2, toY_circleY, 10);
    canvasInterval = requestAnimationFrame(toY_canvasAnimation);
}

function toY_drawCircle(x, y, s){
    toY_clearCanvas()
    toY_ctx.fillStyle = "crimson";
    toY_ctx.beginPath();
    toY_ctx.arc(x, y, s, 0, 2 * Math.PI);
    toY_ctx.fill();
    if(toY_circleY > canvas.height * 1.1){
        toY_circleY = 0;
    }
}

function toY_clearCanvas() {
    toY_ctx.clearRect(0, 0, canvas.width, canvas.height);
}
drawCircle2();