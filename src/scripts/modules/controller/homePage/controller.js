'use strict'

import { vaccinesToCat } from '../../utils/homePage/utils.js'

export const validateSpecie = (specie, optionValues) => {
	specie = specie.value

	if (specie === 'Gato') {
		vaccinesToCat(optionValues)

		return
	} else if (specie === 'Outros') {
		return
	}
}
