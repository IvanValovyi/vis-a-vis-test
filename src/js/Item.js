export default Vue.component("vue-item", {
  props: ["item", "index"],
  template: `
	<div class="item">
		<div class="circle-block">
			<div class="circle gray" :class="{'rotate-anim m': index==0, 'l': index!=0}">
				<div class="image" v-if="index==0">
					<img src="./images/spin-circle.webp" alt="Spin circle">
				</div>
			</div>
		</div>

		<span class="label text-main text-xm font-bold leading-1_2">{{item.label}}</span>
		<span class="description text-xs leading-1_4 font-light text-main">{{item.text}}</span>

		<ul class="blue-dot-list">
			<li v-for="el in item.items" :key="el" class="text-xs leading-1_4 font-light text-main">{{el}}</li>
		</ul>
	</div>
	`,
});
