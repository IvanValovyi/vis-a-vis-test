import slider from "./slider.js";
import options from "./options.js";
import ItemList from "./ItemList.js";
import Item from "./Item.js";
import form from "./form-validation.js";
import RangeSlider from "./RangeSlider.js";

new Vue({
  el: "#app",
  components: {
    "vue-item-list": ItemList,
    "vue-item": Item,
    "range-slider": RangeSlider,
  },
  mounted() {
    slider();
    options();
    form();
  },
});
