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
		telephoneUserRegister: document.getElementById('input_telephone')
	}

	return elements
}
