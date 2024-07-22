
gsap.registerPlugin(ScrollTrigger) 

var line = document.querySelector('.line');
var width = line.offsetWidth;
var ipath = `M 0 50 Q ${width/2} 50 ${width} 50`;

var path = document.querySelector('.path');
path.setAttribute('d', ipath);

line.addEventListener('mousemove', function(e) {
    var d = `M 10 50 Q ${line.offsetWidth/2} ${e.clientY - line.getBoundingClientRect().top} ${line.offsetWidth} 50`;
    gsap.to("svg path",{
        attr: {d: d},
})
});

line.addEventListener('mouseleave', function(e) {
    gsap.to("svg path",{
        attr: {d: `M 10 50 Q ${line.offsetWidth/2} 50 ${line.offsetWidth} 50`},
        ease: "elastic.out(1,0.2)",
        duration: 1,
    })
});


var tl  = gsap.timeline();

tl.to(".loader",{
	delay: 3,
	opacity: 0,
	display: "none",
});

tl.to("html",{
	overflowY:"scroll",
})

tl.from('nav',{
    opacity: 0,
    duration: 0.8,
})

tl.from('nav a',{
    y: -5,
    opacity: 0,
    duration: 0,
})

tl.from('.tagline',{
    y: -50,
    opacity: 0,
    duration: 0.8,
}
)

tl.from('.estb',{
    x: -50,
    opacity: 0,
    duration: 0.8,
})


tl.from('.bgText',{
    z: -50,
    opacity: 0,
    duration: 0.8,
})


gsap.from('#story .title', {
    scrollTrigger: {
        trigger: '#story .title',
        start: 'top 60%',
        end: 'top 20%',
        scrub:2,
    },
    opacity:0,
    y:-100,
})


gsap.from('#story p', {
    scrollTrigger: {
        trigger: '#story .title',
        start: 'top 60%',
        end: 'top 20%',
        scrub:2,
    },
    opacity:0,
    y:-100,
})


gsap.from('.strbg', {
    scrollTrigger: {
        trigger: '#story .title',
        start: 'top 20%',
        end: 'top 0%',
        scrub:2,
        duration: 3,
    },
    opacity:0,
})


gsap.from('#menu .title', {
    scrollTrigger: {
        trigger: '#menu',
        start: 'top 60%',
        end: 'top 30%',
        scrub:2,
    },
    opacity:0,
    y:-100,
})

gsap.from('#menu #one', {
    scrollTrigger: {
        trigger: '#menu',
        start: 'top 40%',
        end: 'top 30%',
        scrub:2,
    },
    opacity:0,
    x:-200,
})

gsap.from('#menu #two', {
    scrollTrigger: {
        trigger: '#menu',
        start: 'top 40%',
        end: 'top 30%',
        scrub:2,
    },
    opacity:0,
    x:200,

})

gsap.from('.m1', {
    scrollTrigger: {
        trigger: '#menu',
        start: 'top 40%',
        end: 'top 30%',
        scrub:2,
    },
    opacity:0,
    y:200,
})


gsap.from('.m2', {
    scrollTrigger: {
        trigger: '#menu',
        start: 'top 40%',
        end: 'top 30%',
        scrub:2,
    },
    opacity:0,
y:-200,
})

gsap.from('#blog .title', {
    scrollTrigger: {
        trigger: '#blog',
        start: 'top 60%',
        end: 'top 20%',
        scrub:2,
    },
    opacity:0,
    y:-100,
})

gsap.from('.bbg', {
    scrollTrigger: {
        trigger: '#blog',
        start: 'top 20%',
        end: 'top 0%',
        scrub:2,
    },
    opacity:0,
    x:-100,
})


gsap.from('.cards', {
    scrollTrigger: {
        trigger: '.cards',
        start: 'top 60%',
        end: 'top 30%',
        scrub:2,
    },
    opacity:0,
    scale:0.8,
})    

gsap.from('#book .title', {
    scrollTrigger: {
        trigger: '#book',
        start: 'top 60%',
        end: 'top 20%',
        scrub:2,
    },
    opacity:0,
    y:-100,
})


gsap.from('#book form', {
    scrollTrigger: {
        trigger: '#book',
        start: 'top 60%',
        end: 'top 20%',
        scrub:2,
    },
    opacity:0,
    scale:0.8,
})


gsap.from('.bookbg', {
    scrollTrigger: {
        trigger: '#book',
        start: 'top 20%',
        end: 'top 0%',
        scrub:2,
    },
    opacity:0,
})

gsap.from('#contact .imggrid', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
        end: 'top 60%',
        scrub:2,
    },
    opacity:0,
    x:-100,
})

