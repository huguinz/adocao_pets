'use strict'

export const getPets = async () => {
	try {
		const url = 'http://localhost:8080/v1/controle-pet/animal'
		const response = await fetch(url)

		return response
	} catch (error) {
		return false
	}
}
