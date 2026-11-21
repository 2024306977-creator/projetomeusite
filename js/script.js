// Faz o botão "X" fechar qualquer alerta (.alert) na página
  document.addEventListener('click', (e) => {
    const botaoFechar = e.target.closest('[data-bs-dismiss="alert"]');
    if (botaoFechar) {
      const alerta = botaoFechar.closest('.alert');
      if (alerta) {
        // Esconde o alerta (ou remove a classe 'show' e oculta)
        alerta.classList.remove('show');
        alerta.style.display = 'none';
      }
    }
  });

document.addEventListener('DOMContentLoaded', () => {
  const carrossel = document.getElementById('carouselPeek');
  if (!carrossel) return;

  const trilha = carrossel.querySelector('.carousel-inner');
  const slides = carrossel.querySelectorAll('.carousel-item');
  const btnAnterior = carrossel.querySelector('[data-bs-slide="prev"]');
  const btnProximo = carrossel.querySelector('[data-bs-slide="next"]');
  let slideAtual = 0;

  function irParaSlide(indice) {
    if (indice < 0) indice = slides.length - 1;
    if (indice >= slides.length) indice = 0;

    slides[slideAtual].classList.remove('active');
    slideAtual = indice;
    slides[slideAtual].classList.add('active');

    trilha.scrollTo({
      left: slides[slideAtual].offsetLeft,
      behavior: 'smooth'
    });
  }

  if (btnAnterior) {
    btnAnterior.addEventListener('click', (e) => {
      e.preventDefault();
      irParaSlide(slideAtual - 1);
    });
  }

  if (btnProximo) {
    btnProximo.addEventListener('click', (e) => {
      e.preventDefault();
      irParaSlide(slideAtual + 1);
    });
  }
});