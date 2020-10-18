// var windowHeight =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
//     lastTop;

// window.addEventListener('scroll', function(event) {
//   var train = document.getElementById('trainMotion'),
//       top = train.getBoundingClientRect().top,
//       offset = top - windowHeight;
//     console.log(offset,top,windowHeight)
//       if (offset > 0) {
//         train.classList.remove('choochoo');
//         return;
//       }

//       if (top < windowHeight / 2 && top > lastTop) {
//         train.classList.remove('choochoo');
//       }

//       if (train.className.indexOf('choocho') === -1 && top < lastTop) {
//         train.classList.add('choochoo');
//       }

//       lastTop = top;

// });

// var ticking = false;
// var lastScrollLeft = 0;
// $(window).scroll(function() {
//   if (!ticking) {
//         window.requestAnimationFrame(function() {
//             var documentScrollLeft = $(document).scrollLeft();
//           console.log($(document).scrollLeft())
//             if (lastScrollLeft != documentScrollLeft) {
//                 console.log('scroll x');
//                 lastScrollLeft = documentScrollLeft;
//             }

//             ticking = false;
//         });
//         ticking = true;
//     }
// });



// $(window).scroll(function(){
//   var wh = $(window).height();
//     if($(window).scrollTop() >= $('#onScroll').offset().top-wh){
//       $('#onScroll').css('left', Math.max(0 - window.scrollY) + 'px' )
//     }
//     console.log(Math.max(0 - window.scrollY) + 'px')
// });

const block2 = document.querySelectorAll('.block2');
const block1 = document.querySelectorAll('.block1');
var row = document.querySelector('.col-md-12').getBoundingClientRect()
const controller = new ScrollMagic.Controller();


let tl3 = new TimelineMax();
tl3
  .from(block2, .5, {x: row.width-350,  ease: Linear.easeNone}, "-=.5")
//   .to(block2, .5, {x: row.width-350}, "-=.5")

let tl2 = new TimelineMax();
tl2
  .from(block1, .5, {x: -row.width,  ease: Linear.easeNone}, "-=.5")
//   .to(block1, .5, {x: -row.width}, "-=.5")

const scene = new ScrollMagic.Scene({
  triggerElement: ".two2",
  triggerHook: "onLeave",
  duration: 200
})
  .setPin(".two2")
  .setTween(tl3)
  .addTo(controller);

  const scene1 = new ScrollMagic.Scene({
  triggerElement: ".two1",
  triggerHook: "onLeave",
  duration: 200
})
  .setPin(".two1")
  .setTween(tl2)
  .addTo(controller);

