import slider from "./slider.js";
import options from "./options.js";
import ItemList from "./ItemList.js";
import Item from "./Item.js";

new Vue({
  el: "#app",
  components: {
    "vue-item-list": ItemList,
    "vue-item": Item,
  },
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  mounted() {
    slider();
    options();
  },
});
