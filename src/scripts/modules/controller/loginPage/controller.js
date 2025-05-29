'use strict'

import { defaultElements, toggleElements, optionsLabelCustom } from '../../utils/loginPage/utils.js'

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

export const selectOptionsCategory = (
	chosenOption,
	optionsCheckbox,
	optionsContainer,
	personalIdentification,
	personalIdentificationInput,
	dateOfBirthInput
) => {
	const isOptionChecked = chosenOption.checked

	if (isOptionChecked) {
		const idLabel = chosenOption.id
		const getLabel = optionsLabelCustom(idLabel)

		if (getLabel.length) {
			getLabel.forEach((item) => {
				let optionsTextContent = optionsContainer.firstElementChild

				optionsTextContent.textContent = item.textContent

				if (optionsTextContent.textContent.trim() == 'ONG') {
					dateOfBirthInput.style.display = 'none'
					personalIdentification.textContent = 'CNPJ'
					personalIdentificationInput.maxLength = 14
				} else {
					personalIdentification.textContent = 'CPF'
					dateOfBirthInput.style.display = 'block'
					personalIdentificationInput.maxLength = 11
				}
			})
		}

		optionsCheckbox.checked = false
	}
}

export const validateInputDataValue = (value) => {
	let rawValue = value.replace(/\D/g, '')
	rawValue = rawValue.slice(0, 8)

	let formatted = ''

	if (rawValue.length >= 5) {
		formatted = rawValue.slice(0, 2) + '/' + rawValue.slice(2, 4) + '/' + rawValue.slice(4)
	} else if (rawValue.length >= 3) {
		formatted = rawValue.slice(0, 2) + '/' + rawValue.slice(2)
	} else {
		formatted = rawValue
	}

	value = formatted

	return value
}
