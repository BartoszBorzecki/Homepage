console.log("Hello!");

let buttonElement = document.querySelector(".js-button");
let imageElement = document.querySelector(".js-image");

buttonElement.addEventListener("click", () => {
    imageElement.classList.toggle("remove");
    if (imageElement.classList.contains("remove")) {
        buttonElement.innerText = "Pokaż Ronaldinho";
    } else {
        buttonElement.innerText = "Za szerokie zdjęcie?"
    }

});


