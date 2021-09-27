function enlargeImg(img) {
    img.style.transform = "scale(100)";
    img.style.transition = "transform 2s ease";
}

function redirect(body) {
    body.style.transform = "scale(0)";
    body.style.transition = "transform 0.2s ease";
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

var div = document.getElementById( 'div_id' );
div.onmouseover = function() {
  this.style.backgroundColor = 'green';
