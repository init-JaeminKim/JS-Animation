var canvas = document.getElementById('quater');
var ctx_quater = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation_quater);

var x_quater = canvas.width / 2;
var y_quater = canvas.height / 2;

var brX_quater = canvas.width / 2;
var brY_quater = canvas.height / 2;

var tlX_quater = canvas.width / 2;
var tlY_quater = canvas.height / 2;

var trX_quater = canvas.width /2 ;
var trY_quater = canvas.height / 3.6;

var blX_quater = canvas.width / 2;
var blY_quater = canvas.height / 2;

var trFlag_quater, tlFlag_quater, brFlag_quater, blFlag_quater = false;



function canvasAnimation_quater() {


    draw_quater(x_quater, y_quater, 100)
    bottomRight_quater(brX_quater, brY_quater, 80);
    topLeft_quater(tlX_quater, tlY_quater, 70);
    topRight_quater(trX_quater, trY_quater, 100, 45);
    bottomLeft_quater(blX_quater, blY_quater, 90);

    canvasInterval = requestAnimationFrame(canvasAnimation_quater);
}

function clearCanvas_quater() {
    ctx_quater.clearRect(0, 0, canvas.width, canvas.height)
}

function draw_quater(x, y, s) {

    clearCanvas_quater();
    ctx_quater.fillStyle = "crimson";
    ctx_quater.beginPath()
    ctx_quater.arc(x, y, s, 0, 0);
    ctx_quater.lineTo(x, y);
    ctx_quater.fill();

}

function bottomRight_quater(x, y, s) {

    ctx_quater.fillStyle = "crimson";
    ctx_quater.beginPath()
    ctx_quater.arc(x, y, s, 0, Math.PI / 2);
    ctx_quater.lineTo(x, y);
    ctx_quater.fill();

    if (!brFlag_quater) {
        brX_quater+=0.08;
        brY_quater+=0.08;

        if (brX_quater > canvas.width / 1.7) {
            brFlag_quater = true;
        }
    }
    if (brFlag_quater) {
        brX_quater--;
        brY_quater--;

        if (brX_quater < canvas.width / 2) {
            brFlag_quater = false;
        }
    }
}

function bottomLeft_quater(x, y, s) {

    ctx_quater.fillStyle = "crimson";
    ctx_quater.beginPath()
    ctx_quater.arc(x, y, s, Math.PI / 2, Math.PI);
    ctx_quater.lineTo(x, y);
    ctx_quater.fill();

    if (!blFlag_quater) {
        blX_quater-=0.08;
        blY_quater+=0.08;

        if (blX_quater < 83) {
            blFlag_quater = true;
        }
    }
    if (blFlag_quater) {
        blX_quater++;
        blY_quater--;


        if (blX_quater > canvas.width / 2) {
            blFlag_quater = false;
        }
    }
}

function topLeft_quater(x, y, s) {

    ctx_quater.fillStyle = "crimson";
    ctx_quater.beginPath()
    ctx_quater.arc(x, y, s, Math.PI, -Math.PI / 2);
    ctx_quater.lineTo(x, y);
    ctx_quater.fill();

    if (!tlFlag_quater) {
        tlX_quater-=0.08;
        tlY_quater-=0.08;
        if (tlX_quater < 82.5) {
            tlFlag_quater = true;
        }
    }
    if (tlFlag_quater) {
        tlX_quater++;
        tlY_quater++;


        if (tlX_quater > canvas.width / 2) {
            tlFlag_quater = false;
        }
    }
}

function topRight_quater(x, y, w, h) {

    ctx_quater.fillStyle = "crimson";
    ctx_quater.beginPath()
    ctx_quater.rect(x, y, w, h);
    ctx_quater.lineTo(x, y);
    ctx_quater.fillStyle = '#14dcaa'
    ctx_quater.fill();

    if (!trFlag_quater) {
        trX_quater+=0.08;
        trY_quater-=0.08;

        if (trX_quater > canvas.width / 1.7) {
            trFlag_quater = true;
        }
    }
    if (trFlag_quater) {
        trX_quater--;
        trY_quater++;

        if (trX_quater < canvas.width / 2) {
            trFlag_quater = false;
        }
    }
}





draw_quater();
