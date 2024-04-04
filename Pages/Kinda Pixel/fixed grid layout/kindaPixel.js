import * as shape from "./shapeDraw.js";


var getMyCanvas = document.getElementById('myCanvas');
var queryMyCanvas = document.querySelector('#myCanvas');
const ctx = getMyCanvas.getContext("2d");

	var getCenterButton = document.getElementById('centerButton');
	var queryCenterButton = document.querySelector('#centerButton');

	var queryRange = document.querySelector("#range");
	var printRange = document.querySelector("#printRange");

	var queryBody = document.querySelector("body");

	var canvasScale = 0.5;
  let mouseDown = false;
	
	
	


window.onload = function() {
	getMyCanvas.style.transform = 
	'scale('+canvasScale+','+canvasScale+')';
  getMyCanvas.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
};


queryCenterButton.addEventListener("click", e => {
	
	
	canvasScale = 0.5;
	queryRange.value = canvasScale;
	printRange.textContent = canvasScale;
	
	getMyCanvas.style.transform = 
		'scale('+canvasScale+','+canvasScale+')';
	getMyCanvas.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
	});


queryRange.addEventListener( "input" , (event) => {
	canvasScale = queryRange.value;
  printRange.textContent = canvasScale;
	
	getMyCanvas.style.transform = 
	'scale('+canvasScale+', '+canvasScale+')';
	});
	
let deg = 0;
let sz = 10;
let myX = 0;
let myY = 0;
let rect = 0;

function mouseCanvas(event) {
	rect = queryMyCanvas.getBoundingClientRect();
	myX = (event.pageX - rect.left)/canvasScale;
	myY = (event.pageY - rect.top)/canvasScale;
 document.getElementById("coords").innerHTML = "canvasX: " + myX + ", canvasY: " + myY;


}




 

// queryMyCanvas.addEventListener("mousedown", event => {
//   mouseDown=true;
// 	event.preventDefault();
// 	mouseCanvas(event);
// 	shape.start(ctx, myX, myY);
// });
// queryMyCanvas.addEventListener("mousemove", event => {
//   if (mouseDown == true) {
//     event.preventDefault();
// 		mouseCanvas(event);
// 	  shape.move(ctx, myX, myY);
//   }
// });
// queryMyCanvas.addEventListener("mouseup", event => {
//   mouseDown=false;
// 	event.preventDefault();
// 	shape.end(ctx)
// });



queryMyCanvas.addEventListener("touchstart", event => {
  mouseDown=true;
	event.preventDefault();
	mouseCanvas(event);
	shape.start(ctx, myX, myY);
});
queryMyCanvas.addEventListener("touchmove", event => {
  if (mouseDown == true) {
    event.preventDefault();
		mouseCanvas(event);
	  shape.move(ctx, myX, myY, sz);
	}
});
queryMyCanvas.addEventListener("touchstop", event => {
  mouseDown=false;
	event.preventDefault();
	shape.end(ctx)
});
