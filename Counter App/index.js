const count = document.querySelector("h2");
const minus = document.querySelector(".minus");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");
let num = 0;

minus.addEventListener('click', ()=>{
    count.innerText = --num;
});
add.addEventListener('click', ()=>{
    count.innerHTML = ++num;
});
reset.addEventListener('click', ()=>{
    num = 0;
    count.innerHTML = num;
});