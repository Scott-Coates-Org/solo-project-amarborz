import styles from './wrongLetters.module.css'

const WrongLetters = ({ wrongLetters }) => {
	return (
		<div className={styles.wrongLettersContainer}>
			<div>
				{wrongLetters.length > 0 && <h5>Wrong Letters:</h5>}
				{wrongLetters
					.map((letter, i) => <span key={i}>{letter}</span>)
					.reduce(
						(prev, curr) => (prev === null ? [curr] : [prev, ', ', curr]),
						null,
					)}
			</div>
		</div>
	)
}

export default WrongLetters
