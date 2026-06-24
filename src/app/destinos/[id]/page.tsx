import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinos, encontrarDestino } from "@/data/destinos";
import styles from "./detalhe.module.css";

type DestinoDetalhePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return destinos.map((destino) => ({
    id: destino.id,
  }));
}

export default async function DestinoDetalhePage({
  params,
}: DestinoDetalhePageProps) {
  const { id } = await params;
  const destino = encontrarDestino(id);

  if (!destino) {
    notFound();
  }

  return (
    <article className={styles.page}>
      <Image
        className={styles.image}
        src={destino.imagem}
        alt={destino.nome}
        width={1000}
        height={750}
        priority
      />

      <div className={styles.content}>
        <Link href="/destinos" className={styles.back}>
          Voltar para destinos
        </Link>
        <h1>{destino.nome}</h1>
        <p className={styles.description}>{destino.descricao}</p>
        <div className={styles.highlight}>
          <strong>Destaque:</strong> {destino.destaque}
        </div>
      </div>
    </article>
  );
}
