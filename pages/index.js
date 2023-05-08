import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Hi 👋, my name is Matias Benedetto</title>
        <meta property="og:title" content="Hi 👋, my name is Matias Benedetto" key="title" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑‍💻</text></svg>"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.mainCard}>

        <div className={styles.cardHeader}>
          <img className={styles.avatar} src="https://avatars1.githubusercontent.com/u/1310626" alt="Matias Benedetto" />
          <h1><span>Hi 👋, my name is</span> Matias Benedetto</h1>
        </div>

        <div className={styles.cardBody}>
          <p>I'm a curious person who works as a Software Developer 🧑‍💻.</p>
          
          <p>💡 Currently, I'm a full-time contributor to <a target="_blank" href="https://wordpress.org">WordPress</a>, sponsored by <a target="_blank" href="https://automattic.com/">Automattic</a>. It allows me to collaborate with the worldwide distributed community that builds the CMS, which <a target="_blank" href="https://kinsta.com/wordpress-market-share/">powers 40% of the internet</a> ⚡.</p> 
          
          <p>Throughout my career, I participated in several projects for large organizations 🏭 such as <a href="https://www.warnermedia.com/" target="_blank">Warner Media</a> and <a href="https://www.tvpublica.com.ar/" target="_blank">TVP</a>. But I also enjoyed joining smaller teams that iterate faster 🚀. I have contributed as a Fullstack Engineer for San Francisco 🇺🇸 start-up companies like <a href="https://ipsy.com" target="_blank">Ipsy</a> and <a href="https://provenskincare.com" target="_blank">Proven.</a></p>
          
          <p>My primary expertise is around frontend web technologies 🌎 and JavaScript / Typescript ecosystem: React, Redux, Node, NextJs, GraphQL, Express.</p>
          
          <p>I also like working with other technologies such as Python, Django, Mongo, Docker, and Cloud platforms.</p>
          
          <p>📨 If you want to talk don't hesitate to drop me a line to <Link href="mailto:matias.benedetto@gmail.com">matias.benedetto@gmail.com</Link>.</p>
        </div>

        <div className={styles.cardFooter}>
          <p>You can learn more from me in:</p>
          <p className={styles.social}><a href="https://mebenedetto.com/blog/" target="_blank"><img src="/wordpress.svg" /> Blog</a></p>
          <p className={styles.social}><a href="https://www.linkedin.com/in/matias-benedetto/" target="_blank"><img src="/linkedin.svg" /> LinkedIn</a></p>
          <p className={styles.social}><a href="https://github.com/matiasbenedetto" target="_blank"><img src="/github.svg" /> GitHub</a></p>
        </div>

      </div>
  </div>
  )
}
