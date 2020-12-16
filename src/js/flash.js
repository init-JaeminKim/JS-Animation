var canvas = document.getElementById('flash');
var ctx_space = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation_space);
var circleX_space = 0;
var circleY_space = canvas.height / 2;
var amplitude_space = 30;
var frequency_space = 15;

var mBall_X = 0;
var mBall_Y = 0;

var rare_space = [];
var middle_space = [[20, 40], [20, 40], [20, 40], [20, 40], [20, 40], [20, 40], [20, 40], [20, 40], [20, 40], [20, 40]];
var front_space = [[20, 40], [20, 40], [20, 40], [20, 40], [20, 40], [20, 40], [20, 40], [20, 40], [20, 40], [20, 40]];


function generateRare_space() {


    for (var i = 0; i < 15; i++) {
        var x = Math.floor(Math.random() * 170) + 30;
        var y = Math.floor(Math.random() * 170) + 30;

        rare_space.push([x, y]);

    }
}

function canvasAnimation_space() {
    circleX_space++;
    circleY_space;

    drawCircle_space(circleX_space, circleY_space, 3);

}

function drawCircle_space(x, y, s) {
    generateRare_space();
    ctx_space.fillStyle = "rgba(220, 20, 60, 0.5)";
    ctx_space.beginPath();
    for (var i = 0; i < rare_space.length; i++) {
        ctx_space.moveTo(rare_space[i][0], rare_space[i][1]);
        ctx_space.arc(rare_space[i][0], rare_space[i][1], 3, 0, Math.PI * 2, true);
    }
    ctx_space.fill();

    if (circleX_space > canvas.width * 1.1) {
        circleX_space = 0;
    }
}

function clearCanvas_space() {
    ctx_space.clearRect(0, 0, canvas.width, canvas.height);
}

drawCircle_space();