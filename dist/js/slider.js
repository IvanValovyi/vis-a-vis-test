import Swiper from"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";const slides=[{label:"Lorem Ipsum",items:["It is a long established fact that a reader will be distracted","The readable content","There are many variations of passages"]},{label:"Lorem Ipsum",items:["It is a long established fact that a reader will be distracted","The readable content","There are many variations of passages"]},{label:"Lorem Ipsum",items:["It is a long established fact that a reader will be distracted","The readable content","There are many variations of passages"]},{label:"Lorem Ipsum",items:["It is a long established fact that a reader will be distracted","The readable content","There are many variations of passages"]},{label:"Lorem Ipsum",items:["It is a long established fact that a reader will be distracted","The readable content","There are many variations of passages"]}];export default function slider(){slides.forEach((e=>{let a="";e.items.forEach((e=>{a+=`\n\t\t<li class="text-xs font-light leading-1_4 text-main">${e}</li>\n\t`})),document.querySelector("#swiper-wrapper").innerHTML+=`\n\t <div class="swiper-slide">\n\t\t<div class="label">\n\t\t\t<div class="circle m"></div>\n\t\t\t<span class="text-2xm font-normal leading-0_9 text-main">${e.label}</span>\n\t\t</div>\n\t\t<ul class="blue-dot-list">${a}</ul>\n\t </div>`}));new Swiper(".swiper",{slidesPerView:1.1,spaceBetween:30,grabCursor:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"},breakpoints:{1220:{slidesPerView:2.1},1700:{slidesPerView:3}}})}