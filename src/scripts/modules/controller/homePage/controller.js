'use strict'

import { vaccinesToSpecie, breedsToAnimal, createInfoPet, uploadImageToAzure } from '../../utils/homePage/utils.js'
import { getDogBreeds, getCatBreeds } from '../../api/homePage/get/getAnimalBreeds.js'
import { getAnimalsInfo } from '../../api/homePage/get/getAnimalsInfo.js'

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

export const animalsInfo = async () => {
	try {
		const response = await getAnimalsInfo()

		if (response.status_code === 200) {
			const animalData = response.animais

			for (const item of animalData) {
				await createInfoPet(item)
			}
		} else {
			return false
		}
	} catch (error) {
		return error
	}
}
