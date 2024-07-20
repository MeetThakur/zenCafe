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
