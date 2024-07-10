const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



// Dots
function generetedDots() {
	for (let i = 0; i < slides.length; i++) {
		const dotsParent = document.querySelector(".dots");
		const dotChild = document.createElement("div");
		dotChild.classList.add("dot");
		dotsParent.appendChild(dotChild);
	}
}

// Remove dots
function removeDots() {
	const dotChild = document.querySelectorAll(".dot");
	
	for (let i = 0; i < slides.length; i++) {
		dotChild[i].classList.remove("dot_selected");
	}
	dotChild[slideIndex].classList.add("dot_selected");	
}

// Contenu 
function generetedSlider(slides) {
	
	const imageSlides = document.querySelector(".banner-img");
	imageSlides.src = "./assets/images/slideshow/" + slides[slideIndex].image;
	
	const taglineSlides = document.querySelector("#banner p");
	taglineSlides.innerHTML = slides[slideIndex].tagLine;
	
	console.log(slides[slideIndex].image);
}

generetedDots();

const test = document.querySelector(".dot");
test.classList.add("dot_selected");	

var slideIndex = 0;
const slideShow = slides[slideIndex];
var flecheGauche = document.querySelector(".arrow_left");

// Fleches
flecheGauche.onclick = function () {
	if (slideIndex === 0) {
		slideIndex = slides.length - 1
	}
	else slideIndex--;
	
	generetedSlider(slides);
	removeDots();
}

var flecheDroite = document.querySelector(".arrow_right");

flecheDroite.onclick = function () {
	if (slideIndex === slides.length - 1) {
		slideIndex = 0
	}
	else slideIndex++;
	
	generetedSlider(slides);
	removeDots();
}

