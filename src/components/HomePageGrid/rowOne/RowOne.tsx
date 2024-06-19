import dec from '../../../images/bannerDec.png'
import timer from '../../../images/UpcomingLesson.png'
import dz from '../../../images/homework.png'
import report from '../../../images/report.png'
import styles from './row.module.css'




export function RowOne() {
    return (
        <div className={styles.row}>
            <div><img src={dec} alt="ops" /></div>
            <div><img src={timer} alt="ops" /></div>
            <div>
                <div><img src={dz} alt="ops" /></div>
                <div><img src={report} alt="ops" /></div>
            </div>
        </div>
    )
}

