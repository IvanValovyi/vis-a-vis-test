import vueRangeComponent from "https://cdn.jsdelivr.net/npm/vue-range-component@1.0.3/+esm";

export default Vue.component("range-slider", {
  components: {
    vueRangeComponent,
  },
  data() {
    return {
      value: 0,
    };
  },
  template: `
  <vue-range-slider
		min="0"
		max="7000"
		height="4"
		step="500"
		piecewise
		v-model="value">
		<div class="tooltip" slot="tooltip" slot-scope="{ value }">
			<span class="text-s leading-1 font-normal">{{ value }} грн</span>
		</div>
		
		<div  slot="piecewise" slot-scope="{ label, index }" class="piecewise" v-if="index%2!=0">
			<p class="label text-s leading-1 font-normal">{{label/10}} грн</p>
		</div>
	</vue-range-slider> 
  `,
});
