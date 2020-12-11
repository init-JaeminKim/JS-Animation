var canvas = document.getElementById('flash');
var ctx_flash = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation_flash);
var circleX_flash = 0;
var circleY_flash = canvas.height / 2;
var amplitude_flash = 30;
var frequency_flash = 15;


function canvasAnimation_flash() {
    circleX_flash++;
    circleY_flash = canvas.height / 2 + amplitude_flash * Math.cos(circleX_flash / frequency_flash);

    drawCircle_flash(circleX_flash, circleY_flash, 10);
    canvasInterval = requestAnimationFrame(canvasAnimation_flash);
}

function drawCircle_flash(x, y, s) {
    clearCanvas_flash()
    ctx_flash.fillStyle = "rgba(220, 20, 60, 0.5)";
    ctx_flash.beginPath();
    ctx_flash.arc(x, y, s, 0, 2 * Math.PI);
    ctx_flash.fill();

    if (circleX_flash > canvas.width * 1.1) {
        circleX_flash = 0;
    }
}

function clearCanvas_flash() {
    ctx_flash.clearRect(0, 0, canvas.width, canvas.height);
}
drawCircle_flash();