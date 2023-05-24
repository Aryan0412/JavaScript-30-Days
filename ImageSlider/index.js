const container = document.querySelector(".imgContainer");
// console.log(container);
const left = document.querySelector(".left");
const right = document.querySelector(".right");
let index = 0;
left.addEventListener("click", ()=>{
    index = index===0 ? 2 : index-1;
    container.style.transform = `translateX(-${index*100}vw)`;
})
right.addEventListener("click", ()=>{
    index = index===2 ? 0 : index+1;
    container.style.transform = `translateX(-${index*100}vw)`;
})
