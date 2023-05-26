const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");
const firstImg = carousel.querySelectorAll('img')[0];
let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = 410;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
console.log(firstImgWidth)

const showHideIcons = ()=>{
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == 2512 ? "none" : "block";
}

arrowIcons.forEach((icon)=>{
    icon.addEventListener('click', ()=>{
        carousel.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth;
        console.log(carousel.scrollLeft);
        setTimeout(()=> showHideIcons(), 60);
    })
})
console.log(firstImg);

const dragStart = (e)=>{
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
    console.log(prevPageX);
    console.log(prevScrollLeft);
    showHideIcons();
    
}
const dragStop = ()=>{
    isDragStart = false;
    carousel.classList.remove("dragging");
}

const dragging = (e)=>{
    e.preventDefault();
    if(!isDragStart)return;
    let PositionDiff = e.pageX - prevPageX;
    
    carousel.scrollLeft = prevScrollLeft - PositionDiff;
    
    carousel.classList.add("dragging");
}
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);