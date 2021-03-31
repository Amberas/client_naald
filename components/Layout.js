import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Layout = () => (
    <Link href={`/`}>
        <a>
            <h1 className={styles.title}>De Naald</h1>
        </a>
    </Link>
)
export default Layout