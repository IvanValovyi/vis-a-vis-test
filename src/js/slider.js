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

// HTML структура слайду
const renderSlide = (label, items) => `
	<div class="swiper-slide">
		<div class="label">
			<div class="circle m gray"></div>
			<span class="text-2xm font-normal leading-0_9 text-main">${label}</span>
		</div>
		<ul class="blue-dot-list">${items}</ul>
	</div>
`;

export default function slider() {
  // Рендеримо всі слайди
  slides.forEach((el) => {
    // Створюємо елемент списку на слайда
    let items = "";

    //  Рендеримо всі пункти списку
    el.items.forEach((item) => {
      items += `
			<li class="text-xs font-light leading-1_4 text-main">${item}</li>
		`;
    });

    //Рендеримо слайд
    document.querySelector("#swiper-wrapper").innerHTML += renderSlide(
      el.label,
      items
    );
  });

  //   Конфігурація слайдера
  new Swiper(".swiper", {
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
    breakpoints: {
      1220: {
        slidesPerView: 2.1,
      },
      1700: {
        slidesPerView: 3,
      },
    },
  });
}
