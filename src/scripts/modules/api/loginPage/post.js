'use strict'

import { loginPageElements } from '../../elements/loginPage/elements.js'

export async function registerNewUser() {
	const { nameUserRegister, emailUserRegister, passwordUserRegister, dateOfBirthInput } = loginPageElements()

	const url = ''

	const body = {
		nome: nameUserRegister,
		email: emailUserRegister,
		endereco: '',
		cnpj: '',
		password: passwordUserRegister,
		data_nascimento: dateOfBirthInput
	}

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	}

	const response = await fetch(url, options)
}
