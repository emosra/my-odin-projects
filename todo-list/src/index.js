import { openModal, closeModal } from "./domController";

const openModalBtn = document.querySelector(".add-task-btn");
const closeModalBtn = document.querySelector(".btn-close-modal");

openModalBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);