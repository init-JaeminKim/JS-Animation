var canvas = document.getElementById('cursor');
var ctx_cursor = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(update);

var canvasPos = getPosition(canvas);
var mouseX_cursor = 0;
var mouseY_cursor = 0;

var img = new Image();
img.src = "./src/images/imposter.png"

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
    mouseX_cursor = e.clientX - canvasPos.x;
    mouseY_cursor = e.clientY - canvasPos.y;
}

function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;

    while (el) {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
}

function canvasAnimation_cursor() {

    canvasInterval = requestAnimationFrame(canvasAnimation_cursor);

}

function clearCanvas_cursor() {
    ctx_cursor.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {

    clearCanvas_cursor();
    ctx_cursor.drawImage(img, mouseX_cursor, mouseY_cursor, 50, 50);


    requestAnimationFrame(update);
}

update();
