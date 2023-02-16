import slider from "./slider.js";
import options from "./options.js";

new Vue({
  el: "#app",
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
