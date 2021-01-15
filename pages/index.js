import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Hi 👋, my name is Matias Benedetto</title>
        <meta property="og:title" content="Hi 👋, my name is Matias Benedetto" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.mainCard}>

        <div className={styles.cardHeader}>
          <img className={styles.avatar} src="https://avatars1.githubusercontent.com/u/1310626" alt="Matias Benedetto" />
          <h1><span>Hi 👋, my name is</span> Matias Benedetto</h1>
        </div>

        <div className={styles.cardBody}>
          <p>I'm a curious person who works as a Software Developer 🧑‍💻.</p>
          <p>Lately I've been working as a Fullstack Engineer for San Francisco 🇺🇸 start-up companies, <a href="https://ipsy.com" target="_blank">Ipsy</a> and <a href="https://provenskincare.com" target="_blank">Proven.</a></p>
          <p>My main expertise is around web technologies 🌎 and JavaScript ecosystem: Typescript, React, Node, GraphQL, Express.</p>
          <p>I also enjoy working with other technologies as Python, Django, Mongo, Docker and Cloud platforms 🔥.</p>
          <p>📨 If you want to talk don't hesitate to drop me a line to <Link href="mailto:matias.benedetto@gmail.com">matias.benedetto@gmail.com</Link></p>
        </div>

        <div className={styles.cardFooter}>
          <p>You can learn more from me in:</p>
          <p className={styles.social}><a href="https://www.linkedin.com/in/matias-benedetto/" target="_blank"><img src="/linkedin.svg" /> LinkedIn</a></p>
          <p className={styles.social}><a href="https://github.com/matiasbenedetto" target="_blank"><img src="/github.svg" /> GitHub</a></p>
        </div>

      </div>
  </div>
  )
}
