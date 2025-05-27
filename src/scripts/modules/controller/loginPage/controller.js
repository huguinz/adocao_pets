'use strict'

import { defaultElements, toggleElements } from '../../utils/loginPage/utils.js'
import { loginPageElements } from '../../elements/loginPage/elements.js'

export const validateToggleClass = (toggleLogin, toggleRegister) => {
	const { defaultTitle } = defaultElements()
	const { title } = toggleElements()

	if (toggleLogin && toggleRegister) {
		document.title = title
	} else {
		document.title = defaultTitle
	}
}

export const addOrRemoveMoveClass = (className) => {
	if (!className.length) {
		console.log('ta no unmove pai')
	} else {
		console.log('ta nao')
	}
}
