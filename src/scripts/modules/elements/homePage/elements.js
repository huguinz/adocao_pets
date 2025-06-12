'use strict'

export function homePageElements() {
	const elements = {
		selectSpecie: document.getElementById('species'),
		vaccineOption1: document.querySelector('label[for="opt1"]'),
		vaccineOption2: document.querySelector('label[for="opt2"]'),
		vaccineOption3: document.querySelector('label[for="opt3"]'),
		vaccineOption4: document.querySelector('label[for="opt4"]'),
		vaccineOption1: document.getElementById('opt1'),
		vaccineOption2: document.getElementById('opt2'),
		vaccineOption3: document.getElementById('opt3'),
		vaccineOption4: document.getElementById('opt4'),
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
		animalTelephone: document.getElementById('telephone')
	}

	return elements
}
