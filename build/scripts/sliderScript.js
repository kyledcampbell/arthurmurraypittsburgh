const carousel=document.querySelector(".carousel"),slider=document.querySelector(".slider"),slide=document.querySelectorAll(".slide"),slideText=document.querySelectorAll(".slider-text"),next=document.querySelector(".next"),prev=document.querySelector(".prev"),sliderLinks=document.querySelectorAll(".slide a");let Index=1,direction=-1,intervalID=0;const slideTextAnimation=function(){slideText.forEach((e=>e.animate([{transform:"translateX(2%)",opacity:"0",offset:.3},{transform:"translateX(2%)",opacity:"0",offset:.75,easing:"ease-out"},{transform:"translateX(0)",opacity:"1"}],1300)))},slideAnimationScale=function(){slide.forEach((e=>e.animate([{transform:"scale(1)",offset:0},{transform:"scale(.92)",offset:.25,easing:"ease-out"},{transform:"scale(.92)",offset:.8,easing:"ease-out"},{transform:"scale(1)",offset:1,easing:"ease-out"}],1300)))};function startShow(){!0!==navToggle.checked&&(intervalID=setInterval((function(){direction=-1,carousel.style.justifyContent="flex-start",slider.style.transform="translate(-40%)",slideAnimationScale(),slideTextAnimation()}),5e3))}next.addEventListener("click",(function(){direction=-1,carousel.style.justifyContent="flex-start",slider.style.transform="translate(-40%)",slideAnimationScale(),slideTextAnimation(),clearInterval(intervalID),startShow()})),prev.addEventListener("click",(function(){-1===direction&&(direction=1,slider.appendChild(slider.firstElementChild)),carousel.style.justifyContent="flex-end",slider.style.transform="translate(40%)",slideAnimationScale(),slideTextAnimation(),clearInterval(intervalID),startShow()})),slider.addEventListener("transitionend",(function(){1===direction?slider.prepend(slider.lastElementChild):slider.appendChild(slider.firstElementChild),slider.style.transition="none",slider.style.transform="translate(0)",setTimeout((()=>{slider.style.transition="all 1040ms"}))}),!1),sliderLinks.forEach((e=>e.addEventListener("transitionend",(function(e){e.stopImmediatePropagation()})))),startShow(),slider.addEventListener("mouseover",(function(){clearInterval(intervalID)})),slider.addEventListener("touchstart",(function(){clearInterval(intervalID)}),{passive:!0}),slider.addEventListener("mouseout",(function(){startShow()})),slider.addEventListener("touchend",(function(){startShow()}),{passive:!0});let yOffset=window.pageYOffset;