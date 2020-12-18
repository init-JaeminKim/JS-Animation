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
var middle_space = [];
var front_space = [];


function generateStar_space() {


    for (var i = 0; i < 10; i++) {
        var x = Math.floor(Math.random() * -200);
        var y = Math.floor(Math.random() * 200);

        rare_space.push([x, y]);

    }

    for (var i = 0; i < 9; i++) {
        var x = Math.floor(Math.random() * -200);
        var y = Math.floor(Math.random() * 200);

        middle_space.push([x, y]);
    }

    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * -200);
        var y = Math.floor(Math.random() * 200);

        front_space.push([x, y]);
    }

}

function canvasAnimation_space() {

    drawRare_space();
    drawMiddle_space();
    drawFront_space();

    canvasInterval = requestAnimationFrame(canvasAnimation_space);


}

function drawRare_space() {
    var r_space;
    clearCanvas_space();
    ctx_space.fillStyle = "rgba(255,255,255, 0.4)";
    ctx_space.beginPath();
    for (var i = 0; i < rare_space.length; i++) {
        r_space = (Math.random() * 0.8) + 0.6;
        ctx_space.moveTo(rare_space[i][0], rare_space[i][1]);
        ctx_space.arc(rare_space[i][0] += 0.5, rare_space[i][1], 1.7, 0, Math.PI * 2, true);
    }
    ctx_space.fill();

}

function drawMiddle_space() {
    var r_space;
    ctx_space.fillStyle = "rgba(255,255,255, 0.6)";
    ctx_space.beginPath();
    for (var i = 0; i < middle_space.length; i++) {
        r_space = (Math.random() * 1) + 0.8;
        ctx_space.moveTo(middle_space[i][0], middle_space[i][1]);
        ctx_space.arc(middle_space[i][0] += 0.7, middle_space[i][1], 2, 0, Math.PI * 2, true);
    }
    ctx_space.fill();

}

function drawFront_space() {
    var r_space;
    ctx_space.fillStyle = "rgba(255,255,255, 0.8)";
    ctx_space.beginPath();
    for (var i = 0; i < front_space.length; i++) {
        r_space = (Math.random() * 3) + 1;
        ctx_space.moveTo(front_space[i][0], front_space[i][1]);
        ctx_space.arc(front_space[i][0] += 1, front_space[i][1], 2.5, 0, Math.PI * 2, true);
    }
    ctx_space.fill();

    ctx_space.font = "12px Arial";
    ctx_space.fillText("Jaemin was a developer", 38, 100);
}

function clearCanvas_space() {
    ctx_space.clearRect(0, 0, canvas.width, canvas.height);
}

setInterval(() => {
    generateStar_space()
}, 4000);
drawRare_space();