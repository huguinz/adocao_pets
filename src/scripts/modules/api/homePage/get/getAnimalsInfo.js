'use strict'

export async function getAnimalsInfo() {
	try {
		const url = 'http://localhost:8080/v1/controle-pet/animal'
		const response = await fetch(url)
		const data = await response.json()

		return data
	} catch (error) {
		return false
	}
}
