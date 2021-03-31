import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'


export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch(`${process.env.STRAPI_API}/articles/`)
    const articles = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = articles.map((article) => ({
        params: { slug: `${article.slug}` },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`${ process.env.STRAPI_API }/articles/${params.slug}`)
    const article = await res.json()

    // Pass post data to the page via props
    return { props: { article } }
}

export default function articleDetail({ article }) {

    return (
        <main>
            <Layout />
            <Head>
                <title>Article</title>
            </Head>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </main>
    );
}