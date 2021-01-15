function enlargeImg(img) {
    img.style.transform = "scale(100)";
    img.style.transition = "transform 2s ease";
}

function redirect(body) {
    body.style.transform = "scale(-1)";
    body.style.transition = "transform 0.5s ease";
}
