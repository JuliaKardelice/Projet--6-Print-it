/// projet sur macbook karde
///Tableau slides

const slides = [
	{   ///objet image
		"image":"slide1.jpg", ///parametre 1 ceci modifiera l'image
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>" ///parametre 2 ceci modifiera le texte
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let compteur = 0;

///Variables flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const dots = document.querySelectorAll(".dot");


function changeImg(){
	bannerImg.src = `assets/images/slideshow/${slides[compteur].image}`;
	tagLine.innerHTML = slides[compteur].tagLine;
}

function changeDots(){
	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[compteur].classList.add('dot_selected');
}

arrowLeft.addEventListener('click', function(){
	compteur--;
	if(compteur < 0){
		compteur = slides.length-1;
	}
	changeImg();
	changeDots();
});

arrowRight.addEventListener('click', function(){
	compteur++;
	if(compteur == slides.length){
		compteur = 0;
	}
	changeImg();
	changeDots();
});