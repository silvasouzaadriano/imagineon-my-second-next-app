import Head from 'next/head'
import Link from "next/link";
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';

export default function ProductDetail() {
  const router = useRouter()
  const productId = router.query.id

  return (
    <>
      <Head>
        <title>Detalhes do Produto</title>
      </Head>
      <main className={styles.main}>
        <h1>Página de detalhes do produto {productId}</h1>
        <Link href='/products'>VOLTAR</Link>
      </main>
    </>
  )
}

