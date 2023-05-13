const text = document.querySelector('.countdown');
let time = 36*60*60;
const id = setInterval(()=>{
    if(time<0){
        text.textContent = "Sale Sale Sale";
    }
    else{
        time--;
        const day = Math.floor(time / 60 / 60 / 24);
        const hour = Math.floor(time / 60 / 60 ) % 24;
        const min = Math.floor(time / 60) % 60;
        const sec = time % 60;

        text.textContent = `${format(day)} Days : ${format(hour)} hours : ${format(min)} min : ${format(sec)} sec`;

    
    }
}, 1000)

const format = (t)=>{
    return t < 10 ? `0${t}` : t;
}