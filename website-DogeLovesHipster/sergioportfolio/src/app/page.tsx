import Link from 'next/link'
import Contact from './contact'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <body>
    <main className={styles.main}>
      <header className={styles.head}>
        <h1>Sergio's Port</h1>
        <h2>Hi, I'm Sergio. I'm a cool guy.</h2>
        <nav>
        </nav>
      </header>
      <div className={styles.description}>
      </div>
      <Link href="/contact"><a>Contact</a></Link>
      <footer>
        <p>Footer Goes here</p>
      </footer>
    </main>
    </body>
  )
}
