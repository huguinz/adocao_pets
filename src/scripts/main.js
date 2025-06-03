'use strict'

import { loginPageElements } from './modules/elements/loginPage/elements.js'
import { loadingAnimation, clearCheckMessage } from './modules/utils/loginPage/utils.js'
import {
	addOrRemoveMoveClass,
	selectOptionsCategory,
	validateInputDataValue,
	validateResponseRegister,
	validateLoginUser,
	validateRegisterMandatoryFields
} from './modules/controller/loginPage/controller.js'

const setPageStatus = () => {
	const { moveClass, unmoveClass, inputsRegister, inputsLogin } = loginPageElements()

	addOrRemoveMoveClass(moveClass, unmoveClass, inputsRegister, inputsLogin)
}

;(function toggleLogin() {
	const { toggleFormButton } = loginPageElements()
	toggleFormButton.forEach((item) => {
		item.addEventListener('click', setPageStatus)
	})
})()
;(function selectCategory() {
	const {
		optionsInputRegister,
		optionsCheckbox,
		optionsContainer,
		personalIdentification,
		personalIdentificationInput,
		dateOfBirthInput,
		labelDateOfBirthInput,
		inputsRegister
	} = loginPageElements()

	optionsInputRegister.forEach((item) => {
		item.addEventListener('change', () =>
			selectOptionsCategory(
				item,
				optionsCheckbox,
				optionsContainer,
				personalIdentification,
				personalIdentificationInput,
				dateOfBirthInput,
				labelDateOfBirthInput,
				inputsRegister
			)
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
;(async function sendRegisterForm() {
	const { formRegister, personalIdentificationInput, registerButton, checkMessageContainer } = loginPageElements()
	const isValid = formRegister.checkValidity()

	registerButton.addEventListener('click', (event) => {
		event.preventDefault()

		clearCheckMessage(checkMessageContainer)
		validateRegisterMandatoryFields(isValid, checkMessageContainer)
	})

	formRegister.addEventListener('submit', async (event) => {
		event.preventDefault()
		const inputValue = personalIdentificationInput.value

		loadingAnimation(registerButton)
		clearCheckMessage(checkMessageContainer)
		await validateResponseRegister(inputValue, checkMessageContainer)
	})
})()
;(async function sendUserLogin() {
	const { formLogin } = loginPageElements()
	const { checkMessageContainer } = loginPageElements()

	formLogin.addEventListener('submit', async (event) => {
		event.preventDefault()

		clearCheckMessage(checkMessageContainer)

		await validateLoginUser(checkMessageContainer)
	})
})()
