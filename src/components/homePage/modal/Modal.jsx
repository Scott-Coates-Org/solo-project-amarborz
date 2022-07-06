import styles from './modal.module.css'

const Modal = ({ wrongLetters, playAgain, selectedWord, correctLetters }) => {
	const header = wrongLetters.length === 6 ? 'You Lost!' : 'You Won!'

	const message =
		wrongLetters.length === 6
			? `The correct word was "${selectedWord}"`
			: `You are right, the correct word is "${selectedWord}"`

	const showModal =
		wrongLetters.length === 6 ||
		correctLetters.length === [...new Set(selectedWord)].join('').length

	return (
		<div
			className={styles.modalContainer}
			style={showModal ? { display: 'flex' } : { display: 'none' }}
		>
			<div className={styles.modal}>
				<h2>{header}</h2>
				<h3>{message}</h3>
				<button onClick={playAgain}>Play Again</button>
			</div>
		</div>
	)
}

export default Modal
