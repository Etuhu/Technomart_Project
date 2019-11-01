var slider = document.querySelector(".offers-item-slider");
var arrowLeft = slider.querySelector(".slider-arrow-left");
var arrowRight = slider.querySelector(".slider-arrow-right");
var sliderDrill = document.querySelector(".slider-item-drill");
var sliderPuncher = document.querySelector(".slider-item-puncher");
var sliderToggleLeft = document.querySelector(".slider-toggle-left");
var sliderToggleRight = document.querySelector(".slider-toggle-right");


arrowLeft.addEventListener("click", function(evt) {
  evt.preventDefault();
  if ((sliderDrill.classList.contains("slider-item-active")) || (!sliderPuncher.classList.contains("slider-item-active"))) {
    sliderDrill.classList.toggle("slider-item-active");
    sliderPuncher.classList.toggle("slider-item-active");
    sliderToggleRight.classList.toggle("slider-toggle-active");
    sliderToggleLeft.classList.toggle("slider-toggle-active");
  } else {
    sliderPuncher.classList.toggle("slider-item-active");
    sliderDrill.classList.toggle("slider-item-active");
    sliderToggleLeft.classList.toggle("slider-toggle-active");
    sliderToggleRight.classList.toggle("slider-toggle-active");
  }
});

arrowRight.addEventListener("click", function(evt) {
  evt.preventDefault();
  if ((sliderDrill.classList.contains("slider-item-active")) || (!sliderPuncher.classList.contains("slider-item-active"))) {
    sliderDrill.classList.toggle("slider-item-active");
    sliderPuncher.classList.toggle("slider-item-active");
    sliderToggleRight.classList.toggle("slider-toggle-active");
    sliderToggleLeft.classList.toggle("slider-toggle-active");
  } else {
    sliderPuncher.classList.toggle("slider-item-active");
    sliderDrill.classList.toggle("slider-item-active");
    sliderToggleLeft.classList.toggle("slider-toggle-active");
    sliderToggleRight.classList.toggle("slider-toggle-active");
  }
});

arrowLeft.addEventListener("keydown", function(evt) {
  if ((evt.keyCode === 13) || (evt.keyCode === 32)) {
    evt.preventDefault();
    if ((sliderDrill.classList.contains("slider-item-active")) || (!sliderPuncher.classList.contains("slider-item-active"))) {
      sliderDrill.classList.toggle("slider-item-active");
      sliderPuncher.classList.toggle("slider-item-active");
      sliderToggleRight.classList.toggle("slider-toggle-active");
      sliderToggleLeft.classList.toggle("slider-toggle-active");
    } else {
      sliderPuncher.classList.toggle("slider-item-active");
      sliderDrill.classList.toggle("slider-item-active");
      sliderToggleLeft.classList.toggle("slider-toggle-active");
      sliderToggleRight.classList.toggle("slider-toggle-active");
    }
  }
});

arrowRight.addEventListener("keydown", function(evt) {
  if ((evt.keyCode === 13) || (evt.keyCode === 32)) {
    evt.preventDefault();
    if ((sliderDrill.classList.contains("slider-item-active")) || (!sliderPuncher.classList.contains("slider-item-active"))) {
      sliderDrill.classList.toggle("slider-item-active");
      sliderPuncher.classList.toggle("slider-item-active");
      sliderToggleRight.classList.toggle("slider-toggle-active");
      sliderToggleLeft.classList.toggle("slider-toggle-active");
    } else {
      sliderPuncher.classList.toggle("slider-item-active");
      sliderDrill.classList.toggle("slider-item-active");
      sliderToggleLeft.classList.toggle("slider-toggle-active");
      sliderToggleRight.classList.toggle("slider-toggle-active");
    }
  }
});

sliderToggleLeft.addEventListener("click", function(evt) {
  evt.preventDefault();
  if ((sliderDrill.classList.contains("slider-item-active")) || (!sliderPuncher.classList.contains("slider-item-active"))) {
    sliderDrill.classList.toggle("slider-item-active");
    sliderPuncher.classList.toggle("slider-item-active");
    sliderToggleRight.classList.toggle("slider-toggle-active");
    sliderToggleLeft.classList.toggle("slider-toggle-active");
  }
});

sliderToggleRight.addEventListener("click", function(evt) {
  evt.preventDefault();
  if ((!sliderDrill.classList.contains("slider-item-active")) || (sliderPuncher.classList.contains("slider-item-active"))) {
    sliderDrill.classList.toggle("slider-item-active");
    sliderPuncher.classList.toggle("slider-item-active");
    sliderToggleRight.classList.toggle("slider-toggle-active");
    sliderToggleLeft.classList.toggle("slider-toggle-active");
  }
});

sliderToggleLeft.addEventListener("keydown", function(evt) {
  if ((evt.keyCode === 37) || (evt.keyCode === 39) || (evt.keyCode === 38) || (evt.keyCode === 40)) {
    evt.preventDefault();
    if ((sliderDrill.classList.contains("slider-item-active")) || (!sliderPuncher.classList.contains("slider-item-active"))) {
      sliderDrill.classList.toggle("slider-item-active");
      sliderPuncher.classList.toggle("slider-item-active");
      sliderToggleRight.classList.toggle("slider-toggle-active");
      sliderToggleLeft.classList.toggle("slider-toggle-active");
    } else {
      sliderPuncher.classList.toggle("slider-item-active");
      sliderDrill.classList.toggle("slider-item-active");
      sliderToggleLeft.classList.toggle("slider-toggle-active");
      sliderToggleRight.classList.toggle("slider-toggle-active");
    }
  }
});

sliderToggleRight.addEventListener("keydown", function(evt) {
  if ((evt.keyCode === 37) || (evt.keyCode === 39) || (evt.keyCode === 38) || (evt.keyCode === 40)) {
    evt.preventDefault();
    if ((sliderDrill.classList.contains("slider-item-active")) || (!sliderPuncher.classList.contains("slider-item-active"))) {
      sliderDrill.classList.toggle("slider-item-active");
      sliderPuncher.classList.toggle("slider-item-active");
      sliderToggleRight.classList.toggle("slider-toggle-active");
      sliderToggleLeft.classList.toggle("slider-toggle-active");
    } else {
      sliderPuncher.classList.toggle("slider-item-active");
      sliderDrill.classList.toggle("slider-item-active");
      sliderToggleLeft.classList.toggle("slider-toggle-active");
      sliderToggleRight.classList.toggle("slider-toggle-active");
    }
  }
});