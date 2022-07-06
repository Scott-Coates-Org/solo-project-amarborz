import { Link } from 'react-router-dom'

import styles from './navbar.module.css'
import icon from '../../assets/images/icons/logo.jpg'

const Navbar = () => {
	return (
		<div className={styles.navContainer}>
			<div className={styles.logoContainer}>
				<img src={icon} />
				<h5>Hangman</h5>
			</div>
			<div className={styles.linkContainer}>
				<h5 className={styles.link}>
					<Link to={'/'}>GAME</Link>
				</h5>
				<h5 className={styles.link}>
					<Link to={'/leaderboard'}>LEADERBOARD</Link>
				</h5>
			</div>
		</div>
	)
}

export default Navbar
