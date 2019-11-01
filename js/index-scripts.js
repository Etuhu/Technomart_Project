var modalMap = document.querySelector(".modal-map");
var modalWriteUs = document.querySelector(".modal-write-us");

var modalMapWrapper = document.querySelector(".modal-map-wrapper");
var modalWriteUsWrapper = document.querySelector(".modal-writeus-wrapper");

var modalMapActivator = document.querySelector(".modal-map-activator");
var modalWriteUsActivator = document.querySelector(".modal-writeus-activator");

var closeModalMap = document.querySelector(".map-close-button");
var closeModalWriteUs = document.querySelector(".modal-writeus-close-button");


modalMapActivator.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-map-active");
});

closeModalMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-map-active");
});

modalMapWrapper.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (modalMap.classList.contains("modal-map-active")) {
    modalMap.classList.remove("modal-map-active");
  }
});

modalWriteUsActivator.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("modal-writeus-active");
});

closeModalWriteUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("modal-writeus-active");
});

modalWriteUsWrapper.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (modalWriteUs.classList.contains("modal-writeus-active")) {
    modalWriteUs.classList.remove("modal-writeus-active");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalMap.classList.contains("modal-map-active")) {
      modalMap.classList.remove("modal-map-active");
    } 
    if (modalWriteUs.classList.contains("modal-writeus-active")) {
      modalWriteUs.classList.remove("modal-writeus-active");
    } 
  } 
});