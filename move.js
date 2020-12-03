var canvas = document.getElementById('animated-canvas');
var context = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation);
var circleX = 0;
var circleY;
var velocity = 1;
var acceleration = 0.2;


function canvasAnimation(){
    circleX++;
    circleY = Math.floor(Math.random() * (150)) + 150
    drawCircle(circleX, circleY, 25);
    canvasInterval = requestAnimationFrame(canvasAnimation);
}

function drawCircle(x, y, s){
    context.globalCompositeOperation = "different"
    clearCanvas()
    context.fillStyle = "crimson";
    context.beginPath();
    context.arc(x, y, s, 0, 2 * Math.PI);
    context.fill();
    velocity += acceleration;
    circleX += velocity;
    if(circleX > canvas.width){
        circleX = 0;
        velocity = 1;
    }
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

drawCircle();