/* =====================================================
   CATÁLOGO JAMAR — EDITE AQUI
   Este é o único arquivo que você precisa abrir para
   mudar WhatsApp, numerações, produtos e preços.
   ===================================================== */

/* WhatsApp: só números, com 55 + DDD. Ex.: 5511987654321 */
const WHATSAPP = "5517991649956";

/* Numerações que aparecem para escolher */
const TAMANHOS = ["35", "36", "37", "38"];

/* Quantas fotos cada modelo tem na pasta img/
   (nomes: id-do-produto-1.webp, id-do-produto-2.webp...) */
const FOTOS_POR_MODELO = 7;

/* Produtos — cada bloco { ... } é um modelo.
   id: igual ao começo do nome das fotos (sem espaço/acento)
   preco: texto que aparece no site
   Para adicionar um modelo, copie um bloco inteiro e cole abaixo. */
const PRODUTOS = [
  {
    id: "dakar-bistro",
    nome: "Dakar Bistrô",
    tipo: "Sandália baixa",
    preco: "R$ 178,90",
    desc: "Tiras finas cravejadas em tom rosé, com nó delicado na frente e fivela no tornozelo. Salto baixo e confortável — perfeita para jantares, casamentos ao ar livre e ocasiões especiais."
  },
  {
    id: "dakar-champagne",
    nome: "Dakar Champagne",
    tipo: "Sandália baixa",
    preco: "R$ 168,90",
    desc: "Tiras cruzadas em metalizado champagne e fivela ajustável. Elegante e leve, combina do passeio de verão ao happy hour."
  },
  {
    id: "dakar-ouro",
    nome: "Dakar Ouro",
    tipo: "Mule de salto",
    preco: "R$ 199,90",
    desc: "Mule em dourado metalizado com salto escultural espelhado. Uma peça de destaque, que eleva qualquer produção — do vestido de festa ao look de alfaiataria."
  },
  {
    id: "dakar-ouro-fivela",
    nome: "Dakar Ouro Fivela",
    tipo: "Sandália de salto",
    preco: "R$ 199,90",
    desc: "Sandália em dourado metalizado com tiras finas, fivela no tornozelo e o mesmo salto escultural espelhado. Firme no pé e sofisticada para eventos."
  },
  {
    id: "pampa-nogueira",
    nome: "Pampa Nogueira",
    tipo: "Sandália baixa",
    preco: "R$ 159,90",
    desc: "Tom nogueira com flor artesanal em destaque e tiras delicadas. Charme natural para o dia a dia, viagens e encontros ao ar livre."
  },
];
