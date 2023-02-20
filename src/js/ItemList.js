const itemsList = [
  {
    label: "Lorem Ipsum is simply dummy text",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    items: [
      "Lorem Ipsum has been the industry's",
      "Standard dummy text ever since",
      "But also the leap into electronic typesetting",
    ],
  },
  {
    label: "Lorem Ipsum is simply dummy text",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    items: [
      "Lorem Ipsum has been the industry's",
      "Standard dummy text ever since",
      "But also the leap into electronic typesetting",
      "It was popularised in the 1960s",
    ],
  },
  {
    label: "Lorem Ipsum is simply dummy text",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    items: [
      "Lorem Ipsum has been the industry's",
      "Standard dummy text ever since",
      "But also the leap into electronic typesetting",
    ],
  },
  {
    label: "Lorem Ipsum is simply dummy text",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    items: [
      "Lorem Ipsum has been the industry's",
      "Standard dummy text ever since",
      "But also the leap into electronic typesetting",
    ],
  },
  {
    label: "Lorem Ipsum is simply dummy text",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    items: [
      "Lorem Ipsum has been the industry's",
      "Standard dummy text ever since",
      "But also the leap into electronic typesetting",
    ],
  },
];

// Функція рандомізації масиву
function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  // Перебираємо масив поки currentIndex != 0
  while (currentIndex != 0) {
    // Створюємо рандомний індекс.
    randomIndex = Math.floor(Math.random() * currentIndex);

    currentIndex--;

    // Міняємо місцями елемент з індексом currentIndex і елемент з індексом randomIndex
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default Vue.component("vue-item-list", {
  data() {
    return {
      // Створюємо рандомізований масив itemsList
      itemsList: shuffle(itemsList),
    };
  },
  template: `
	<div class="list">
		<vue-item v-for="(item, index) in itemsList" :key="item.message" :item="item" :index="index"></vue-item>
	</div>
	`,
});
