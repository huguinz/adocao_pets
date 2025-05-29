'use strict'

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
