'use strict'

export function homePageElements() {
	const elements = {
		inicialPage: document.querySelectorAll('.inicial_page'),
		petsPage: document.querySelectorAll('.pets_page'),
		registerPetsPage: document.querySelectorAll('.register_pets_page'),
		selectSpecie: document.getElementById('species'),
		vaccineOption1: document.querySelector('label[for="opt1"]'),
		vaccineOption2: document.querySelector('label[for="opt2"]'),
		vaccineOption3: document.querySelector('label[for="opt3"]'),
		vaccineOption4: document.querySelector('label[for="opt4"]'),
		inputVaccineOption1: document.getElementById('opt1'),
		inputVaccineOption2: document.getElementById('opt2'),
		inputVaccineOption3: document.getElementById('opt3'),
		inputVaccineOption4: document.getElementById('opt4'),
		vaccineContainer: document.querySelector('.vaccine'),
		breedsDropdown: document.getElementById('breed'),
		petForm: document.getElementById('register_pet'),
		breedContainer: document.querySelector('.breed'),
		animalPhoto: document.getElementById('preview-input'),
		animalName: document.getElementById('name'),
		animalAge: document.getElementById('age'),
		animalDescription: document.getElementById('desc'),
		animalSpecie: document.getElementById('species'),
		animalGender: document.getElementById('gender'),
		animalStatus: document.getElementById('status'),
		animalTemperament: document.getElementById('temperament'),
		animalTelephone: document.getElementById('telephone'),
		registerAnimalButton: document.getElementById('register_animal'),
		registeredAnimalButton: document.getElementById('registered_animal'),
		moreInfoPet: document.querySelectorAll('.more_info')
	}

	return elements
}
