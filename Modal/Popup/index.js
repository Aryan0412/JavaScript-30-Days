const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup-content")
const button = document.querySelector("button");
const close = document.querySelector(".close");

button.addEventListener('click', ()=>{
    popup.style.display = "block";
});

close.addEventListener('click', ()=>{
    popupContent.classList.add("slide-up")
    setTimeout(()=>{
        popupContent.classList.remove("slide-up")
        popup.style.display = "none";
    },500);
});
