var canvas = document.getElementById('water');
var ctx_water = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation_water);
var X_water = 0;
var Y_water = 0;
var X0_water;
var Y0_water;

var t_water = 0;
var step_water = 1 / 20;
var amplitude_water = 30;

var exp = Math.exp, pow = Math.pow, sqrt = Math.sqrt,
    PI = Math.PI, sin = Math.sin, cos = Math.cos;

function canvasAnimation_water() {

    drawWater();
    canvasInterval = requestAnimationFrame(canvasAnimation_water);
}

function drawWater() {

    X0_water = canvas;
    Y0_water = canvas.height / 2;

    clearCanvas_water();


    for (X_water = 0; X_water < canvas.width * 1.1; X_water++) {

        Y_water = canvas.height / 2 +
            30 * sin(t_water) * cos(X_water / 60) +
            15 * cos(t_water * 1.3) * sin(X_water / 58)

        ctx_water.beginPath();
        ctx_water.moveTo(X0_water, Y0_water);
        ctx_water.lineTo(X_water, Y_water);

        ctx_water.closePath();
        ctx_water.fillRect(X0_water, Y_water, canvas.width / 40, canvas.height)
        ctx_water.fillStyle = "crimson"
        ctx_water.strokeStyle = "crimson";
        ctx_water.lineWidth = 5;

        ctx_water.stroke();

        X0_water = X_water;
        Y0_water = Y_water;

    }

    t_water += step_water;

}

function clearCanvas_water() {
    ctx_water.clearRect(0, 0, canvas.width, canvas.height);
}
drawWater();