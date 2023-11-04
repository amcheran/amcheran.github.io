var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
c.fillRect(100,100,200,200);
c.fillRect(400,100,200,200);

//line
c.beginPath();
c.moveTo(10,100);
c.lineTo(400,400);
c.stroke();

console.log(canvas)