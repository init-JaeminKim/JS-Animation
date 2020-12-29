var canvas = document.getElementById('metaball');
var ctx_metaball = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation_metaball);

var metaballX = canvas.width / 2;
var metaballY = canvas.height / 2;

var metaball_dX = Math.random() * 10;
var metaball_dY = Math.random() * 10;

var metaballS = 10;

function canvasAnimation_metaball() {

    metaballS = (metaballX - metaball_dX) ^ 2 + (metaballY - metaball_dY) ^ 2;
    draw_metaball(metaballX, metaballY, metaballS);
    canvasInterval = requestAnimationFrame(canvasAnimation_metaball);
}

function clearCanvas_metaball() {
    ctx_metaball.clearRect(0, 0, canvas.width, canvas.height)
}


function draw_metaball(x, y, s) {

    clearCanvas_metaball();
    ctx_metaball.fillStyle = "crimson";
    ctx_metaball.beginPath();
    ctx_metaball.arc(x, y, s, 0, 2 * Math.PI);
    ctx_metaball.fill();

}

draw_metaball();