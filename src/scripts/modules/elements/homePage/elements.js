'use strict'

export function homePageElements() {
	const elements = {
		selectSpecie: document.getElementById('species'),
		vaccineOption1: document.querySelector('label[for="opt1"]'),
		vaccineOption2: document.querySelector('label[for="opt2"]'),
		vaccineOption3: document.querySelector('label[for="opt3"]'),
		vaccineOption4: document.querySelector('label[for="opt4"]')
	}

	return elements
}
