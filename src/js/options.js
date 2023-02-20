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
	<p class="text-2xs leading-1 font-bold text-main">
		${text}
	</p>
`;

// Змінна, необхідна для затрики початку анімації у кожного наступного елемента в optionsList
let animDuration = 0;

// Функція визначає чи знаходиться елемент з зоні видимості екрана
function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

  return isVisible;
}

export default function options() {
  const optionsBlock = document.querySelector("#option-items");

  //   Функція запуску анімації
  function runAnimation() {
    // Якщо користувач доскролив до елемента
    if (isScrolledIntoView(optionsBlock)) {
      // Перебираємо всі елементи в списку optionsBlock
      optionsBlock.querySelectorAll(".item").forEach((el) => {
        // Через певний проміжок часу додаємо елементу клас active для запуску анімації
        setTimeout(() => {
          !el.classList.contains("active") && el.classList.add("active");
        }, animDuration);
        //   Збільшуємо затримку запуску анімації для наступного елемента на 1 секунду (анімація триває 1 секунду)
        animDuration += 1000;
      });
    }
  }

  //   Рендеримо всі опції
  optionsList.forEach((el) => {
    // Створюємо новий item
    const item = document.createElement("div");
    item.classList.add("item");

    //  Заповнюємо item контентом
    item.innerHTML = optionsItem(el.icon, el.text);

    //  Додаємо item в список опцій
    optionsBlock.append(item);
  });

  //   Змінна, необхідна для зменшення кількості разів виконання onscroll функції в секунду
  let debounce_timer = true;

  window.addEventListener("scroll", () => {
    // Якщо функцію виконати дозволено
    if (debounce_timer) {
      // Обнуляємо дозвіл на виконання функції
      debounce_timer = false;

      // Виконуємо функцію
      runAnimation();

      // Надаємо дозвіл на повторне виконання функції через 0.2 секунди
      // (таким чином функція на scroll виконуватиметься 10 разів в секунду)
      setTimeout(() => {
        debounce_timer = true;
        //   Цей виклик функції необхідний для ситуації, коли користувач перестав скролити
        //   в час, коли дозвіл на повторне виконання функції ще не було надано
        //   (таким чином ми викличемо останнє виконання функції запуску анімації, навіть якщо
        //   користувач перестав скролити але елемент вже знаходиться в зоні видимості його екрана)
        runAnimation();
      }, 200);
    }
  });
}
