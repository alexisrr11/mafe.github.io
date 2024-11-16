const ul = document.querySelector("#ul");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    ul.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    ul.classList.remove("visible");
})