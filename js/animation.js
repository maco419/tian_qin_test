var slideContainer = null
var slideDis = 0
var currentIndex = 0
var lastIndex = 4
var timer = null

function getSlideInfo(){
    var slideItems = document.getElementsByClassName("slideItem")
    slideItems = Array.from(slideItems)
    slideDis = slideItems[0].offsetWidth
    slideContainer = document.getElementsByClassName("slideContainer")
    slideContainer = Array.from(slideContainer)
    slideContainer = slideContainer[0]

    slideContainer.style.left = "0"
    timer = setInterval(moveRight, 5000);
}

async function moveRight(){
    lastIndex = currentIndex
    if (currentIndex == 5){
        slideContainer.classList.remove("slideAnimation")
        slideContainer.style.left = "0px"
        currentIndex = 0
        await sleep(100)
        slideContainer.classList.add("slideAnimation")
    }
    currentIndex += 1
    slideContainer.style.left = -currentIndex * slideDis + "px"
    changeButton()
}

async function moveLeft(){
    lastIndex = currentIndex
    if (currentIndex == 0){
        slideContainer.classList.remove("slideAnimation")
        slideContainer.style.left = -5 * slideDis + "px"
        currentIndex = 5
        await sleep(100)
        slideContainer.classList.add("slideAnimation")
    }
    currentIndex -= 1
    slideContainer.style.left = -currentIndex * slideDis + "px"
    changeButton()
}

async function toShow(index){
    lastIndex = currentIndex
    var dis = 0
    if (index == 0){
        dis = 5 * slideDis
    }
    else{
        dis = index * slideDis
    }

    slideContainer.classList.remove("slideAnimation")
    slideContainer.style.left = -dis + "px"
    await sleep(100)
    slideContainer.classList.add("slideAnimation")
    currentIndex = index

    changeButton()
}

function changeButton(){

    if (currentIndex == 5){
        currentIndex = 0
    }

    var slideButtons = document.getElementsByClassName("slideButton")
    slideButtons = Array.from(slideButtons)

    // console.log(currentIndex, " ", lastIndex)

    slideButtons[lastIndex].classList = ["slideButton buttonUnselected"]
    slideButtons[currentIndex].classList = ["slideButton buttonSelected"]

}

function sleep(time){
    return new Promise((resolve) => setTimeout(resolve, time))
}

function stop(){
    // console.log("timer stop")
    clearInterval(timer)
}

function restart(){
    // console.log("timer restart")
    timer = setInterval(moveRight, 5000);
}


function selectFooterLink(ele){
    if (ele.className.includes("selectedFooterLink")){
        ele.classList.remove("selectedFooterLink")
    }
    else{
        ele.classList.add("selectedFooterLink")
    }
    
}


function loadSlideBlock(){
    var naviItems = document.getElementsByClassName("naviItem")
    naviItems = Array.from(naviItems)
    var itemCount = naviItems.length - 1
    var offSetWidth = naviItems[0].offsetWidth
    naviItems.forEach(function(value, index){
        value.addEventListener("mouseover", function(){
            var slideBlock = document.getElementById("naviSlideBlock")
            var dis = (itemCount - index) * offSetWidth
            slideBlock.style.right = dis + "px"
            // console.log(dis)

        })
    })
}



