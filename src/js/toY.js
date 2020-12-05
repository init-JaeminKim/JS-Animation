var canvas = document.getElementById('animated-canvas2');
var ctx2 = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation2);
var circleY = 0;

function canvasAnimation2(){
    circleY++;
    drawCircle2(canvas.width/2, circleY, 10);
    canvasInterval = requestAnimationFrame(canvasAnimation2);
}

function drawCircle2(x, y, s){
    clearCanvas2()
    ctx2.fillStyle = "crimson";
    ctx2.beginPath();
    ctx2.arc(x, y, s, 0, 2 * Math.PI);
    ctx2.fill();
    if(circleY > canvas.height * 1.1){
        circleY = 0;
    }
}

function clearCanvas2() {
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
}

drawCircle2();