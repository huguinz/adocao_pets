'use strict'

import { defaultElements, toggleElements, optionsLabelCustom } from '../../utils/loginPage/utils.js'
import { registerNewUser } from '../../api/loginPage/post/registerNewUser.js'
import { getCategories } from '../../api/loginPage/get/getCategories.js'
import { loginUser } from '../../api/loginPage/post/loginUser.js'

export const addOrRemoveMoveClass = (moveClass, unmoveClass, inputsRegister, inputsLogin) => {
	const { title } = toggleElements()
	const { defaultTitle } = defaultElements()

	if (!moveClass.length) {
		unmoveClass.forEach((element) => {
			element.classList.remove('unmove')
			element.classList.add('move')
		})

		inputsLogin.forEach((inputs) => {
			inputs.value = ''
		})

		document.title = title
		return
	}

	moveClass.forEach((element) => {
		element.classList.remove('move')
		element.classList.add('unmove')
	})

	inputsRegister.forEach((inputs) => {
		inputs.value = ''
	})

	document.title = defaultTitle
}

export const selectOptionsCategory = async (
	chosenOption,
	optionsCheckbox,
	optionsContainer,
	personalIdentification,
	personalIdentificationInput,
	dateOfBirthInput,
	labelDateOfBirthInput,
	inputsRegister
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
					dateOfBirthInput.value = ''
					labelDateOfBirthInput.style.display = 'none'
					dateOfBirthInput.required = false
					personalIdentification.textContent = 'CNPJ'
					personalIdentificationInput.maxLength = 14

					inputsRegister.forEach((inputs) => {
						inputs.value = ''
					})
				} else {
					personalIdentification.textContent = 'CPF'
					dateOfBirthInput.style.display = 'block'
					labelDateOfBirthInput.style.display = 'block'
					dateOfBirthInput.required = true
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

export const getDataCategories = async () => {
	try {
		const dataCategories = await getCategories()

		if (dataCategories.status_code == 200) {
			const categories = dataCategories.categorias

			return categories
		}
	} catch (error) {
		return error
	}
}

export const validateResponseRegister = async (personalIdentification) => {
	try {
		const categories = await getDataCategories()

		if (personalIdentification.length === 14) {
			for (const category of categories) {
				if (category.nome_categoria === 'ONG') {
					const response = await registerNewUser('', personalIdentification, category.id)

					if (response.status === 201) {
						window.location.reload()
						return
					} else {
						return false
					}
				}
			}
		} else if (personalIdentification.length === 11) {
			for (const category of categories) {
				if (category.nome_categoria === 'TUTOR') {
					const response = await registerNewUser(personalIdentification, '', category.id)

					if (response.status === 201) {
						window.location.reload()
						return
					} else {
						return false
					}
				}
			}
		} else {
			return false
		}
	} catch (error) {
		return error
	}
}

export const formatDate = (date) => {
	try {
		const [dia, mes, ano] = date.split('/')
		const acceptDate = `${ano}-${mes}-${dia}`

		return acceptDate ? acceptDate : false
	} catch (error) {
		return false
	}
}

export const validateLoginUser = async () => {
	try {
		const responseLogin = await loginUser()

		if (responseLogin.status_code === 200) {
			window.location.href = '#'
		} else {
			return false
		}
	} catch (error) {
		return false
	}
}
