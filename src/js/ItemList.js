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

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
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
      itemsList: shuffle(itemsList),
    };
  },
  template: `
	<div class="list">
		<vue-item v-for="(item, index) in itemsList" :key="item.message" :item="item" :index="index"></vue-item>
	</div>
	`,
});
