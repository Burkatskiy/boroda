var login = document.querySelector(".login");
var ModalContent = document.querySelector(".modal-content");
var hideModal = document.querySelector(".modal-content-close");
var loginForm = ModalContent.querySelector("[name = loginform]");
var password = ModalContent.querySelector("[name = password]");

login.addEventListener("click", function (event) {
    event.preventDefault();
    ModalContent.classList.add("modal-content-show");
    loginForm.focus();
})

hideModal.addEventListener("click", function (event) {
    event.preventDefault();
    ModalContent.classList.remove("modal-content-show");
})
/*выход с модального окна на клавишу ESC */
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        ModalContent.classList.remove("modal-content-show");
    }

})

var map = document.querySelector(".modal-content-map");
var mapClose = document.querySelector(".close-map");
var showMap = document.querySelector(".show-map");

showMap.addEventListener("click", function (event) {
    event.preventDefault();
    map.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    map.classList.remove("modal-content-show");
});
console.log(""===true)