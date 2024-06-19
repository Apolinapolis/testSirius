import dec from '../../../images/bannerDec.png'
import dz from '../../../images/homework.png'
import report from '../../../images/report.png'
import styles from './row.module.css'
import { CountdownTimer } from '../../CountdownTimer/CountdownTimer'




export const RowOne:React.FC =() => {
    return (
        <div className={styles.row}>
            <div><img src={dec} alt="ops" /></div>
            <CountdownTimer />
            <div>
                <div><img src={dz} alt="ops" /></div>
                <div><img src={report} alt="ops" /></div>
            </div>
        </div>
    )
}

