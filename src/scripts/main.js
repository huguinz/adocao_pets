'use strict'

import { loginPageElements } from './modules/elements/loginPage/elements.js'
import { defaultElements, toggleElements } from './modules/utils/loginPage/utils.js'
import { validateToggleClass, addOrRemoveMoveClass } from './modules/controller/loginPage/controller.js'

const setPageStatus = () => {
	const { underlayContainer, overlayContainer, overlayContainerLogin, overlayContainerRegister, moveClass } = loginPageElements()

	const toggleOverlay = overlayContainer.classList.toggle('move')
	const toggleUnderlay = underlayContainer.classList.toggle('move')
	overlayContainerLogin.classList.toggle('move')
	overlayContainerRegister.classList.toggle('move')

	addOrRemoveMoveClass(moveClass)
	validateToggleClass(toggleUnderlay, toggleOverlay)
}

;(function toggleLogin() {
	const { toggleFormButton } = loginPageElements()
	toggleFormButton.forEach((item) => {
		item.addEventListener('click', setPageStatus)
	})
})()
