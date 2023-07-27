const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");


const openModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

export { openModal, closeModal }