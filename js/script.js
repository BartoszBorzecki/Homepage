{
    const welcome = () => {
        console.log("Hello!");
    };

    const removeImage = () => {
        const imageElement = document.querySelector(".js-image");
       

        imageElement.classList.toggle("remove");
        buttonElement.innerText = imageElement.classList.contains("remove") ? "Pokaż Ronaldinho"  : "Za szerokie zdjęcie";
    };

    const init = () => {
        const buttonElement = document.querySelector(".js-button");
        
        buttonElement.addEventListener("click", removeImage);
    }
    welcome();
    init();
}


