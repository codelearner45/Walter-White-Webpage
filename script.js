var tl = gsap.timeline()

tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3
})
tl.from("#nav i",{
    y:-50,
    opacity:0,
    // delay:0.1,
    duration:0.4,
    stagger:0.1
})

tl.from("#main h1", {
    x:-500,
    opacity:0,
    stagger:0.7
})

tl.from("#img2", {
    y:400,
    opacity:0,
    // scale:1,
    // stagger:-1
})

