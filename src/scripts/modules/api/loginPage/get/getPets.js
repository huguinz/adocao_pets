'use strict'

export const getPets = async () => {
	try {
		const url = 'http://10.107.134.42:8080/v1/controle-pet/animal'
		const response = await fetch(url)

		return response
	} catch (error) {
		return false
	}
}
