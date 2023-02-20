// Функція валідації імені
function validName(name) {
  return name ? true : false;
}
// Функція валідації електронної пошти
function validEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
// Функція валідації номеру телефону
function validPhoneNumber(input_str) {
  const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(input_str);
}

// Масив з данними всіх полів форми
const formInputs = [
  {
    label: "Name",
    id: "name",
    className: "input-name",
    type: "text",
    isRequired: true,
    errorText: "The name field is required, please fill it out.",
    value: "",
    validFunction: validName,
  },
  {
    label: "Phone",
    id: "phone",
    className: "input-phone",
    type: "tel",
    isRequired: true,
    errorText:
      'Incorrect phone format, please enter a valid phone (for example: "096 123 2233").',
    value: "",
    validFunction: validPhoneNumber,
  },
  {
    label: "E-mail",
    id: "email",
    className: "input-email",
    type: "email",
    isRequired: true,
    errorText:
      'Incorrect e-mail address format, please enter a valid e-mail address (for example: "email@test.com").',
    value: "",
    validFunction: validEmail,
  },
];

// Масив помилок форми
const formErrors = [];

// Функція перевірки на валідність полів для вводу (використовуємо для Name, Phone і E-mail)
function checkIsValidInput(inputBlock, el) {
  const input = inputBlock.querySelector("input");
  const errorBlock = inputBlock.querySelector(".error");

  const inputHasContent = input.classList.contains("has-content");
  const errorIsDisplayed = errorBlock.classList.contains("visible");

  //   Якщо інпут не порожній
  if (el.value) {
    // Додаємо клас .has-content (це потрібно для фіксування лейбла зверху)
    !inputHasContent && input.classList.add("has-content");
  } else {
    inputHasContent && input.classList.remove("has-content");
  }

  //   Якщо контент інпута не валідний
  if (!el.validFunction(el.value)) {
    // Якщо помилка ще не показана і масив з помилками форми не порожній
    // (масив з помилками форми заповнюється лише після спроби відправити
    // форму - до цього помилки не відображатимуться)
    !errorIsDisplayed &&
      formErrors.length &&
      errorBlock.classList.add("visible");

    // закінчуємо виконання функції, повертаючи false
    return false;
  }
  //   Якщо помилка відображається - приховуємо її
  errorIsDisplayed && errorBlock.classList.remove("visible");

  // закінчуємо виконання функції, повертаючи true
  return true;
}

// HTML структура блоку інпута
const renderInputBlock = (el) => `
	<div class="input-default ${el.isRequired ? "required" : ""}">
		<input id="${el.id}" type="${el.type}" />
		<label for="${el.id}" class="label">${el.label}</label>
		<div class="line"></div>
	</div>

	<p class="error text-main">${el.errorText}</p>
`;

export default function form() {
  const form = document.querySelector("#form");
  const forminputsBlock = form.querySelector(".inputs");

  //   Функція рендеру полів форми
  formInputs.forEach((el) => {
    // Створюємо блок інпута
    const inputBlock = document.createElement("div");
    inputBlock.className = el.className;

    //  Заповнюємо блок інпута контентом
    inputBlock.innerHTML += renderInputBlock(el);

    // Обробляємо подію введення контенту в інпут
    inputBlock.querySelector("input").addEventListener("input", (e) => {
      el.value = e.target.value;
      checkIsValidInput(inputBlock, el);
    });

    //  Додаємо блок інпута в форму
    forminputsBlock.append(inputBlock);
  });

  //   Логіка взаємодії з чекбоксом
  const checkbox = document.querySelector("#check-input");
  const checkboxError = checkbox.querySelector(".error");
  let isPrivacyPolicyAccepted = false;

  checkbox.querySelector("input").addEventListener("change", (e) => {
    const errorIsDisplayed = checkboxError.classList.contains("visible");
    isPrivacyPolicyAccepted = e.target.checked;
    if (!isPrivacyPolicyAccepted) {
      return (
        !errorIsDisplayed &&
        formErrors.length &&
        checkboxError.classList.add("visible")
      );
    }
    errorIsDisplayed && checkboxError.classList.remove("visible");
  });

  //   Функція відправки форми
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //  Обнуляємо масив з помилками
    formErrors.splice(0, formErrors.length);
    //  Перевіряємо на валідність всі поля для вводу
    formInputs.forEach((el) => {
      // Знаходимо блок інпута
      const inputBlock = form.querySelector(`.${el.className}`);
      // Якщо перевірка на валідність провалилась
      if (!checkIsValidInput(inputBlock, el)) {
        // Записуємо id елемента в масив помилок
        formErrors.push(el.id);
        //   Ще раз запускаємо перевірку на валідність -
        //   це необхідно для відображення помилки
        checkIsValidInput(inputBlock, el);
      }
    });

    //  Перевіряємо чи користувач погодився з політикою конфіденційності
    if (!isPrivacyPolicyAccepted) {
      // Відображаємо помилку
      checkboxError.classList.add("visible");
      // Додаємо помилку в масив помилок форми
      formErrors.push("privacy-policy");
    }

    //  Якщо помилок після перевірки немає
    !formErrors.length &&
      //  Робимо пост запит на фейковий url "/form-sending"
      fetch("/form-sending", {
        method: "POST",
      }).then((res) => {
        // Відображаємо статус помилки користувачеві
        alert(`Error status: ${res.status}`);
      });
  });
}
