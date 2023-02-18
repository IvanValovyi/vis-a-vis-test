import slider from "./slider.js";
import options from "./options.js";
import ItemList from "./ItemList.js";
import Item from "./Item.js";
import Form from "./Form.js";
import RangeSlider from "./RangeSlider.js";

new Vue({
  el: "#app",
  components: {
    "vue-item-list": ItemList,
    "vue-item": Item,
    "range-slider": RangeSlider,
    "vue-form": Form,
  },
  mounted() {
    slider();
    options();
  },
});
