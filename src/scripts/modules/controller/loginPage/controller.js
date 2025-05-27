'use strict'

import { defaultElements, toggleElements } from '../../utils/loginPage/utils.js'
import { loginPageElements } from '../../elements/loginPage/elements.js'

export const addOrRemoveMoveClass = (moveClass, unmoveClass) => {
	const { title } = toggleElements()
	const { defaultTitle } = defaultElements()

	if (!moveClass.length) {
		unmoveClass.forEach((element) => {
			element.classList.remove('unmove')
			element.classList.add('move')
		})

		document.title = title
		return
	}

	moveClass.forEach((element) => {
		element.classList.remove('move')
		element.classList.add('unmove')
	})

	document.title = defaultTitle
}

export const selectOptionsCategory = () => {
	const { optionsInputRegister, optionsInput } = loginPageElements()

	optionsInputRegister.forEach((item) => {
		const isOptionChecked = item.checked

		if (isOptionChecked) {
			optionsInput.checked = false
			return true
		}
	})
}
