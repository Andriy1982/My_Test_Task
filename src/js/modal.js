"use strict"
console.log('Hello');

const btnOpenModalRef = document.querySelector(".js-open-modal")
const btnCloseModalRef = document.querySelector(".js-btn-close")
const modalRef = document.querySelector('.js-modal')
// const qqq = document.querySelector(".Modal__content")



console.log(btnOpenModalRef);
console.log(btnCloseModalRef);
console.log(modalRef);

const openModal = (event) => {
    modalRef.classList.add('show-modal')
}

const toggleModal = (event) => {
    modalRef.classList.toggle('show-modal')
}



// console.log("end");
btnOpenModalRef.addEventListener('click', toggleModal)
btnCloseModalRef.addEventListener('click', toggleModal)
modalRef.addEventListener("click", (event) => {
    if (event.target === modalRef) {
        console.log(event.target);
        toggleModal();
    }
  });

