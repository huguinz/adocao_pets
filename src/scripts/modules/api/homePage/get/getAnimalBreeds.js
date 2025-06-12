'use strict'

export async function getDogBreeds() {
	try {
		const url = 'https://api.thedogapi.com/v1/breeds'
		const response = await fetch(url)

		return response
	} catch (error) {
		return false
	}
}

export async function getCatBreeds() {
	try {
		const url = 'https://api.thecatapi.com/v1/breeds'
		const response = await fetch(url)

		return response
	} catch (error) {
		return false
	}
}
