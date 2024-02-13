function ans(){

gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
ans();



function cursoreffect (){


var page1 = document.querySelector(".page1-content")
var crsr = document.querySelector(".cursor")

page1.addEventListener("mousemove",function(dets){
  gsap.to(crsr,{
    x:dets.x,
    y:dets.y
  })
});

page1.addEventListener("mouseenter",function(){
    gsap.to(crsr,{
        scale:1,
        opacity:1     
    });
});

page1.addEventListener("mouseleave",function(){
    gsap.to(crsr,{
        scale:0,
        opacity:0
    });  
});
}
cursoreffect()

function page2animation(){
    gsap.from(".second-text-container p",{
        y:120,
        stagger:0.25,
        duration: 1,
        scrollTrigger: {
            trigger: ".page2",
            scroller: ".main",
            start:"top 40%",
            end: "top 37%",
            // markers: true,  
        }
    })
}
// page2animation();

var loader = ()=>{

var tl = gsap.timeline()
tl.from(".loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to(".loader h3",{
    opacity: 0,
    x: -10,
    duration:1,
    stagger:0.1
})
tl.to(".loader",{
    opacity: 0
})
tl.from(".page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay: -0.5
})
tl.to(".loader",{
    display: "none"
})

}
// loader()

var takeone = document.querySelector(".take-one")
var biggboss = document.querySelector(".bigg-boss")
biggboss.addEventListener("mousemove",function(dets){
  gsap.to(takeone,{
    x:dets.x,
    y:dets.y
  })

})
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// var vd = document.querySelector("#svg")
// var button = document.querySelector("#btt")
// vd.addEventListener("click",function(){
//   button.innerHTML = `<a href="practise.html"></a> `
// })
