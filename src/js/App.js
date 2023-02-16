import slider from "./slider.js";

new Vue({
  el: "#app",
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  mounted() {
    slider();
  },
});
