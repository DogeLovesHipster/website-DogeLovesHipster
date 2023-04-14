import { Inter } from 'next/font/google'
import styles from './contact.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
    return (
        <body>
        <main className={styles.main}>
        <header className={styles.head}>
            <nav>
                <h1>TALK TO ME</h1>
            </nav>
        </header>
        <footer>
        </footer>
        </main>
        </body>
    )
    }

