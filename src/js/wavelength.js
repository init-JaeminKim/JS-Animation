var canvas = document.getElementById('wavelength');
var ctx_wavelength = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(wavelength_canvasAnimation);
var wavelength_circleX = 0;
var wavelength_circleY = canvas.height / 2;


function wavelength_canvasAnimation() {
    wavelength_drawCircle(canvas.width / 2, canvas.height / 2, 10);
    canvasInterval = requestAnimationFrame(wavelength_canvasAnimation);
}

function wavelength_drawCircle(x, y, s) {
    wavelength_clearCanvas()
    ctx_wavelength.fillStyle = "crimson";
    ctx_wavelength.beginPath();
    ctx_wavelength.arc(x, y, s, 0, 2 * Math.PI);
    ctx_wavelength.fill();
    ctx_wavelength.lineWidth = 5
    ctx_wavelength.strokeStyle = "yellow"
    ctx_wavelength.stroke();
    
    if (wavelength_circleX > canvas.height * 1.1) {
        wavelength_circleX = 0;
    }
}

function wavelength_clearCanvas() {
    ctx_wavelength.clearRect(0, 0, canvas.width, canvas.height);
}
wavelength_drawCircle();