import { RowOne } from "./rowOne/RowOne";
import { RowTwo } from "./rowTwo/RowTwo";
import styles from './HomeGrid.module.css'




export function HomePageGrid() {

    return (
        <section className={styles.homePageGrid}>
            <RowOne />
            <RowTwo />
        </section>
    )
}
