let publicity = document.getElementById("publicity-background")
let carrousel = createCarrousel("#publicity-carrousel .publicity","publicity-prev","publicity-next")
let publicityElements = carrousel.elements
let publicityQuantity = carrousel.quantity
let publicityPosition = 0

function createCarrousel(divs,leftButton,rightButton){
    let elements = document.querySelectorAll(divs)
    let quantity = elements.length
    elements.forEach(function(element){
        element.style.zIndex=0
    })
    elements[0].style.zIndex=1
    leftButton=document.getElementById(leftButton)
    leftButton.addEventListener("click",function(){
        passElement("left",0,quantity-1)
    })
    rightButton=document.getElementById(rightButton)
    rightButton.addEventListener("click",function(){
        passElement("right",quantity-1,0)
    })
    return {elements:elements,quantity:quantity}
    function passElement(direction,begin,end){
        let button = event.target
        let publicityElement = publicityElements[publicityPosition]
        fade(publicityElement,2,"fade-"+direction)
        if(publicityPosition==end){
            publicityPosition=begin
            publicityElements[begin].style.zIndex=1
        }
        else{
            position=(direction=="left")?++publicityPosition:--publicityPosition
            publicityElements[publicityPosition].style.zIndex=1
        }
    }
    function fade(element,zIndex,classTogle){
        element.classList.toggle(classTogle)
        element.style.zIndex=zIndex
        setTimeout(function(){
            element.style.zIndex=0
            element.classList.toggle(classTogle)
        },600)
    }
}
