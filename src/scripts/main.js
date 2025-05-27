'use strict'

import { loginPageElements } from './modules/elements/loginPage/elements.js'
import { defaultElements, toggleElements } from './modules/utils/loginPage/utils.js'
import { validateToggleClass } from './modules/controller/loginPage/controller.js'

const setPageStatus = () => {
	const { toogleFormButton, loginContainer, registerContainer } = loginPageElements()

	const toggleLogin = loginContainer.classList.toggle('toggle_login')
	const toggleRegister = registerContainer.classList.toggle('toggle_register')

	validateToggleClass(toggleLogin, toggleRegister, toogleFormButton)
}

export function userRegisterLayout() {
	const { createOrRegisterTitle, getByToggleClass } = loginPageElements()
	const { defaultTitle, defaultButtonTextRegister, defaultPageTitle } = defaultElements()

	const isToggleClassActive = getByToggleClass.length

	if (isToggleClassActive) {
		createOrRegisterTitle.textContent = 'cu negro'
	} else {
		createOrRegisterTitle.textContent = defaultPageTitle
	}
}

;(function toggleLogin() {
	const { toggleFormButton } = loginPageElements()

	toggleFormButton.addEventListener('click', setPageStatus)
	toggleFormButton.addEventListener('click', userRegisterLayout)
})()

console.log(loginPageElements())
