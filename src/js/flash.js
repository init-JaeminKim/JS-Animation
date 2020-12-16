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


    for (var i = 0; i < 10; i++) {
        var x = Math.floor(Math.random() * -200) + 0;
        var y = Math.floor(Math.random() * 200);

        rare_space.push([x, y]);

    }
}

function canvasAnimation_space() {

    drawCircle_space();

    canvasInterval = requestAnimationFrame(canvasAnimation_space);


}

function drawCircle_space() {
    var r;
    clearCanvas_space();
    ctx_space.fillStyle = "rgba(220, 20, 60, 0.3)";
    ctx_space.beginPath();
    for (var i = 0; i < rare_space.length; i++) {
        r = (Math.random() * 0.1) + 0.5;
        ctx_space.moveTo(rare_space[i][0], rare_space[i][1]);
        ctx_space.arc(rare_space[i][0] += r, rare_space[i][1], 3, 0, Math.PI * 2, true);
    }
    ctx_space.fill();


}

function clearCanvas_space() {
    ctx_space.clearRect(0, 0, canvas.width, canvas.height);
}

setInterval(() => {
    generateRare_space()
}, 5000);

drawCircle_space();