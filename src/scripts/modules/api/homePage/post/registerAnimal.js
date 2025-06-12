'use strict'

import { homePageElements } from '../../../elements/homePage/elements.js'

export async function registerAnimal() {
	try {
		let { animalName, animalAge, breedsDropdown, animalSpecie, animalPhoto, animalTelephone } = homePageElements()

		const uploadParams = {
			file: animalPhoto.files[0],
			storageAccount: 'imgemurl',
			sasToken:
				'sp=racwdli&st=2025-06-10T16:53:42Z&se=2025-06-11T00:53:42Z&sv=2024-11-04&sr=c&sig=ZXlwKgWS1v2HlefgV8z5nCym2U3GN6SFnkV91cmnlzs%3D',
			containerName: 'fotos'
		}

		const url = ''

		const body = {
			nome: 'bigao dog',
			idade: '9',
			raca: '2',
			especie: 'cachorro',
			foto: 'https://www.petlove.com.br/images/breeds/193105/profile/original/dachshound-p.jpg?1532539026',
			localizacao: '',
			celular_responsavel: '11916736423',
			id_status_processo: 1,
			id_temperamento: 1,
			id_vacina: 1,
			id_status_saude: 1,
			id_usuario: 1,
			id_sexo: 1
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
