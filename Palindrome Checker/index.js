const input = document.querySelector(".input-text");
const para = document.querySelector(".result");
const btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{
    let inputVal = input.value.toLowerCase();
    let i = 0;
    let j = inputVal.length-1;
    console.log(i,j);
    while(i <= j){
        if(inputVal[i] !== inputVal[j]){
            para.innerText = `${inputVal.toUpperCase()} is not a Palindrome`;
            return;
        }
        i++;
        j--;
    }
    para.innerText = `${inputVal.toUpperCase()} is a Palindrome`;
})
