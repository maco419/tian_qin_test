

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

