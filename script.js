    const slider = document.getElementById("slider");
const cards = slider.children;
const cardCount = cards.length;

const cardWidth = cards[0].offsetWidth + 16; 

let currentPosition = 0;

const visibleCards = 4.3;

function showSlide() {
  slider.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
}

function nextSlide() {
  if (currentPosition < cardCount - visibleCards) {
    currentPosition++;
    showSlide();
  }
}

function prevSlide() {
  if (currentPosition > 0) {
    currentPosition--;
    showSlide();
  }
}

const toggle = document.getElementById("toggle")
const menu = document.getElementById("menu-i")

toggle.addEventListener('click',()=>{
  if(menu.style.display === "flex"){
    menu.style.display = "none"
  }
  else{
    menu.style.display = "flex"
  }
})