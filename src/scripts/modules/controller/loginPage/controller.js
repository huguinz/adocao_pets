'use strict'

import { defaultElements, toggleElements } from '../../utils/loginPage/utils.js'
import { loginPageElements } from '../../elements/loginPage/elements.js'

export const validateToggleClass = (toggleLogin, toggleRegister) => {
	const { defaultTitle, defaultButtonTextRegister } = defaultElements()
	const { title, buttonTextRegister } = toggleElements()
	const { toogleFormButton: registerButton } = loginPageElements()

	if (toggleLogin && toggleRegister) {
		document.title = title
		registerButton.textContent = buttonTextRegister
	} else {
		document.title = defaultTitle
		registerButton.textContent = defaultButtonTextRegister
	}
}
