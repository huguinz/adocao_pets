'use strict'

export function loginPageElements() {
	const elements = {
		underlayContainer: document.querySelectorAll(' .container_underlay_form ')[0],
		overlayContainer: document.querySelectorAll(' .container_overlay_form ')[0],
		toggleFormButton: document.querySelectorAll(' .toggle_form_button '),
		getByToggleClass: document.getElementsByClassName('toggle_register'),
		overlayContainerLogin: document.querySelectorAll(' .login_desc ')[0],
		overlayContainerRegister: document.querySelectorAll(' .register_desc ')[0],
		nameUserRegister: document.getElementById('input_name'),
		emailUserRegister: document.getElementById('input_email_register'),
		passwordUserRegister: document.getElementById('input_password_register'),
		moveClass: document.querySelectorAll(' .move '),
		unmoveClass: document.querySelectorAll(' .unmove '),
		inputsRegister: document.getElementsByName('register'),
		inputsLogin: document.getElementsByName('login'),
		optionsInputRegister: document.querySelectorAll('.options_input_register'),
		registerButton: document.getElementById('register_btn'),
		formRegister: document.querySelectorAll('.sign_up')[0],
		formLogin: document.querySelectorAll('.sign_in')[0],
		loginButton: document.getElementById('login_btn'),
		optionsCheckbox: document.getElementById('options_view_button'),
		optionsBox: document.getElementById('label_for_options'),
		optionsContainer: document.querySelectorAll('.dropdown_hidden')[0],
		personalIdentification: document.querySelectorAll('label[for="input_doc"]')[0],
		personalIdentificationInput: document.getElementById('input_doc'),
		dateOfBirthInput: document.getElementById('input_date_of_birth'),
		labelDateOfBirthInput: document.querySelectorAll('label[for="input_date_of_birth"]')[0],
		emailUser: document.getElementById('input_email'),
		passwordUser: document.getElementById('input_password')
	}

	return elements
}
