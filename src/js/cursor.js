var canvas = document.getElementById('cursor');
var ctx_cursor = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(update);

var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY -canvasPos.y;
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
    ctx_cursor.beginPath();
    ctx_cursor.arc(mouseX, mouseY, 10, 0, 2 * Math.PI, true);
    ctx_cursor.fillStyle = "#FF6A6A";
    ctx_cursor.fill();

    requestAnimationFrame(update);
}

update();
