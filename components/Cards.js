import styles from '../styles/Home.module.css'
const Cards = ({ articles }) => (
    articles.map((article) => (
            <>
                <a key={article.id} href="#" className={styles.card}>
                <h3>{article.title}</h3>
                    <p >{article.description}</p>
                </a>
            </>
        ))
        );

        export default Cards;
