"use strict"

const btnOpenModalRef = document.querySelector(".js-open-modal")
const btnCloseModalRef = document.querySelector(".js-btn-close")
const modalRef = document.querySelector('.js-modal')

const toggleModal = (event) => {
    modalRef.classList.toggle('show-modal')
}


btnOpenModalRef.addEventListener('click', toggleModal)
btnCloseModalRef.addEventListener('click', toggleModal)
modalRef.addEventListener("click", (event) => {
    if (event.target === modalRef) {
        console.log(event.target);
        toggleModal();
    }
  });

