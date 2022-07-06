import { useState } from 'react'

import { allLetters } from './letters'

import styles from './keyboard.module.css'

const Keyboard = ({ setWrongLetters, setCorrectLetters, selectedWord, letters,setLetters }) => {
	

	const letterHandler = (inputLetter) => {
		if (selectedWord.includes(inputLetter)) {
			setCorrectLetters((currentLetters) => [...currentLetters, inputLetter])
		} else {
			setWrongLetters((letters) => [...letters, inputLetter])
		}

		setLetters((oldLetters) =>
			oldLetters.map((line) => line.filter((letter) => letter !== inputLetter)),
		)
	}

	return (
		<div className={styles.keyboardContainer}>
			{letters.map((line, i) => {
				return (
					<div key={i} className={styles.lineContainer}>
						{line.map((letter) => {
							return (
								<p
									className={styles.letter}
									key={letter}
									onClick={() => letterHandler(letter)}
								>
									{letter}
								</p>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}

export default Keyboard
