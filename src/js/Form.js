export default Vue.component("vue-form", {
  data() {
    return {
      errors: {},
      showErrors: false,
      name: null,
      phone: null,
      email: null,
      checked: false,
    };
  },
  watch: {
    phone() {
      this.errors.phone = !this.validPhoneNumber(this.phone);
    },
    email() {
      this.errors.email = !this.validEmail(this.email);
    },
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      this.errors = {
        phone: false,
        email: false,
      };

      this.errors.phone = !this.validPhoneNumber(this.phone);
      this.errors.email = !this.validEmail(this.email);

      if (
        this.name &&
        !this.errors.phone &&
        !this.errors.email &&
        this.checked
      ) {
        fetch("/vb", {
          method: "POST",
        }).then((res) => {
          alert(`Response status is: ${res.status}`);
        });
      } else {
        this.showErrors = true;
      }
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPhoneNumber: function (input_str) {
      var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

      return re.test(input_str);
    },
  },
  template: `
  <form @submit="checkForm">
	<h3 class="text-xm text-main font-bold leading-1">
		It is a long established fact that a reader
	</h3>
	<div class="input-name">
		<div class="input-default required">
			<input id="name" type="text" v-model="name" :value="name" :class="{ 'valid': name }"/>
			<label for="name" class="label">Name</label>
			<div class="line"></div>
		</div>
		<p class="error text-main" v-if="(!name && showErrors)">The name field is required, please fill it out.</p>
	</div>

	<div class="input-phone">
		<div class="input-default required">
			<input id="phone" type="text" v-model="phone" :value="phone" :class="{ 'valid': phone }"/>
			<label for="phone" class="label">Phone</label>
			<div class="line"></div>
		</div>
		<p class="error text-main" v-if="(errors.phone && showErrors)">Incorrect phone format, please enter a valid phone (for example: "096 123 2233").</p>
	</div>

	<div class="input-email">
		<div class="input-default required">
			<input id="email" type="text" v-model="email" :value="email" :class="{ 'valid': email }"/>
			<label for="email" class="label">E-mail</label>
			<div class="line"></div>
		</div>
		<p class="error text-main" v-if="(errors.email && showErrors)">Incorrect e-mail address format, please enter a valid e-mail address (for example: "email@test.com").</p>
	</div>
	<div class="bottom">
		<div class="checkbox">
			<div class="input">
				<input id="check" type="checkbox" v-model="checked" :value="checked"/>
				<label for="check" class="text-s font-normal leading-1_1"
				>Lorem Ipsum is simply dummy text</label
				>
			</div>
			<p class="error text-main" v-if="(!checked && showErrors)">Agree to the privacy policy, it is mandatory.</p>
		</div>
		<button class="blue-button button-size-m">Lorem Ipsum</button>
	</div>
	</form>
	 `,
});
