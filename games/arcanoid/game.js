var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(0, 0, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 60, 0, Math.PI*2);
ctx.fillStyle = "green";
ctx.fill();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.stroke();

ctx.closePath();