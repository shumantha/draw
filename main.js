// egg inside a weasel inside a basket
let egg = 'egg'
let weasel = [egg]
let basket = { 'Jimothy': weasel }

// console.log(basket)

// create a red ball wherever I click
// if click event
document.addEventListener("mousemove", placeDot)
let eggElm
let grabbedEvent
function placeDot(event) {

  listOfPaintingButtons = [1,2]
  if ( !listOfPaintingButtons.includes(event.buttons) ) { return }

  let color = "tomato"
  
  if (event.buttons == 2) {
    color = "#ffa592"

  }
  console.log(event.buttons)
  grabbedEvent = event
  let y = event.pageY
  let x = event.pageX

  //    make red ball
  let egg = document.createElement('div')
  egg.classList.add("ball")
  egg.style.left = "-100%"
  egg.style.top = "-100%"
  //    insert red ball
  
  let eggElement = document.body.appendChild(egg)
  let eggH=eggElement.clientHeight
  let eggW=eggElement.clientWidth
  eggElm = eggElement
  // console.log(eggElement)
  // console.log(eggH, eggW)
  eggElement.style.backgroundColor=color
  egg.style.top = (y-(eggH/2)) + 'px'
  egg.style.left = (x-(eggW/2)) + 'px'


}
