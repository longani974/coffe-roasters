import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Titre h1</h1>
      <h1 className="BigTitle">Big Titre h1</h1>
      <h2>Titre h2</h2>
      <h3>Titre h3</h3>
      <h4>Titre h4</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In provident
        odit laudantium, iusto placeat, repellendus dolorem asperiores,
        perspiciatis sapiente harum veniam. Porro nihil reprehenderit rerum
        nostrum beatae nemo nulla animi?
      </p>
    </div>
  );
}
