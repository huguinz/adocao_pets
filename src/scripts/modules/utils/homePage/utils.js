'use strict'

import { homePageElements } from '../../elements/homePage/elements.js'

export const vaccinesToSpecie = (specie, optionValues) => {
	if (specie == 'GATO') {
		homePageElements().vaccineContainer.style.display = 'block'

		optionValues[0].innerHTML = 'V3'
		optionValues[1].innerHTML = 'V4'
		optionValues[2].innerHTML = 'V5'
		optionValues[3].innerHTML = 'Raiva'
	} else if (specie === 'CACHORRO') {
		homePageElements().vaccineContainer.style.display = 'block'

		optionValues[0].innerHTML = 'V8'
		optionValues[1].innerHTML = 'V10'
		optionValues[2].innerHTML = 'Gripe canina'
		optionValues[3].innerHTML = 'Antirrábica'
	} else if (specie === 'OUTROS') {
		homePageElements().vaccineContainer.style.display = 'none'
	}
}

export const breedsToAnimal = (response) => {
	const { breedsDropdown, breedContainer } = homePageElements()
	if (response === null) {
		breedContainer.style.display = 'none'
	} else {
		breedContainer.style.display = 'block'
	}

	breedsDropdown.replaceChildren('')

	response.forEach((item) => {
		const breedName = item.name
		const option = document.createElement('option')

		option.textContent = breedName
		option.value = breedName
		breedsDropdown.appendChild(option)
	})
}

export async function uploadImageToAzure(uploadParams) {
	try {
		const { file, storageAccount, sasToken, containerName } = uploadParams

		const blobName = `${Date.now()}-${file.name}`

		const baseUrl = `https://${storageAccount}.blob.core.windows.net/${containerName}/${blobName}`
		const uploadUrl = `${baseUrl}?${sasToken}`

		const options = {
			method: 'PUT',
			headers: {
				'x-ms-blob-type': 'BlockBlob',
				'Content-Type': file.type || 'application/octet-stream'
			},
			body: file
		}

		const response = await fetch(uploadUrl, options)

		return response.ok ? baseUrl : false
	} catch (error) {
		return false
	}
}

export const showOrHiddenPage = (show, hidden) => {
	hidden.forEach((hiddenItem) => {
		hiddenItem.forEach((itensPage) => {
			itensPage.style.display = 'none'
		})
	})

	show.forEach((showItem) => {
		showItem.forEach((itensPage) => {
			itensPage.style.display = 'flex'
		})
	})
}

export const createInfoPet = async (data) => {
	try {
		const { containerPets } = homePageElements()
		const { celular_responsavel, especie, foto, id, idade, nome, raca, sexo, status_saude, temperamento } = data

		const containerPetInfo = document.createElement('div')
		containerPetInfo.classList.add('pet')
		containerPetInfo.innerHTML = `                  
										<img src="${foto}" alt="pet image">
										<button title="Mais informações" id="${id}" class="more_info">Mais informações</button>
										<div class="pet_info">
											<div class="container_pet_info">
												<img src="${foto}" alt="pet image">
												<div class="pet_desc">
													<h1>${nome}</h1>
													<div class="pet_form">
														<div class="pet_name">
															<p>Nome:</p>
															<p class="text_field">${nome}</p>
														</div>
														<div class="row_info">
															<div class="pet_age">
																<p>Idade:</p>
																<p class="text_field">${idade}</p>
															</div>
															<div class="pet_gender">
																<p>Sexo:</p>
																<p class="text_field">${sexo[0].sexo}</p>
															</div>
															<div class="pet_breed">
																<p>Raça:</p>
																<p class="text_field">${raca}</p>
															</div>
															<div class="pet_specie">
																<p>Espécie:</p>
																<p class="text_field">${especie}</p>
															</div>
														</div>
														<div class="pet_owner_contact">
															<p>Contato dono:</p>
															<p class="text_field">${celular_responsavel}</p>
														</div>
														<div class="row_info">
															<div class="pet_temperament">
																<p>Temperamento:</p>
																<p class="text_field">${temperamento[0].nome_temperamento}</p>
															</div>
															<div class="pet_status">
																<p>Status:</p>
																<p class="text_field">${status_saude[0].status_saude}</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										`

		containerPets.appendChild(containerPetInfo)
	} catch (error) {
		return false
	}
}
