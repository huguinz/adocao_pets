'use strict'

import { loginPageElements } from '../../../elements/loginPage/elements.js'

export const loginUser = async () => {
	try {
		let { emailUser, passwordUser } = loginPageElements()
		const url = 'http://10.107.134.42:8080/v1/controle-pet/login'
		emailUser = emailUser.value
		passwordUser = passwordUser.value

		const body = {
			email: emailUser,
			senha: passwordUser
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
