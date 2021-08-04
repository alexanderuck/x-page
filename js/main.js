const click = document.querySelector(".click-block");
const menu = document.querySelector(".lorem-text");

click.addEventListener("click", () => {
    menu.classList.toggle("open");
})
