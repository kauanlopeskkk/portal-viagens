import Link from "next/link";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          Portal Viagens
        </Link>

        <nav className={styles.nav} aria-label="Menu principal">
          <Link href="/">Inicio</Link>
          <Link href="/destinos">Destinos</Link>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <span>Explore com calma, escolha com carinho.</span>
      </footer>
    </div>
  );
}
