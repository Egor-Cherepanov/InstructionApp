import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, setSeps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const goBack = () => {
		setActiveIndex(activeIndex - 1);
	};
	const goForward = () => {
		setActiveIndex(activeIndex + 1);
	};
	const startOver = () => {
		setActiveIndex(0);
	};

	const stepsItem = (id, title, stylesInfo) => {
		return (
			<li className={styles['steps-item'] + ' ' + stylesInfo} key={id}>
				<button
					className={styles['steps-item-button']}
					onClick={() => setActiveIndex(Number(id[2]) - 1)}
				>
					{id[2]}
				</button>
				{title}
			</li>
		);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>

					<ul className={styles['steps-list']}>
						{steps.map(({ id, title }, keyNum) => {
							console.log(keyNum === activeIndex);
							return activeIndex === keyNum
								? stepsItem(id, title, styles.active)
								: activeIndex > keyNum
									? stepsItem(id, title, styles.done)
									: stepsItem(id, title);
						})}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={goBack}
							disabled={activeIndex === 0 ? true : false}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={activeIndex === 6 ? startOver : goForward}
						>
							{activeIndex === 6 ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
