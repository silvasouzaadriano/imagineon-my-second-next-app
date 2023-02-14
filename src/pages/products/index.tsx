import Head from 'next/head'
import Link from "next/link";
import styles from '@/styles/Home.module.css'

export default function Product() {
  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>
      <main className={styles.main}>
        <h1>Página de Produtos</h1>
        <ul>
          <li>
            <Link href='/products/1'>Produto 1</Link>
          </li>
          <li>
            <Link href='/products/2'>Produto 2</Link>
          </li>
          <li>
            <Link href='/products/3'>Produto 3</Link>
          </li>
        </ul>
        <Link href='/'>VOLTAR</Link>
      </main>
    </>
  )
}