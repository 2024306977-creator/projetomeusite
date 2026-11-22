document.addEventListener('DOMContentLoaded', () => {
  // 1. CARROSSEL
  const carrossel = document.getElementById('carouselPeek');
  if (carrossel) {
    const slides = carrossel.querySelectorAll('.carousel-item');
    const btnAnterior = carrossel.querySelector('[data-bs-slide="prev"]');
    const btnProximo = carrossel.querySelector('[data-bs-slide="next"]');
    let slideAtual = 0;

    function irParaSlide(indice) {
      slides[slideAtual].classList.remove('active');
      if (indice < 0) slideAtual = slides.length - 1;
      else if (indice >= slides.length) slideAtual = 0;
      else slideAtual = indice;
      slides[slideAtual].classList.add('active');
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
  }

  // 2. FORMULÁRIO DE CONTATO
  const formulario = document.getElementById('formContato');
  const alertaSucesso = document.getElementById('alertaSucesso');
  const campoNome = document.getElementById('nome');
  const campoEmail = document.getElementById('email');
  const campoMensagem = document.getElementById('mensagem');

  if (formulario) {
    formulario.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      let tudoValido = true;

      // Valida Nome
      if (campoNome.value.trim() === '') {
        campoNome.classList.add('is-invalid');
        campoNome.classList.remove('is-valid');
        tudoValido = false;
      } else {
        campoNome.classList.remove('is-invalid');
        campoNome.classList.add('is-valid');
      }

      // Valida E-mail (exige texto@dominio.com)
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!regexEmail.test(campoEmail.value.trim())) {
        campoEmail.classList.add('is-invalid');
        campoEmail.classList.remove('is-valid');
        tudoValido = false;
      } else {
        campoEmail.classList.remove('is-invalid');
        campoEmail.classList.add('is-valid');
      }

      // Valida Mensagem
      if (campoMensagem.value.trim() === '') {
        campoMensagem.classList.add('is-invalid');
        campoMensagem.classList.remove('is-valid');
        tudoValido = false;
      } else {
        campoMensagem.classList.remove('is-invalid');
        campoMensagem.classList.add('is-valid');
      }

      if (!tudoValido) return;

      // Exibe o alerta de sucesso
      if (alertaSucesso) {
        alertaSucesso.classList.remove('d-none', 'fade');
        alertaSucesso.classList.add('show');
        alertaSucesso.style.setProperty('display', 'block', 'important');
      }

      formulario.reset();
      campoNome.classList.remove('is-valid');
      campoEmail.classList.remove('is-valid');
      campoMensagem.classList.remove('is-valid');
    });
  }

  // 3. BOTÃO "X" DO ALERTA
  document.addEventListener('click', (e) => {
    const botaoFechar = e.target.closest('[data-bs-dismiss="alert"]');
    if (botaoFechar) {
      const alerta = botaoFechar.closest('.alert');
      if (alerta) {
        alerta.style.setProperty('display', 'none', 'important');
      }
    }
  });
});

// 4. MENU HAMBÚRGUER (3 BARRINHAS)
  const btnMenu = document.getElementById('btnMenu');
  const menuNavegacao = document.getElementById('menuNavegacao');

  if (btnMenu && menuNavegacao) {
    btnMenu.addEventListener('click', () => {
      const estaAberto = menuNavegacao.classList.toggle('show');
      btnMenu.setAttribute('aria-expanded', estaAberto);
    });

    // Fecha o menu automaticamente ao clicar em qualquer link dele
    const linksMenu = menuNavegacao.querySelectorAll('.nav-link');
    linksMenu.forEach((link) => {
      link.addEventListener('click', () => {
        menuNavegacao.classList.remove('show');
        btnMenu.setAttribute('aria-expanded', 'false');
      });
    });
  }