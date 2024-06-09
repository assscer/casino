import { capitalizeFirstLetter } from '../utils/utils'

import { wordsRu } from './ru/words'

export const translate = function (data) {
    if (!data) return
    let info = data.info
    let capitalize_first_letter = data.capitalize_first_letter ? data.capitalize_first_letter : false
    let word = wordsRu(info)

    if (word) {
        return word
    } else {
        if (capitalize_first_letter) {
            return capitalizeFirstLetter(info)
        } else {
            return info
        }
    }
}
