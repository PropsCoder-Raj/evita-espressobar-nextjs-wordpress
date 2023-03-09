import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link';
import HeaderComponent from './template/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeaderComponent />
    </>
  )
}
