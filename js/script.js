document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('meuFormulario');
  const alertaSucesso = document.getElementById('alertaSucesso');

  if (formulario) {
    formulario.addEventListener('submit', (evento) => {
      // Impede o envio padrão que recarrega a página
      evento.preventDefault();
      evento.stopPropagation();

      // Verifica se os campos (required, minlength, email) são válidos
      if (formulario.checkValidity()) {
        // Mostra o alerta verde do Bootstrap
        alertaSucesso.classList.remove('d-none');
        alertaSucesso.classList.add('show');

        // Limpa o formulário e remove as bordas verdes de validação
        formulario.reset();
        formulario.classList.remove('was-validated');
      } else {
        // Ativa as bordas vermelhas e mensagens de erro do Bootstrap
        formulario.classList.add('was-validated');
      }
    });
  }
});