'use strict'

export const getCategories = async () => {
	try {
		const url = 'http://10.107.144.30:8080/v1/controle-pet/categoria'
		const response = await fetch(url)

		return response
	} catch (error) {
		return false
	}
}
