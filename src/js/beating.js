var canvas = document.getElementById('beating');
var ctx_beating = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation_beating);
var radius_beating = 30;
var isFull_beating = false;

function canvasAnimation_beating() {

    if(!isFull_beating){
        radius_beating+=5;
        if(radius_beating == 60){
            isFull_beating = true;
        }
    }
    else if(isFull_beating){
        radius_beating -= 1;
        if(radius_beating == 30){
            isFull_beating = false;
        }
    }

    draw_beating(canvas.width / 2, canvas.height / 2, radius_beating)
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