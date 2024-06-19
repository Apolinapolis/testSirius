import balance from '../../../images/balance.png'
import shedule from '../../../images/Schedule.png'
import styles from '../rowOne/row.module.css'

export const RowTwo:React.FC = () => {
    return (
        <div className={styles.row}>
            <div><img src={balance} alt="ops!" /></div>
            <div><img src={shedule} alt="ops!" /></div>
        </div>
    )
}