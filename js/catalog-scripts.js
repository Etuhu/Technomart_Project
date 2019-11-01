var modalConfirm = document.querySelector(".modal-confirm");
var modalConfirmWrapper = document.querySelector(".modal-confirm-wrapper");
var modalConfirmActivator = document.querySelector(".buy-item-button");
var closeModalConfirm = document.querySelector(".modal-confirm-close-button");


modalConfirmActivator.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalConfirm.classList.add("modal-confirm-active");
});

closeModalConfirm.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalConfirm.classList.remove("modal-confirm-active");
});

modalConfirmWrapper.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (modalConfirm.classList.contains("modal-confirm-active")) {
    modalConfirm.classList.remove("modal-confirm-active");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalConfirm.classList.contains("modal-confirm-active")) {
      modalConfirm.classList.remove("modal-confirm-active");
    }
  } 
});