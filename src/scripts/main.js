'use strict'

import { loginPageElements } from './modules/elements/loginPage/elements.js'
import { addOrRemoveMoveClass, selectOptionsCategory } from './modules/controller/loginPage/controller.js'

const setPageStatus = () => {
	const { moveClass, unmoveClass } = loginPageElements()

	addOrRemoveMoveClass(moveClass, unmoveClass)
}

;(function toggleLogin() {
	const { toggleFormButton } = loginPageElements()
	toggleFormButton.forEach((item) => {
		item.addEventListener('click', setPageStatus)
	})
})()

setInterval(() => {
	selectOptionsCategory()
}, 0)
