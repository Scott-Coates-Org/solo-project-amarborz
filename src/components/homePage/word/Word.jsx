import styles from './word.module.css'

const Word = ({ selectedWord, correctLetters }) => {
	return (
		<div className={styles.word}>
			{selectedWord.split('').map((letter, i) => {
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
