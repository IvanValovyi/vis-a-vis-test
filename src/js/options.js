const optionsList = [
  {
    icon: "id-card",
    text: "Lorem Ipsum is simply dummy",
  },
  {
    icon: "smartphone",
    text: "Lorem Ipsum is simply dummy",
  },
  {
    icon: "laptop",
    text: "Lorem Ipsum is simply dummy",
  },
  {
    icon: "chat",
    text: "Lorem Ipsum is simply dummy",
  },
  {
    icon: "line-chart",
    text: "Lorem Ipsum is simply dummy",
  },
];

const optionsItem = (icon, text) => `
	<svg>
		<use xlink:href="./sprite.svg#${icon}"></use>
	</svg>
	<div class="progress">
		<div class="point"></div>
		<div class="track"></div>
	</div>
	<p class="text-sm leading-1 font-bold text-main">
		${text}
	</p>
`;

let animDuration = 0;

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

  return isVisible;
}

export default function options() {
  const optionsBlock = document.querySelector("#option-items");

  optionsList.forEach((el, i) => {
    const item = document.createElement("div");
    item.classList.add("item");

    item.innerHTML = optionsItem(el.icon, el.text);

    optionsBlock.append(item);
  });

  let debounce_timer = true;

  window.addEventListener("scroll", () => {
    if (debounce_timer) {
      if (isScrolledIntoView(optionsBlock)) {
        optionsBlock.querySelectorAll(".item").forEach((el) => {
          setTimeout(() => {
            !el.classList.contains("active") && el.classList.add("active");
          }, animDuration);
          animDuration += 1000;
        });
      }

      debounce_timer = false;
      setTimeout(() => {
        debounce_timer = true;
      }, 200);
    }
  });
}
