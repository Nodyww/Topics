let image = document.querySelectorAll(".photo img")
let index = 0;

showNextImage = () =>{
    image[index].classList.remove("active")
    index = (index + 1) % image.length
    image[index].classList.add("active")
}

setInterval(showNextImage, 5000)




