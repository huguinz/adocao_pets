'use strict'

import { homePageElements } from '../../../elements/homePage/elements.js'
import { uploadImageToAzure } from '../../../utils/homePage/utils.js'

export async function registerAnimal(photo) {
	try {
		const userStr = localStorage.getItem('x')
		const user = parseInt(userStr)

		let {
			animalName,
			animalAge,
			breedsDropdown,
			animalSpecie,
			animalPhoto,
			animalTelephone,
			animalTemperament,
			animalStatus,
			animalGender
		} = homePageElements()

		animalName = animalName.value
		animalAge = animalAge.value
		breedsDropdown = breedsDropdown.value
		animalSpecie = animalSpecie.value
		animalPhoto = animalPhoto.value
		animalTelephone = animalTelephone.value
		animalTemperament = animalTemperament.value
		animalStatus = animalStatus.value
		animalGender = animalGender.value

		if (animalTemperament === 'Agressivo') {
			animalTemperament = 1
		} else if (animalTemperament === 'Calmo') {
			animalTemperament = 2
		}

		if (animalStatus === 'Saudável') {
			animalStatus = 1
		} else if (animalStatus === 'Portador de necessidades especiais') {
			animalStatus = 2
		}

		if (animalGender === 'Fêmea') {
			animalGender = 1
		} else if (animalGender === 'Macho') {
			animalGender = 2
		}

		const uploadParams = {
			file: photo.files[0],
			storageAccount: 'imgemurl',
			sasToken:
				'sp=racwl&st=2025-06-17T12:19:06Z&se=2025-06-19T20:19:06Z&sv=2024-11-04&sr=c&sig=%2F8zQ9OCzPsjJMsEwq2fIBSjdWB4IlBIZGMAR%2BnQqQFs%3D',
			containerName: 'fotos'
		}

		const url = 'http://localhost:8080/v1/controle-pet/animal'

		const body = {
			nome: animalName,
			idade: animalAge,
			raca: breedsDropdown,
			especie: animalSpecie,
			foto: await uploadImageToAzure(uploadParams),
			localizacao: '',
			celular_responsavel: animalTelephone,
			id_status_processo: 1,
			id_temperamento: 1,
			id_vacina: 1,
			id_status_saude: animalStatus,
			id_usuario: user,
			id_sexo: animalGender
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
