'use strict'

import {
	defaultElements,
	toggleElements,
	optionsLabelCustom,
	hiddenLoadingAnimation,
	showCheckMessage
} from '../../utils/loginPage/utils.js'
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
					personalIdentificationInput.minLength = 14

					inputsRegister.forEach((inputs) => {
						inputs.value = ''
					})
				} else {
					personalIdentification.textContent = 'CPF'
					dateOfBirthInput.style.display = 'block'
					labelDateOfBirthInput.style.display = 'block'
					dateOfBirthInput.required = true
					personalIdentificationInput.minLength = 11
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

		if (!dataCategories) {
			return false
		}

		if (dataCategories.status == 200) {
			const data = await dataCategories.json()
			const categories = data.categorias

			return categories
		}
	} catch (error) {
		return error
	}
}

export const validateResponseRegister = async (personalIdentification, checkMessageContainer) => {
	try {
		const categories = await getDataCategories()

		if (!categories) {
			hiddenLoadingAnimation()
			showCheckMessage(checkMessageContainer, 'server_error')

			return
		}

		if (personalIdentification.length === 14) {
			for (const category of categories) {
				if (category.nome_categoria === 'ONG') {
					const response = await registerNewUser('', personalIdentification, category.id)

					hiddenLoadingAnimation()

					if (response.status === 201) {
						showCheckMessage(checkMessageContainer, 'sucess_created')
						setTimeout(() => {
							window.location.reload()
						}, 1500)

						return
					} else if (response.status === 400) {
						showCheckMessage(checkMessageContainer, 'invalid_fields')

						return
					} else {
						showCheckMessage(checkMessageContainer, 'server_error')

						return
					}
				}
			}
		} else if (personalIdentification.length === 11) {
			for (const category of categories) {
				if (category.nome_categoria === 'Tutor') {
					const response = await registerNewUser(personalIdentification, '', category.id)

					hiddenLoadingAnimation()

					if (response.status === 201) {
						showCheckMessage(checkMessageContainer, 'sucess_created')
						setTimeout(() => {
							window.location.reload()
						}, 1500)

						return
					} else if (response.status === 400) {
						showCheckMessage(checkMessageContainer, 'invalid_fields')

						return
					} else {
						showCheckMessage(checkMessageContainer, 'server_error')

						return
					}
				}
			}
		} else {
			showCheckMessage(checkMessageContainer, 'invalid_fields')

			return
		}
	} catch (error) {
		showCheckMessage(checkMessageContainer, 'server_error')
		return error
	}
}

export const validateRegisterMandatoryFields = (isValid, checkMessageContainer) => {
	if (!isValid) {
		console.log(isValid)
		showCheckMessage(checkMessageContainer, 'mandatory_fields')
	}
}

export const formatDate = (date) => {
	const [dia, mes, ano] = date.split('/')
	const acceptDate = `${ano}-${mes}-${dia}`

	return acceptDate ? acceptDate : false
}

export const validateLoginUser = async (checkMessageContainer) => {
	try {
		const responseLogin = await loginUser()

		if (!responseLogin) {
			showCheckMessage(checkMessageContainer, 'server_error_login')

			return
		}

		if (responseLogin.status === 200) {
			const userData = await responseLogin.json()
			const idCategory = userData.resultUsuario.id_categoria
			const idUser = userData.resultUsuario.id
			console.log(idUser)

			localStorage.setItem('x', idUser)
			localStorage.setItem('y', idCategory)

			window.location.href = '../../../../../src/assets/pages/homePage.html'

			return
		} else if (responseLogin.status === 401) {
			showCheckMessage(checkMessageContainer, 'unauthorized_login')

			return
		} else {
			showCheckMessage(checkMessageContainer, 'server_error_login')

			return
		}
	} catch (error) {
		showCheckMessage(checkMessageContainer, 'server_error_login')
		return error
	}
}
