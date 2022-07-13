import { useEffect, useState } from 'react'

import Figure from './figure/Figure'
import Keyboard from './keyboard/Keyboard'
import Modal from './modal/Modal'
import Word from './word/Word'
import { allLetters } from './keyboard/letters'
import { allWords } from '../allWords'

// const words = ['application', 'programming', 'fireworks', 'coding']
// let selectedWord = words[Math.floor(Math.random() * words.length)]
let number = Math.floor(Math.random() * (12 - 4) + 4)
const words = allWords.filter((word) => word.length === number)
console.log(words)

const HomePage = () => {
	const [possibleWords, setPossibleWords] = useState(words)
	const [correctLetters, setCorrectLetters] = useState([])
	const [wrongLetters, setWrongLetters] = useState([])
	const [letters, setLetters] = useState(allLetters)
	const [playable, setPlayable] = useState(true)

	console.log(possibleWords)

	useEffect(() => {
		const handleKeydown = (event) => {
			const { key, keyCode } = event
			if (playable && keyCode >= 65 && keyCode <= 90) {
				const letter = key.toLowerCase()

				if (!wrongLetters.includes(letter)) {
					setPossibleWords((oldWords) =>
						oldWords.filter((word) => !word.includes(letter)),
					)
					setWrongLetters((currentLetters) => [...currentLetters, letter])
				} else {
					return
				}
			}
		}
		window.addEventListener('keydown', handleKeydown)

		return () => window.removeEventListener('keydown', handleKeydown)
	}, [correctLetters, wrongLetters])

	useEffect(() => {
		if (wrongLetters.length >= 5) {
			setPlayable(false)
		}
	}, [wrongLetters])

	const playAgain = () => {
		setCorrectLetters([])
		setWrongLetters([])
		setLetters(allLetters)

		number = Math.floor(Math.random() * (12 - 4) + 4)
		const newWords = allWords.filter((word) => word.length === number)
		setPossibleWords(newWords)
		setPlayable(true)
	}

	return (
		<div>
			<Figure wrongLetters={wrongLetters} />
			<Word possibleWords={possibleWords} correctLetters={correctLetters} />
			<Keyboard
				setWrongLetters={setWrongLetters}
				setPossibleWords={setPossibleWords}
				wrongLetters={wrongLetters}
				letters={letters}
				setLetters={setLetters}
			/>
			<Modal
				wrongLetters={wrongLetters}
				playAgain={playAgain}
				possibleWords={possibleWords}
				correctLetters={correctLetters}
			/>
		</div>
	)
}

export default HomePage
