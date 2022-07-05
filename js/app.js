const burgerBtn = document.querySelector(".ph-list");
const closeBurger = document.querySelector(".ph-x-circle");
const showMenu = document.querySelector(".mobile_menu");

const mobileHandler = () => {
    showMenu.classList.add("show");
}

const exitHandler = () => {
    showMenu.classList.remove("show");
}

burgerBtn.addEventListener('click', mobileHandler);
closeBurger.addEventListener('click', exitHandler);