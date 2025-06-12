'use strict'

import { vaccinesToSpecie, breedsToAnimal } from '../../utils/homePage/utils.js'
import { getDogBreeds, getCatBreeds } from '../../api/homePage/get/getAnimalBreeds.js'

export const validateBreed = async (specie) => {
	try {
		const dogResponse = await getDogBreeds()
		const catResponse = await getCatBreeds()

		if (dogResponse && catResponse) {
			if (specie === 'GATO') {
				const breedsResponse = await catResponse.json()
				breedsToAnimal(breedsResponse)

				return
			} else if (specie === 'CACHORRO') {
				const breedsResponse = await dogResponse.json()
				breedsToAnimal(breedsResponse)

				return
			} else if (specie === 'OUTROS') {
				breedsToAnimal(null)

				return
			}
		}

		return false
	} catch (error) {
		return error
	}
}

export const validateSpecie = async (specie, optionValues) => {
	specie = specie.value
	specie = specie.toUpperCase()

	if (specie === 'GATO') {
		vaccinesToSpecie(specie, optionValues)
		await validateBreed(specie)

		return
	} else if (specie === 'CACHORRO') {
		vaccinesToSpecie(specie, optionValues)
		await validateBreed(specie)

		return
	} else if (specie === 'OUTROS') {
		vaccinesToSpecie(specie, optionValues)
		await validateBreed(specie)

		return
	}
}

export const savePhoto = async (photo) => {
	try {
	} catch (error) {
		return error
	}
}
