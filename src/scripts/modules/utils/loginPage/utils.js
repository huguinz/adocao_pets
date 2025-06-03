'use strict'

import { loginPageElements } from '../../elements/loginPage/elements.js'

export const defaultElements = () => {
	const defaultElements = {
		defaultTitle: 'Entre na sua conta!'
	}

	return defaultElements
}

export const toggleElements = () => {
	const toggleElements = {
		title: 'Cadastre-se!'
	}

	return toggleElements
}

export const optionsLabelCustom = (id) => {
	const label = document.querySelectorAll(`label[for='${id}']`)

	return label
}

export const loadingAnimation = (registerButton) => {
	const overlayButtonContainer = registerButton.querySelectorAll('div')
	registerButton.style.pointerEvents = 'none'

	overlayButtonContainer.forEach((item) => {
		item.style.opacity = 0
	})
}

export const hiddenLoadingAnimation = () => {
	const { registerButton } = loginPageElements()

	const overlayButtonContainer = registerButton.querySelectorAll('div')
	registerButton.style.pointerEvents = 'all'

	overlayButtonContainer.forEach((item) => {
		item.style.opacity = 1
	})
}

export const showCheckMessage = (checkMessageContainer, elementId) => {
	checkMessageContainer.forEach((item) => {
		if (item.id === elementId) {
			item.style.opacity = 1
			item.style.transform = 'translateY(4px)'
		}
	})
}

export const clearCheckMessage = (checkMessageContainer) => {
	checkMessageContainer.forEach((item) => {
		item.style.opacity = 0
		item.style.transform = 'translateY(0px)'
	})
}
