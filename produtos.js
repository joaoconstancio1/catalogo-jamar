/* =====================================================
   CATÁLOGO JAMAR — EDITE AQUI
   Este é o único arquivo que você precisa abrir para
   mudar WhatsApp, numerações, produtos e preços.
   ===================================================== */

/* WhatsApp: só números, com 55 + DDD. Ex.: 5511987654321 */
const WHATSAPP = "5517991055655";

/* Numerações que aparecem para escolher */
const TAMANHOS = ["35", "36", "37", "38"];

/* Quantas fotos cada modelo tem na pasta img/
   (nomes: id-do-produto-1.webp, id-do-produto-2.webp...) */
const FOTOS_POR_MODELO = 7;

/* Produtos — cada bloco { ... } é um modelo.
   id:    igual ao começo do nome das fotos (sem espaço/acento)
   nome:  nome igual ao da nota fiscal
   curto: nome curto que aparece nos botões do topo
   ref:   referência da etiqueta da caixa / nota
   preco: texto que aparece no site
   fotos: (opcional) quantas fotos, se for diferente de FOTOS_POR_MODELO
   Para adicionar um modelo, copie um bloco inteiro e cole abaixo. */
const PRODUTOS = [
  {
    id: "dakar-bistro", // fotos da Pampa Bistro MXT (21-3401)
    nome: "Sandália Saltinho Pampa Bistro MXT",
    curto: "Pampa Bistro MXT",
    ref: "21-3401",
    preco: "R$ 178,90",
    desc: "Tiras finas cravejadas em tom rosé, com nó delicado na frente e fivela no tornozelo. Salto baixo e confortável — perfeita para jantares, casamentos ao ar livre e ocasiões especiais."
  },
  {
    id: "pampa-nogueira",
    nome: "Sandália Saltinho Pampa Nogueira",
    curto: "Pampa Nogueira",
    ref: "12-3804",
    preco: "R$ 159,90",
    desc: "Tom nogueira com flor artesanal em destaque e tiras delicadas. Charme natural para o dia a dia, viagens e encontros ao ar livre."
  },
  {
    id: "pampa-bistro",
    nome: "Sandália Saltinho Pampa Bistro",
    curto: "Pampa Bistro",
    ref: "12-3804",
    preco: "R$ 159,90",
    desc: "O mesmo modelo com flor artesanal, agora no tom bistrô, um nude suave que combina com tudo. Leve e feminina para passeios, almoços e dias de sol."
  },
  {
    id: "dakar-champagne",
    nome: "Sandália Saltinho Dakar Champagne",
    curto: "Dakar Champagne",
    ref: "21-3546",
    preco: "R$ 168,90",
    desc: "Tiras cruzadas em metalizado champagne e fivela ajustável. Elegante e leve, combina do passeio de verão ao happy hour."
  },
  {
    id: "dakar-ouro-saltinho",
    nome: "Sandália Saltinho Dakar Ouro",
    curto: "Saltinho Dakar Ouro",
    ref: "21-3548",
    preco: "R$ 166,90",
    desc: "Dourado metalizado com laço na frente e duas contas douradas polidas na tira. Saltinho baixo e confortável, com fivela no tornozelo — luz e elegância para o verão, viagens e almoços especiais."
  },
  {
    id: "dakar-ouro-salto",
    nome: "Sandália Salto Dakar Ouro",
    curto: "Salto Dakar Ouro",
    ref: "64-3779",
    preco: "R$ 186,90",
    fotos: 6,
    desc: "Dourado metalizado com laço frontal e salto bloco firme de altura média. Elegante e estável, perfeita para festas, casamentos e eventos ao entardecer."
  },
  {
    id: "dakar-ouro-fivela", // fotos da Sandália Salto Cromado (68-3773)
    nome: "Sandália Salto Cromado Dakar Ouro",
    curto: "Salto Cromado Dakar Ouro",
    ref: "68-3773",
    preco: "R$ 199,90",
    desc: "Sandália em dourado metalizado com tiras finas, fivela no tornozelo e salto escultural cromado. Firme no pé e sofisticada para eventos."
  },
  {
    id: "dakar-ouro", // fotos do Tamanco Salto Cromado (68-3699)
    nome: "Tamanco Salto Cromado Dakar Ouro MXT",
    curto: "Tamanco Dakar Ouro MXT",
    ref: "68-3699",
    preco: "R$ 199,90",
    desc: "Tamanco em dourado metalizado com salto escultural cromado. Uma peça de destaque, que eleva qualquer produção — do vestido de festa ao look de alfaiataria."
  },
  {
    id: "francesa-amendoa",
    nome: "Sapatilha Boneca Perfurado Francesa Amêndoa",
    curto: "Francesa Amêndoa",
    ref: "15-3845",
    preco: "R$ 166,90",
    desc: "Sapatilha boneca de bico fino, toda perfurada, no tom amêndoa. Tira Mary Jane com tachas douradas espelhadas. Leve e delicada para passeios, trabalho e dias de sol."
  },
  {
    id: "renda-terra",
    nome: "Sapatilha Boneca Renda Tropical Terra",
    curto: "Renda Terra",
    ref: "15-3865",
    preco: "R$ 174,90",
    desc: "Renda delicada no tom terra, com bico fino e tira Mary Jane cravejada de tachas douradas. Romântica e sofisticada para jantares, encontros e o dia a dia com charme."
  },
  {
    id: "tela-mocha",
    nome: "Sapatilha Boneca Tela Majestic Mocha Mousse",
    curto: "Tela Mocha Mousse",
    ref: "15-3864",
    preco: "R$ 174,90",
    desc: "Tela perfurada no tom mocha mousse, bico fino e tira Mary Jane com tachas douradas. Confortável e elegante para o trabalho, viagens e passeios."
  },
];
