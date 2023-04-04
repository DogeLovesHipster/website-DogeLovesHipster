import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <header>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa ipsam possimus consectetur, magni, at ex sed id excepturi magnam ea, aliquid autem facere hic accusamus suscipit libero nostrum laudantium?</p>
    </header>
  );
}
