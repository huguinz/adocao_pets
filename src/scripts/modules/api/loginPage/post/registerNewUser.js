'use strict'

import { loginPageElements } from '../../../elements/loginPage/elements.js'
import { formatDate } from '../../../controller/loginPage/controller.js'

export async function registerNewUser(personalIdentificationCpf, personalIdentificationCnpj, categoryID) {
	try {
		let { nameUserRegister, emailUserRegister, passwordUserRegister, dateOfBirthInput } = loginPageElements()
		nameUserRegister = nameUserRegister.value
		emailUserRegister = emailUserRegister.value
		passwordUserRegister = passwordUserRegister.value
		dateOfBirthInput = dateOfBirthInput.value

		let formatDateValue = ''

		if (personalIdentificationCnpj.trim() === '') {
			formatDateValue = formatDate(dateOfBirthInput)
		}

		const url = 'http://10.107.144.30:8080/v1/controle-pet/usuario'

		const body = {
			nome: nameUserRegister,
			id_categoria: categoryID,
			email: emailUserRegister,
			endereco: '',
			cnpj: personalIdentificationCnpj,
			senha: passwordUserRegister,
			data_nascimento: formatDateValue,
			cpf: personalIdentificationCpf
		}

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}

		const response = await fetch(url, options)

		return response
	} catch (error) {
		return false
	}
}
