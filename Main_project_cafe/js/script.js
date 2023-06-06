const carousel = document.querySelector(".carousel");
let isDragStart = false;
const dragging = (e) =>{
	carousel.scrollLeft = e.pageX;
}
carousel.addEventListener("mousedown", isDragStart);
carousel.addEventListener("mouse")