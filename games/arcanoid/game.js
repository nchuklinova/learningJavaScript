var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var x = canvas.width / 2;
var y = canvas.height /2;

var dx = 2;
var dy = -2;

var ballRadius = 50;

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	drawBall();

	if(y + dy < 0 + ballRadius) {
    	dy = -dy;
	}

	if(x + dx > canvas.width - ballRadius){
		dx = -dx;
	}

	if(x + dx < 0 + ballRadius){
		dx = -dx;
	}

	if(y + dy > canvas.height - ballRadius){
		dy = -dy;
	}

	x += dx;
    y += dy; 
}

function drawBall(){
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

setInterval(draw, 5);