var canvas = document.getElementById('animated-canvas');
var toX_ctx = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(toX_canvasAnimation);
var toX_circleX = 0;

function toX_canvasAnimation(){
    toX_circleX++;
    toX_drawCircle(toX_circleX, canvas.height/2, 10);
    canvasInterval = requestAnimationFrame(toX_canvasAnimation);
}

function toX_drawCircle(x, y, s){
    toX_clearCanvas()
    toX_ctx.fillStyle = "crimson";
    toX_ctx.beginPath();
    toX_ctx.arc(x, y, s, 0, 2 * Math.PI);
    toX_ctx.fill();
    if(toX_circleX > canvas.width * 1.1){
        toX_circleX = 0;
    }
}

function toX_clearCanvas() {
    toX_ctx.clearRect(0, 0, canvas.width, canvas.height);
}

toX_drawCircle();