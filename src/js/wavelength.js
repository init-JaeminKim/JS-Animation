var canvas = document.getElementById('wavelength');
var ctx_wavelength = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(wavelength_canvasAnimation);
var wavelength_circleX = canvas.width / 2;
var wavelength_circleY = canvas.height / 2
var wavelength_radius = 0
var wavelength_flag = false
var wavelength_palette = ['#AC92EB', '#4FC1E8', '#A0D568', '#FFCE54', '#ED5564']


function wavelength_colorPick(){
    return Math.floor(Math.random()*6);
}

function wavelength_canvasAnimation() {

    if(!wavelength_flag){
        wavelength_radius+=5;
        if(wavelength_radius === 130){
            wavelength_flag = true;
        }
    }
    else if(wavelength_flag){
        wavelength_radius -= 0.5;
        if(wavelength_radius <= 0){
            wavelength_flag = false;
        }
    }


    wavelength_drawCircle(wavelength_circleX, wavelength_circleY, wavelength_radius);
    canvasInterval = requestAnimationFrame(wavelength_canvasAnimation);
}

function wavelength_drawCircle(x, y, s) {
    var i = wavelength_colorPick()
    ctx_wavelength.fillStyle = wavelength_palette[i];
    ctx_wavelength.beginPath();
    ctx_wavelength.arc(x, y, s, 0, 2 * Math.PI);
    ctx_wavelength.fill();
    ctx_wavelength.lineWidth = (Math.random() * 20) + 1
    ctx_wavelength.strokeStyle = "#AC92EB"
    ctx_wavelength.stroke();
    ctx_wavelength.lineWidth = (Math.random() * 20) + 1
    ctx_wavelength.strokeStyle = "#4FC1E8"
    ctx_wavelength.stroke();
    ctx_wavelength.lineWidth = (Math.random() * 20) + 1
    ctx_wavelength.strokeStyle = "#A0D568"
    ctx_wavelength.stroke();
    ctx_wavelength.lineWidth = (Math.random() * 20) + 1
    ctx_wavelength.strokeStyle = "#FFCE54"
    ctx_wavelength.stroke();
    ctx_wavelength.lineWidth = (Math.random() * 20) + 1
    ctx_wavelength.strokeStyle = "#ED5564"
    ctx_wavelength.stroke();



}

function wavelength_clearCanvas() {
    ctx_wavelength.clearRect(0, 0, canvas.width, canvas.height);
}
wavelength_drawCircle();