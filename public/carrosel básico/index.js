const imgs = [
  "https://sudotec.org.br/upload/projetos/p_89.jpg?202407172048",
  "https://sudotec.org.br/upload/projetos/p_92.jpg?202407172048",
  "https://sudotec.org.br/upload/projetos/p_93.jpg?202407172048",
];

let indexCarrossel = 0;

function voltaImagem() {
  const imgCarrosel = document.getElementById("imagem-carrosel");
  indexCarrossel--;

  if (indexCarrossel < 0) {
    indexCarrossel = imgs.length - 1;
  }

  imgCarrosel.setAttribute(`src`, imgs[indexCarrossel]);
}

function passaImagem() {
  const imgCarrosel = document.getElementById("imagem-carrosel");
  indexCarrossel++;

  if (indexCarrossel >= imgs.length) {
    indexCarrossel = 0;
  }
  imgCarrosel.setAttribute(`src`, imgs[indexCarrossel]);
}

  setInterval(() => {
    passaImagem();
  }, 3000);
