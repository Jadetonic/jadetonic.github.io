//***delay open link... so see animation lol***
	
var icon = document.querySelectorAll(".icon");

function link(el) {
	var ev =	el.addEventListener("click", function (e) {
			e.preventDefault();
  		this.style.animation = "button-push 2s ease 0.01s";
			setTimeout(function () {
    		window.location = el.getAttribute("href")
  		}, 500);
		}
	)
};

icon.forEach(link);

//loading screen remove
//window.addEventListener("load"
document.addEventListener("DOMContentLoaded", () => {
	var loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
	    loader.remove();
		});
  }, 250); 	
});

//***blur background on card hover***

// const card = document.querySelector(".card");
// const filter = document.querySelector(".filter");
// card.onmouseover = function(){
// 	filter.style.backdropFilter = "blur(2px)";  };
// card.onmouseout = function(){
	// 	filter.style.backdropFilter = "blur(0px)";  }