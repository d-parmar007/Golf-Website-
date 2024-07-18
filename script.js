var cursor = document.querySelector(".cursor")
var main = document.querySelector("body")
var blurr = document.querySelector(".cursor-blur")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
    })

    blurr.style.left = dets.x - 200 + "px"
    blurr.style.top = dets.y - 200 + "px"
})

gsap.to(".nav",{
    backgroundColor: "#000",
    height: "90px",
    duration: 0.5,
    scrollTrigger:{
        trigger: ".nav",
        scroller : "body",
        start: "top: -20%",
        end: "top -21%",
        scrub: 1,
    }
})

gsap.to(".home",{
    backgroundColor : "#000",
    duration:1,
    scrollTrigger:{
        trigger: "home-page",
        scroller : "body",
        start: "top -25%",
        end: "top -70%",
        markers: true,
        scrub: 2.5,
    }
})

