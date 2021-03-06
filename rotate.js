//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX

document.addEventListener("mousemove", function(event) {
  const x = event.pageX
  const y = event.pageY
  const midX = x - window.innerWidth / 2
  const midY = y - window.innerHeight / 2
  
  const box = document.querySelector("section")
  
    box.style.left = x + "px"
    box.style.top = y + "px"
    
    box.style.transform = "rotateX(" + midY + "deg) rotateY(" + midX + "deg)"

})
