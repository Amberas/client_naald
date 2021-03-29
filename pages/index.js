import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Cards from '../components/Cards'
import Layout from '../components/Layout'
import NEXT_PUBLIC_API_ENDPOINT from '../env'


export default function Home({articles}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>De Naald</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Layout />
      </header>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Cards articles={articles} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch({NEXT_PUBLIC_API_ENDPOINT})
  const articles = await res.json()

  if (!articles) {
    return {
      notFound: true,
    }
  }

  return {
    props: { articles, }, // will be passed to the page component as props
  }
}
