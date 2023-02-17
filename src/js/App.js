import slider from "./slider.js";
import options from "./options.js";
import ItemList from "./ItemList.js";
import Item from "./Item.js";
import Form from "./Form.js";

new Vue({
  el: "#app",
  components: {
    "vue-item-list": ItemList,
    "vue-item": Item,
	 "vue-form": Form,
  },
  mounted() {
    slider();
    options();
  },
});
