let image = document.querySelectorAll(".photo img")
let index = 0;

const menulive = document.getElementById('menu-hum')
const navmenu = document.getElementById('menu')

const pages = document.querySelectorAll(".pagination .page")
const first = document.querySelector(".pagination .first")
const next = document.querySelector(".pagination .next")
let nowpage = 1;

menulive.addEventListener('click',() =>{
    navmenu.classList.toggle('active')
})

document.addEventListener('click', (e) =>{
    if(!navmenu.contains(e.target) && !menulive.contains(e.target   )){
        navmenu.classList.remove('active')
    }
})

showNextImage = () =>{
    image[index].classList.remove("active")
    index = (index + 1) % image.length
    image[index].classList.add("active")
}

setInterval(showNextImage, 5000)








pages.forEach((page, index) =>{
    page.addEventListener('click',() =>{
        setpage(index + 1)
    })
})


first.addEventListener("click", () => {
    if(nowpage > 1){
        setpage(nowpage - 1)
    }           
})


next.addEventListener("click", () => {
    if(nowpage < pages.length){
        setpage(nowpage + 1)
    }           
})

function setpage(newPage) {
    pages[nowpage - 1].classList.remove("active");
    nowpage = newPage;
    pages[nowpage - 1].classList.add("active");
}






