let hideText_btn = document.getElementById("hideText_btn");

let hideText = document.getElementById("hideText");

hideText_btn.addEventListener("click", ToggleText);

function ToggleText() {
    hideText.classList.toggle("show");
}

hideText.addEventListener("click", () => {
    hideText.classList.remove("show");
})