import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Cards = ({ articles }) => (
    articles.map((article) => (
        <>
            <Link href={`/articles/${article.slug}`}>  
            <a key={article.slug} className={styles.card}>
                <h3>{article.title}</h3>
                    <p>{article.description}</p>
            </a> 
            </Link>
        </>
    ))
);

export default Cards;
