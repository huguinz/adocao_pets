'use strict'

import { toggleClass } from '../../utils/loginPage/utils.js'

export function toggleLogin() {
	const loginContainer = document.getElementsByClassName('login_container')[0]
	const registerButton = document.getElementById('register_button')

	registerButton.addEventListener('click', () => {
		toggleClass()
	})
}
