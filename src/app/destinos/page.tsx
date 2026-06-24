import CardDestino from "@/components/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "./destinos.module.css";

export default function DestinosPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Lista de destinos</span>
        <h1>Escolha o lugar que combina com seu proximo roteiro.</h1>
        <p>
          Cada card apresenta uma opcao turistica e leva para uma pagina
          individual com informacoes detalhadas.
        </p>
      </div>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </section>
  );
}
