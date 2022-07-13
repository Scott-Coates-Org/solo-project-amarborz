import styles from './modal.module.css'

const Modal = ({ wrongLetters, playAgain, possibleWords, correctLetters }) => {
	const header = wrongLetters.length === 6 ? 'You Lost!' : 'You Won!'

	const message =
		wrongLetters.length === 6
			? `The correct word was "${
					possibleWords[Math.floor(Math.random() * possibleWords.length)]
			  }"`
			: `You are right, the correct word is "${possibleWords[0]}"`

	const showModal = wrongLetters.length >= 6

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
