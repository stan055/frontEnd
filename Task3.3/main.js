const slidesContainer = document.querySelector('.container')
const slideRow = document.querySelector('.slides')
const nextBtn = document.getElementById('next-btn')
const prevBtn = document.getElementById('prev-btn')
const INTERVAL = 3000
const modalWindow = document.querySelector('.modal')

let interval
let index = 1
let slides = document.querySelectorAll('.slide') // Array slides

// ------------------------Create auto slider--------------------------

// Add two new clone elements to slideRow for loop
const firstClone = slides[0].cloneNode(true)
const lastClone = slides[slides.length - 1].cloneNode(true)

slideRow.append(firstClone)
slideRow.prepend(lastClone)

slides = document.querySelectorAll('.slide') // Update slides
slides.forEach(e => e.firstChild.draggable = false) // Disable draggable img

// Set start position
slideRow.style.transform = `translateX(${-slides[index].clientWidth * index}px)`

// Set interval sliding
const startSlide = () => interval = setInterval(moveToNextSlide, INTERVAL)

// Clear interval
const stopSlide = () => clearInterval(interval)

// Moving slide
const moveSlideTo = (index) => {
  let x = -(slides[index].clientWidth * index) // Get positionX to the next slide
  slideRow.style.transform = `translateX(${ x }px)` // Moving
}

// Next Slide 
function moveToNextSlide () {
    index++
    slideRow.style.transition = '.7s ease-out'
    moveSlideTo(index)
    if (index >= slides.length - 1) {
      setTimeout(() => {
        slideRow.style.transition = 'none'
        index = 1
        moveSlideTo(index)
      }, 700)

    }
}

// Previos slide
function moveToPreviousSlide () {
  index--
  slideRow.style.transition = '.7s ease-out'
  moveSlideTo(index)
  if (index <= 0) {
    setTimeout(() => {
      slideRow.style.transition = 'none'
      index = slides.length - 2
      moveSlideTo(index)
    }, 700)
  }
}

// Btn listeners
nextBtn.addEventListener('click', moveToNextSlide)
prevBtn.addEventListener('click', moveToPreviousSlide)

// Start sliding
startSlide()

//-------------------------Image display in modal window--------------------------//

let mouseDown = false

// Listener mousedown
slidesContainer.addEventListener('mousedown', (e) => {
  stopSlide()
  mouseDown = true
  imageDisplay(e)
})

// Listener mosemove
slidesContainer.addEventListener('mousemove', (e) => mouseDown ? imageDisplay(e) : null)

// Listener mouseup
slidesContainer.addEventListener('mouseup', () => {
  startSlide()
  mouseDown = false
  modalWindow.style.backgroundImage = ``  // Clean background
})

// Image display
const imageDisplay = (e) => {
  
  let srcImage = slides[index].firstChild.getAttribute('src') // Get image src name 
  modalWindow.style.backgroundImage = `url(${srcImage})` // Set background image
  
  // Set position
  modalWindow.style.backgroundPositionX = `${(modalWindow.clientWidth /2 * 0.8) - e.offsetX*2}px`
  modalWindow.style.backgroundPositionY = `${(modalWindow.clientHeight /2 * 0.8) - e.offsetY*2}px`

}


