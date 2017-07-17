
let canvas = document.getElementById("main-canvas");
let ctx = canvas.getContext("2d");

let mainHeight = ctx.canvas.height;
let mainWidth = ctx.canvas.width;
let angle = 0;
function drawCircle() {

    ctx.clearRect(0, 0, mainWidth, mainHeight);

    ctx.beginPath();
    let radius = 2 + 100 * Math.abs(Math.cos(angle));
    ctx.arc(150, 150, radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = 'rgb(255,0,0)';
    ctx.fill();

    angle += Math.PI / 144;
    requestAnimationFrame(drawCircle);
}

drawCircle();


