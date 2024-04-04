
function square(ctx, x, y, sz) {
	ctx.fillRect(x-(sz/2), y-(sz/2), sz, sz);
};

 function circle(ctx, x, y, sz) {
	ctx.beginPath();
	ctx.arc(x, y, sz, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
};

function semicircle(ctx, x, y, sz, deg) {
	ctx.beginPath();
	ctx.arc(x, y, sz, 0.5 * Math.PI, 1.5 * Math.PI);
	ctx.stroke();
	ctx.fill();
};

function roundBrush(ctx, x, y) {
	ctx.beginPath();
		ctx.lineWidth = 20;
		ctx.strokeStyle = "black";
		ctx.lineJoin = "round";
  	ctx.lineCap = "round";
	ctx.moveTo(x, y);
	ctx.stroke();
};

function patternBrush(ctx, x, y) {
	ctx.beginPath();
		ctx.lineWidth = 20;
		const pattern = ctx.createPattern( img, 'repeat-x' );
		ctx.strokeStyle = pattern;
		ctx.lineJoin = "round";
  	ctx.lineCap = "round";
	ctx.moveTo(x, y);
	ctx.stroke();
};

function imageBrush(ctx, x, y, sz) {
	var img = document.getElementById("img");
	ctx.drawImage(img, x, y, sz, sz);
};

function rotate(x, y, ctx, sz, deg) {
	ctx.save();
	
	ctx.restore();
};

function drawCenter(ctx, x, y, sx, sy) {
	ctx.save();
	ctx.translate(x, y);
	//rect
		ctx.fillRect(-(sx/2), -(sy/2), sx, sy);
	//circle
		ctx.beginPath();
		ctx.arc(0, 0, sx, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fill();
			//rotate
		var rad = deg * Math.PI / 180;
		ctx.rotate(rad);
		// rotate += 7;
		// ctx.rotate((rotate * Math.PI) / 180);
		
	ctx.restore();
};
 



function start(ctx, x, y) {
	  ctx.beginPath();
		ctx.moveTo(x, y);
	}

function move(ctx, x, y, sz) {
	ctx.lineTo(x, y);
	ctx.stroke();
}

function end(ctx) {
	ctx.closePath();
}
  export { start, move, end };