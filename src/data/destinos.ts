export type Destino = {
  id: string;
  nome: string;
  imagem: string;
  resumo: string;
  descricao: string;
  destaque: string;
};

export const destinos: Destino[] = [
  {
    id: "fernando-de-noronha",
    nome: "Fernando de Noronha",
    imagem:
      "https://images.unsplash.com/photo-1578922746465-3a80a228f223?auto=format&fit=crop&w=1200&q=80",
    resumo: "Praias preservadas, vida marinha abundante e trilhas com vistas inesqueciveis.",
    descricao:
      "Fernando de Noronha e um arquipelago perfeito para quem busca natureza, mergulho e paisagens de cartao-postal. A ilha combina praias de agua transparente, mirantes e passeios de barco.",
    destaque: "Ideal para mergulho, observacao de golfinhos e viagens romanticas.",
  },
  {
    id: "gramado",
    nome: "Gramado",
    imagem:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80",
    resumo: "Clima serrano, boa gastronomia e ruas charmosas para passear sem pressa.",
    descricao:
      "Gramado oferece uma experiencia acolhedora na Serra Gaucha, com arquitetura charmosa, cafes, chocolaterias e atracoes para familias durante o ano todo.",
    destaque: "Otimo destino para gastronomia, friozinho e programacoes em familia.",
  },
  {
    id: "rio-de-janeiro",
    nome: "Rio de Janeiro",
    imagem:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
    resumo: "Montanhas, praias urbanas e uma energia cultural reconhecida no mundo inteiro.",
    descricao:
      "O Rio de Janeiro mistura natureza e cidade em um roteiro cheio de possibilidades: Cristo Redentor, Pao de Acucar, praias, museus e vida noturna vibrante.",
    destaque: "Perfeito para combinar praia, cultura, mirantes e passeios urbanos.",
  },
  {
    id: "foz-do-iguacu",
    nome: "Foz do Iguacu",
    imagem:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    resumo: "Cataratas impressionantes e atracoes naturais na fronteira entre tres paises.",
    descricao:
      "Foz do Iguacu tem como grande estrela o Parque Nacional do Iguacu, onde as cataratas criam um dos cenarios naturais mais marcantes da America do Sul.",
    destaque: "Excelente para ecoturismo, fotografia e roteiros de aventura leve.",
  },
];

export function encontrarDestino(id: string) {
  return destinos.find((destino) => destino.id === id);
}
