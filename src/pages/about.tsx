import Head from 'next/head'
import Link from "next/link";
import styles from '@/styles/Home.module.css'

export default function About ()  {
  return (
    <>
      <Head>
        <title>Sobre</title>
        <link rel="icon" href="/about.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Página de sobre</h1>
        <Link href='/'>VOLTAR</Link>
      </main>
      
    </>
  )
}