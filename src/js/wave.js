var canvas = document.getElementById('wave');
var wave_ctx = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(wave_canvasAnimation);
var wave_circleX = 0;
var wave_circleY = canvas.height/2;
var wave_amplitude = 30;
var wave_frequency = 15;


function wave_canvasAnimation(){
    wave_circleX++;
    wave_circleY = canvas.height/2 + wave_amplitude * Math.cos(wave_circleX/wave_frequency);

    wave_drawCircle(wave_circleX, wave_circleY , 10);
    canvasInterval = requestAnimationFrame(wave_canvasAnimation);
}

function wave_drawCircle(x, y, s){
    wave_clearCanvas()
    wave_ctx.fillStyle = "crimson";
    wave_ctx.beginPath();
    wave_ctx.arc(x, y, s, 0, 2 * Math.PI);
    wave_ctx.fill();
    if(wave_circleX > canvas.width * 1.1){
        wave_circleX = 0;
    }
}

function wave_clearCanvas() {
    wave_ctx.clearRect(0, 0, canvas.width, canvas.height);
}
wave_drawCircle();