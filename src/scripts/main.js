'use strict'

import { loginPageElements } from './modules/elements/loginPage/elements.js'
import { homePageElements } from './modules/elements/homePage/elements.js'
import { loadingAnimation, clearCheckMessage } from './modules/utils/loginPage/utils.js'
import { showOrHiddenPage } from './modules/utils/homePage/utils.js'
import {
	addOrRemoveMoveClass,
	selectOptionsCategory,
	validateInputDataValue,
	validateResponseRegister,
	validateLoginUser,
	validateRegisterMandatoryFields
} from './modules/controller/loginPage/controller.js'
import { validateSpecie, validateBreed, animalsInfo } from './modules/controller/homePage/controller.js'
import { registerAnimal } from './modules/api/homePage/post/registerAnimal.js'

const isLogged = localStorage.getItem('x')

if (!isLogged) {
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

		registerButton.addEventListener('click', () => {
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
} else {
	;(function defaultPage() {
		const { inicialPage, petsPage, registerPetsPage } = homePageElements()
		const hiddenItens = [registerPetsPage, petsPage]
		const showItens = [inicialPage]

		showOrHiddenPage(showItens, hiddenItens)
	})()
	;(function showRegisterPetPage() {
		const { registerAnimalButton, inicialPage, petsPage, registerPetsPage } = homePageElements()
		const hiddenItens = [inicialPage, petsPage]
		const showItens = [registerPetsPage]

		registerAnimalButton.addEventListener('click', () => {
			showOrHiddenPage(showItens, hiddenItens)
		})
	})()
	;(async function showPetsPage() {
		const { registeredAnimalButton, inicialPage, petsPage, registerPetsPage } = homePageElements()
		const hiddenItens = [inicialPage, registerPetsPage]
		const showItens = [petsPage]

		registeredAnimalButton.addEventListener('click', () => {
			showOrHiddenPage(showItens, hiddenItens)

			const { moreInfoPet } = homePageElements()

			moreInfoPet.forEach((element) => {
				element.addEventListener('click', (event) => {
					const { showedAnimalInfo } = homePageElements()
					const showinfo = event.target.nextElementSibling
					showedAnimalInfo.forEach((item) => {
						item.classList.remove('active')
					})

					showinfo.classList.add('active')
				})
			})
		})

		await animalsInfo()
	})()
	;(async function defaultBreeds() {
		let { selectSpecie } = homePageElements()
		selectSpecie = selectSpecie.value
		selectSpecie = selectSpecie.toUpperCase()

		await validateBreed(selectSpecie)
	})()
	;(function getSpecie() {
		const { selectSpecie, vaccineOption1, vaccineOption2, vaccineOption3, vaccineOption4 } = homePageElements()

		const optionValues = [vaccineOption1, vaccineOption2, vaccineOption3, vaccineOption4]

		selectSpecie.addEventListener('change', () => {
			validateSpecie(selectSpecie, optionValues)
		})
	})()
	;(async function sendPetRegister() {
		const { petForm, animalPhoto } = homePageElements()

		petForm.addEventListener('submit', async (event) => {
			event.preventDefault()

			await registerAnimal(animalPhoto)
		})
	})()
	;(async function previewPhoto() {
		const { animalPhoto } = homePageElements()

		animalPhoto.addEventListener('change', () => {
			console.log(animalPhoto.value)
		})
	})()
}
