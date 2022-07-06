import { useEffect, useState } from 'react'

import Figure from './figure/Figure'
import Keyboard from './keyboard/Keyboard'
import Modal from './modal/Modal'
import Word from './word/Word'
import { allLetters } from './keyboard/letters'

const words = ['application', 'programming', 'fireworks', 'coding']
let selectedWord = words[Math.floor(Math.random() * words.length)]

const HomePage = () => {
	const [correctLetters, setCorrectLetters] = useState([])
	const [wrongLetters, setWrongLetters] = useState([])
	const [letters, setLetters] = useState(allLetters)

	useEffect(() => {
		const handleKeydown = (event) => {
			const { key, keyCode } = event
			if (keyCode >= 65 && keyCode <= 90) {
				const letter = key.toLowerCase()
				if (selectedWord.includes(letter)) {
					if (!correctLetters.includes(letter)) {
						setCorrectLetters((currentLetters) => [...currentLetters, letter])
					} else {
						return
					}
				} else {
					if (!wrongLetters.includes(letter)) {
						setWrongLetters((currentLetters) => [...currentLetters, letter])
					} else {
						return
					}
				}
			}
		}
		window.addEventListener('keydown', handleKeydown)

		return () => window.removeEventListener('keydown', handleKeydown)
	}, [correctLetters, wrongLetters])

	const playAgain = () => {
		setCorrectLetters([])
		setWrongLetters([])
		setLetters(allLetters)

		selectedWord = words[Math.floor(Math.random() * words.length)]
	}

	return (
		<div>
			<Figure wrongLetters={wrongLetters} />
			<Word selectedWord={selectedWord} correctLetters={correctLetters} />
			<Keyboard
				setWrongLetters={setWrongLetters}
				selectedWord={selectedWord}
				setCorrectLetters={setCorrectLetters}
				letters={letters}
				setLetters={setLetters}
			/>
			<Modal
				wrongLetters={wrongLetters}
				playAgain={playAgain}
				selectedWord={selectedWord}
				correctLetters={correctLetters}
			/>
		</div>
	)
}

export default HomePage
