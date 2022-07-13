import { useEffect, useState } from 'react'

import { allLetters } from './letters'

import styles from './keyboard.module.css'

const Keyboard = ({
	setWrongLetters,
	wrongLetters,
	setPossibleWords,
	letters,
	setLetters,
}) => {
	const letterHandler = (inputLetter) => {
		if (!wrongLetters.includes(inputLetter)) {
			setPossibleWords((oldWords) =>
				oldWords.filter((word) => !word.includes(inputLetter)),
			)
			setWrongLetters((currentLetters) => [...currentLetters, inputLetter])
		} else {
			return
		}

		setLetters((oldLetters) =>
			oldLetters.map((line) => line.filter((letter) => letter !== inputLetter)),
		)
	}

	useEffect(() => {
		setLetters((oldLetters) =>
			oldLetters.map((line) =>
				line.filter(
					(letter) => letter !== wrongLetters[wrongLetters.length - 1],
				),
			),
		)
	}, [wrongLetters])

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
