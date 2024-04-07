//***delay open link... so see animation lol***
	
var icon = document.querySelectorAll(".icon");

function link(el) {
    el.addEventListener("click", function (e) {
        e.preventDefault();
        this.style.animation = "button-push 2s ease 0.01s";
        setTimeout(function () {
            window.location = el.getAttribute("href")
        }, 500);
    });
}

icon.forEach(function(el) {
    link(el);
});

document.addEventListener("DOMContentLoaded", () => {
    var loader = document.querySelector(".loader");
    setTimeout(function () {
        loader.classList.add("loader-hidden");
        loader.addEventListener("transitionend", () => {
            loader.remove();
        });
    }, 250);
});

window.addEventListener('load', function() {
      var iframe = document.querySelector('#google-form-container iframe');
      iframe.onload = function() {
        document.querySelector('.loader').classList.add('loader-hidden'); // Hide the loader once the iframe has finished loading
        document.getElementById('google-form-container').style.display = 'block'; // Show the Google Form container
      };
    });

//***blur background on card hover***

// const card = document.querySelector(".card");
// const filter = document.querySelector(".filter");
// card.onmouseover = function(){
// 	filter.style.backdropFilter = "blur(2px)";  };
// card.onmouseout = function(){
	// 	filter.style.backdropFilter = "blur(0px)";  }
