import vueSliderComponent from 'https://cdn.jsdelivr.net/npm/vue-slider-component/+esm'

export default Vue.component("range-slider", {
  components: {
	vueSliderComponent,
  },
  data() {
    return {
      value: 0,
    };
  },
  template: `
  	<vue-slider-component
		tooltip="always"
		min="0"
		max="7000"
		interval="500"
		height="4px"
		marks=""
		v-model="value">
			<template v-slot:dot>
				<div class="slider-dot"></div>
			</template>
			<template v-slot:tooltip="{ value }">
			<div class="tooltip">{{ value }} грн</div>
			</template>
			<template v-slot:step="{ active, value }">
				<div class="step" v-if="value%1000 != 0"></div>
			</template>
			<template v-slot:label="{ label, active }">
				<div class="label" v-if="+label%1000 != 0">
					{{ label }} грн
				</div>
			</template>
			<template v-slot:process="{ start, end, style, index }"></template>
  	</vue-slider-component>
  `,
});
