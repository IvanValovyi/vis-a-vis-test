import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const slides = [
  {
    label: "Lorem Ipsum",
    items: [
      "It is a long established fact that a reader will be distracted",
      "The readable content",
      "There are many variations of passages",
    ],
  },
  {
    label: "Lorem Ipsum",
    items: [
      "It is a long established fact that a reader will be distracted",
      "The readable content",
      "There are many variations of passages",
    ],
  },
  {
    label: "Lorem Ipsum",
    items: [
      "It is a long established fact that a reader will be distracted",
      "The readable content",
      "There are many variations of passages",
    ],
  },
  {
    label: "Lorem Ipsum",
    items: [
      "It is a long established fact that a reader will be distracted",
      "The readable content",
      "There are many variations of passages",
    ],
  },
  {
    label: "Lorem Ipsum",
    items: [
      "It is a long established fact that a reader will be distracted",
      "The readable content",
      "There are many variations of passages",
    ],
  },
];

export default function slider() {
  slides.forEach((el) => {
    let items = "";

    el.items.forEach((item) => {
      items += `
		<li class="text-s font-light leading-1_4 text-main">${item}</li>
	`;
    });

    document.querySelector("#swiper-wrapper").innerHTML += `
	 <div class="swiper-slide">
		<div class="label">
			<div class="circle m"></div>
			<span class="text-l font-normal leading-0_9 text-main">${el.label}</span>
		</div>
		<ul class="blue-dot-list">${items}</ul>
	 </div>`;
  });

  const swiper = new Swiper(".swiper", {
    slidesPerView: 1.1,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
	 breakpoints:{
		1220:{
			slidesPerView: 2.1,
		},
		1700:{
			slidesPerView: 3,
		},
	 }
  });
  console.log(swiper);
}
