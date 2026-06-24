import Image from "next/image";
import Link from "next/link";
import type { Destino } from "@/data/destinos";
import styles from "./CardDestino.module.css";

type CardDestinoProps = {
  destino: Destino;
};

export default function CardDestino({ destino }: CardDestinoProps) {
  return (
    <article className={styles.card}>
      <Image
        className={styles.image}
        src={destino.imagem}
        alt={destino.nome}
        width={800}
        height={500}
      />
      <div className={styles.content}>
        <h2>{destino.nome}</h2>
        <p>{destino.resumo}</p>
        <Link href={`/destinos/${destino.id}`} className={styles.link}>
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}
