var canvas = document.getElementById('reflection');
var rflx_ctx = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(rflx_canvasAnimation);
var rflx_circleX = (Math.random() * 10) + 50;
var rflx_circleY = (Math.random() * 10) + 50;
var rflx_dX = 1;
var rflx_dY = -1;
var rflx_gravity = 0.03
var rflx_friction = 0.5;
var rflx_energy = 0.75
var rflx_radius = 10;


function rflx_canvasAnimation() {

    rflx_drawCircle(rflx_circleX, rflx_circleY, rflx_radius);
    canvasInterval = requestAnimationFrame(rflx_canvasAnimation);
}

function rflx_drawCircle(x, y, s) {
    rflx_clearCanvas()
    rflx_ctx.fillStyle = "crimson";
    rflx_ctx.beginPath();
    rflx_ctx.arc(x, y, s, 0, 2 * Math.PI);
    rflx_ctx.fill();

    if (rflx_circleY + rflx_radius >= canvas.height) {
        rflx_dY *= -rflx_energy
        rflx_circleY = canvas.height - rflx_radius
        rflx_dX *= rflx_friction
    }
    // top bound / ceiling
    if (rflx_circleY - rflx_radius <= 0) {
        rflx_dY *= -rflx_energy
        rflx_circleY = rflx_radius
        rflx_dX *= rflx_friction
    }

    // left bound
    if (rflx_circleX - rflx_radius <= 0) {
        rflx_dX *= -rflx_energy
        rflx_circleX = rflx_radius
    }
    // right bound
    if (rflx_circleX + rflx_radius >= canvas.width) {
        rflx_dX *= -rflx_energy
        rflx_circleX = canvas.width - rflx_radius
    }

    // reset insignificant amounts to 0
    if (rflx_dX < 0.01 && rflx_dX > -0.01) {
        rflx_dX = 0
        rflx_circleX = canvas.width / 2
        rflx_circleY = (Math.random() * 10) + 50;
        rflx_dX = 1;
        rflx_dY = -1;
        rflx_gravity = 0.03;
        rflx_friction = 0.5;
        rflx_energy = 0.75;

    }
    if (rflx_dX < 0.01 && rflx_dX > -0.01) {
        rflx_dX = 0
    }

    rflx_dY += rflx_gravity;

    rflx_circleY += rflx_dY
    rflx_circleX += rflx_dX
}

function rflx_clearCanvas() {
    rflx_ctx.clearRect(0, 0, canvas.width, canvas.height);
}
rflx_drawCircle();