function functionParler(){
	document.getElementById("stopspan").style.display="block";
	document.getElementById("parlerspan").style.display="none";

}
function functionParlerstop(){
	
	document.getElementById("parlerspan").style.display="block";
	document.getElementById("clickstop").style.display="block";

}
function functionMouseOver(e) {
  document.getElementById("recorder").style.backgroundColor ="red";
	document.getElementById("micro").style.color ="white";
	document.getElementById("micro").style.weight ="bold";
	document.getElementById("bloc").style.visibility="visible";
} 
function functionMouseOut(e) {
  document.getElementById("recorder").style.backgroundColor ="white";
	document.getElementById("micro").style.color ="red";
	document.getElementById("micro").style.weight ="bold";
	document.getElementById("bloc").style.visibility="hidden";
} 

function _functionMouseOver(e) {
  document.getElementById("_recorder").style.backgroundColor ="green";
	document.getElementById("_micro").style.color ="white";
	document.getElementById("_micro").style.weight ="bold";
	document.getElementById("block").style.visibility="visible";
} 
function _functionMouseOut(e) {
  document.getElementById("_recorder").style.backgroundColor ="white";
	document.getElementById("_micro").style.color ="green";
	document.getElementById("_micro").style.weight ="bold";
	document.getElementById("block").style.visibility="hidden";
} 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
