const search = document.querySelector("input");
const li = document.getElementsByTagName("li");

search.addEventListener('keyup',()=>{
    const val = search.value;
    for(let i = 0; i < li.length; i++){
        if(li[i].textContent.toLowerCase().includes(val)){
            li[i].style.display="";
        }else{
            li[i].style.display="none";
        }
    }

})