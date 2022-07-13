import styles from './word.module.css'

const Word = ({ possibleWords, correctLetters }) => {
	return (
		<div className={styles.word}>
			{possibleWords[0].split('').map((letter, i) => {
				return (
					<span className={styles.letter} key={i}>
						{correctLetters.includes(letter) ? letter : ''}
					</span>
				)
			})}
		</div>
	)
}

export default Word
