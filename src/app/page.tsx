import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>Roteiros pelo Brasil</span>
        <h1 className={styles.heading}>Descubra destinos para a sua proxima viagem.</h1>
        <p className={styles.body}>
          Um portal simples para consultar lugares especiais, comparar ideias de
          roteiro e abrir os detalhes de cada destino em paginas individuais.
        </p>
        <Link href="/destinos" className={styles.cta}>
          Ver destinos
        </Link>
      </div>
    </section>
  );
}
