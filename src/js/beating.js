var canvas = document.getElementById('beating');
var ctx_beating = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation_beating);

function canvasAnimation_beating() {

    draw_beating(canvas.width / 2, canvas.height / 2, 10)
    canvasInterval = requestAnimationFrame(canvasAnimation_beating);
}

function clearCanvas_beating() {
    ctx_beating.clearRect(0, 0, canvas.width, canvas.height)
}


function draw_beating(x, y, s) {

    clearCanvas_beating();
    ctx_beating.fillStyle = "crimson";
    ctx_beating.beginPath();
    ctx_beating.arc(x, y, s, 0, 2 * Math.PI);
    ctx_beating.fill();

}

draw_beating();