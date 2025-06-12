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
