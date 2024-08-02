// Header scroll function
let header = document.getElementById("headerElement")
let imgLogo = document.querySelector(".img-logo")
window.addEventListener("scroll", (e)=>{
    if(window.scrollY > 0) {
        header.classList.add("scroled-header")
        imgLogo.src = "https://o9ta6d.p3cdn1.secureserver.net/wp-content/uploads/2023/07/Logo-MCP-Color.png"
    }else {
        header.classList.remove("scroled-header")
        imgLogo.src = "https://o9ta6d.p3cdn1.secureserver.net/wp-content/uploads/2023/07/Logo-MCP-White.png"
    }
})

const elementsSlider = document.querySelectorAll(".imgInfo")
const icons = document.querySelectorAll(".iconsDiv")
const slider = document.querySelector(".imagesinfo")
icons.forEach((el, index) => {
    el.addEventListener("click", () => {
        slider.style.transform = `translate(-${1312 * index}px, 0px)`;
    });
});
icons.forEach((el, index) => {
    el.addEventListener("click", () => {
        slider.style.transform = `translate(-${1312 * index}px, 0px)`;
        icons.forEach(b => b.classList.remove('iconsDivActive')); // Remover clase de todos los botones
        el.classList.add('iconsDivActive'); // Agregar clase solo al botón clickeado
        el.style.transition = "0.5s"
    });
});