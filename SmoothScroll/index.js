const links = document.querySelectorAll('a');
// console.log(lists);

for(let link of links){
    
    link.addEventListener('click', smoothScroll);
}
function smoothScroll(e) {
    e.preventDefault();
    // console.log(this);
    const href = this.getAttribute("href");
    // console.log(href);
    const targetElement = document.querySelector(href);
    // console.log(targetElement);
    // console.log(targetElement.scrollIntoView);
    targetElement.scrollIntoView({
        behavior:'smooth',
    });

}
