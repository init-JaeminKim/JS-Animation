var canvas = document.getElementById('animated-canvas');
var ctx = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation);
var circleX = 0;

function canvasAnimation(){
    circleX++;
    drawCircle(circleX, canvas.height/2, 10);
    canvasInterval = requestAnimationFrame(canvasAnimation);
}

function drawCircle(x, y, s){
    clearCanvas()
    ctx.fillStyle = "crimson";
    ctx.beginPath();
    ctx.arc(x, y, s, 0, 2 * Math.PI);
    ctx.fill();
    if(circleX > canvas.width * 1.1){
        circleX = 0;
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

drawCircle();