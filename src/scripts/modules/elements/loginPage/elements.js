'use strict'

export function loginPageElements() {
	const elements = {
		loginContainer: document.getElementsByClassName('login_container')[0],
		registerContainer: document.getElementsByClassName('register_container')[0],
		toogleFormButton: document.querySelectorAll(' .toggle_form_button '),
		createOrRegisterTitle: document.getElementById('principal_title'),
		getByToggleClass: document.getElementsByClassName('toggle_register')
	}

	return elements
}
