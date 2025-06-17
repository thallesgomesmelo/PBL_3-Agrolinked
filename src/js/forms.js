const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("form-success");
const submitBtn = document.getElementById("submitBtn");

contactForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const fieldsIsOk = validateFields();

	if (fieldsIsOk) {
		// Show loading state
		submitBtn.textContent = "Enviando...";
		submitBtn.disabled = true;

		// Simulate form submission (replace with actual form submission)
		setTimeout(() => {
			contactForm.style.display = "none";
			formSuccess.classList.add("active");

			// Reset form
			contactForm.reset();

			// Reset form after 5 seconds
			setTimeout(() => {
				formSuccess.classList.remove("active");
				contactForm.style.display = "grid";
				submitBtn.textContent = "Enviar Mensagem";
				submitBtn.disabled = false;
			}, 5000);
		}, 1500);
	}
});

function validateFields() {
	const forms = new CreateComponents({
		components: [
			{ name: "error", selector: "span[id^=error-]" },
			{ name: "input", selector: "[id^=input-]" },
		],
	});

	// Resetando os campos para o modo inicial.
	for (const span in forms.error) {
		forms.error[span].textContent = "";
		forms.error[span].classList.remove("error-message");
	}

	let isValid = true;

	// Validação Nome
	if (forms.input.name.value.trim() === "") {
		forms.error.name.textContent = "Por favor, informe seu nome.";
		forms.error.name.classList.add("error-message");
		isValid = false;
	}

	// Validação E-mail
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (forms.input.email.value.trim() === "") {
		forms.error.email.textContent = "Por favor, informe seu e-mail.";
		forms.error.email.classList.add("error-message");
		isValid = false;
	} else if (!emailPattern.test(forms.input.email.value.trim())) {
		forms.error.email.textContent = "E-mail inválido.";
		forms.error.email.classList.add("error-message");
		isValid = false;
	}

	// Validação Telefone
	const phonePattern = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
	if (
		forms.input.phone.value.trim() === "" ||
		!phonePattern.test(forms.input.phone.value.trim())
	) {
		forms.error.phone.textContent = "Telefone inválido.";
		forms.error.phone.classList.add("error-message");
		isValid = false;
	}

	// Validação Mensagem
	if (forms.input.message.value.trim() === "") {
		forms.error.message.textContent = "Por favor, escreva uma mensagem.";
		forms.error.message.classList.add("error-message");
		isValid = false;
	}

	// Se validação for true, envia o formulário.
	return isValid;
}
