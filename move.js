var ol;
var circleInterval;
var clicked = false;

function cricleAnimation(time) {

    ol = Math.floor(Math.random() * -1000) + 1000

    if (ol >= 100) {
        document.getElementById("circle").style.top = ol + "px";
    }
    else {
        document.getElementById("circle").style.bottom = ol + "px";
    }

    circleInterval = requestAnimationFrame(cricleAnimation)

}

function mouseClicked() {
    if (clicked) {
        clicked = false;
        document.getElementById("circle").style.backgroundColor = "dimgrey";
        cancelAnimationFrame(circleInterval)
    } else {
        clicked = true;
        document.getElementById("circle").style.backgroundColor = "crimson";
        circleInterval = requestAnimationFrame(cricleAnimation)
    }
}

document.getElementById("circle").addEventListener("click", mouseClicked);
document.getElementById("circle").style.backgroundColor = "dimgrey";
