import styles from "./app.module.css"
import data from "./data.json"
import { useState } from "react"

const App = () => {
  // Можно задать 2 состояния — steps и activeIndex
  const [steps, setSeps] = useState(data)
  const [activeIndex, setActiveIndex] = useState([])
  console.log(steps)
  const goBack = () => {}
  const goForward = () => {}
  const startOver = () => {}

  // И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

  // И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles["steps-content"]}>
            {/* Для получения активного контента использйте steps и activeIndex */}
            Контент соответственный шагу. Сейчас активен шаг 3
          </div>
          <ul className={styles["steps-list"]}>
            {steps.map(({ id, title, content }) => {
              console.log(id)
              return (
                <li
                  className={styles["steps-item"] + " " + styles.done}
                  key={id}
                >
                  <button className={styles["steps-item-button"]}>
                    {id[2]}
                  </button>
                  {title}
                </li>
              )
            })}
          </ul>
          <div className={styles["buttons-container"]}>
            <button className={styles.button}>Назад</button>
            <button className={styles.button}>
              Далее
              {/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
              {/* Или заменять всю кнопку в зависимости от условия */}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
