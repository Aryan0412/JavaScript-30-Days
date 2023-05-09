const button = document.querySelector(".button");
const input = document.querySelector(".input");

button.addEventListener('click', ()=>{

    const text = input.value;
    navigator.clipboard.writeText(text);
    console.log(text);
    button.innerText = "Copied!!!";
    setTimeout(()=>{
        button.innerText="Copy";
    }, 3000);

})