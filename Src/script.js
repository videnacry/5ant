
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

let publicityBackground = document.getElementById("publicity-background")
publicityBackground.addEventListener("click",function(){
    hideElement("publicity-welcome")
    
})

let closePublicity = document.querySelectorAll("#publicity-carrousel .close-article")
closePublicity.forEach(function(button){
    button.addEventListener("click",function(){
        hideElement("publicity-welcome")
    })
})

function hideElement(id){
    let element = document.getElementById(id)
    element.classList.add("small-resize")
    setTimeout(function(){
        element.style.display="none"
    },1000)
}

function hideElements(querySelector){
    document.querySelectorAll(querySelector).forEach(function(element){
        element.classList.toggle("hide")
    })
}
let publicityCarrousel = document.getElementById("publicity-carrousel")
let publicityWelcome = document.getElementById("publicity-welcome")
publicityWelcome.addEventListener("click",function(){
    if(event.target == publicityCarrousel){
        hideElement("publicity-welcome")
    }
})

let newStuff = document.querySelector(".publicity audio")
let playing = false
let playNewStuff = document.getElementById("play-new-stuff")
playNewStuff.addEventListener("click",function(){
    if(!playing){
        newStuff.play()
        newStuff.controls=true
        playNewStuff.src="Src/Assets/pause.png"
        playing=true
    }
    else{
        newStuff.pause()
        newStuff.controls=false
        playNewStuff.src="Src/Assets/play.png"    
        playing=false    
    }
})

let headerPlay = document.getElementById("header-play")
let headerVideo = document.getElementById("header-video")
let quitHeaderVideo = document.getElementById("quit-header-video")
headerPlay.addEventListener("click",function(){
    headerPlay.src="Src/Assets/pause.png"
    headerVideo.src="https://www.youtube.com/embed/wC28zeqfngI?playlist=226rRAesy08&&autoplay=1"
    headerVideo.classList.remove("hide")
    headerVideo.classList.add("big-resize")
    quitHeaderVideo.classList.remove("hide")
    quitHeaderVideo.classList.add("max-resize")
})
quitHeaderVideo.addEventListener("click",function(){
    headerPlay.src="Src/Assets/play.png"
    quitHeaderVideo.classList.add("hide")
    headerVideo.classList.add("hide")
    headerVideo.src=""
})

let cardImgOverlay = document.getElementsByClassName("card-img-overlay")
for(let i = 0; i<cardImgOverlay.length; i++){
    cardImgOverlay[i].addEventListener("mouseover",function(){
        cardHover(0,1)
    })
    cardImgOverlay[i].addEventListener("mouseout",function(){
        cardHover(1,0.5)
    })
    function cardHover(opacity,opacityImg){
        let parent=event.currentTarget.parentElement
        parent.getElementsByClassName("card-img")[0].style.opacity=opacityImg
        changeStyle("card-text")
        changeStyle("card-title")
        function changeStyle(className){
            let cardElements = parent.getElementsByClassName(className)
            for(i=0;i<cardElements.length;i++){
                cardElements[i].style.opacity=opacity
            }
        }
    }
}