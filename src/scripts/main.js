'use strict'

import { loginPageElements } from './modules/elements/loginPage/elements.js'
import { addOrRemoveMoveClass, selectOptionsCategory, validateInputDataValue } from './modules/controller/loginPage/controller.js'

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
;(function selectCategory() {
	const { optionsInputRegister, optionsCheckbox, optionsContainer, personalIdentification, personalIdentificationInput, dateOfBirthInput } =
		loginPageElements()

	optionsInputRegister.forEach((item) => {
		item.addEventListener('change', () =>
			selectOptionsCategory(item, optionsCheckbox, optionsContainer, personalIdentification, personalIdentificationInput, dateOfBirthInput)
		)
	})
})()
;(function callValidateInputDataValue() {
	const { dateOfBirthInput } = loginPageElements()

	dateOfBirthInput.addEventListener('input', () => {
		let valueDate = dateOfBirthInput.value
		const validateDate = validateInputDataValue(valueDate)

		valueDate = dateOfBirthInput.value = validateDate
	})
})()
