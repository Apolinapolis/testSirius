import styles from "./Head.module.css"


export function Head() {
    return (
        <div className={styles.head}>
                <select name="lesson" id="lessonSelect">
                    <option value="">Выбрать предмет</option>
                    <option value="MA">Мантальная арифметика</option>
                    <option value="prepear">Подготовка к школе</option>
                </select>
                <button>Изменить расписание</button>
        </div>
    )
}