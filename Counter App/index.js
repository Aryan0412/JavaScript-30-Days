// Event Delegation

const count = document.querySelector("h2");
const button = document.querySelector(".button");

button.addEventListener('click', (e)=>{
    if(e.target.classList.contains("add")){
        count.innerText++;
    }
    if(e.target.classList.contains("minus")){
        count.innerText--;
    }
    if(e.target.classList.contains("reset")){
        count.innerText = 0;
    }
})


// Normal Approach

// const count = document.querySelector("h2");
// const minus = document.querySelector(".minus");
// const reset = document.querySelector(".reset");
// const add = document.querySelector(".add");

// minus.addEventListener('click', ()=>{
//     count.innerText--;
// });
// add.addEventListener('click', ()=>{
//     count.innerHTML++;
// });
// reset.addEventListener('click', ()=>{
//     count.innerHTML = 0;
// });