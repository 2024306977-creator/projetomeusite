// FORMULÁRIO DE CONTATO
const formulario = document.getElementById('formContato');
const alertaSucesso = document.getElementById('alertaSucesso');

if (formulario) {
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();//Java contola a validação sem recarregar a página

    if (!formulario.checkValidity()) {
      // Verifica se os campos atendem às regras de validação, ) retorna true se todos passam pelas regras
      formulario.classList.add('was-validated');//ativa estilo de validação
      return;
    }

    formulario.classList.add('was-validated');

    if (alertaSucesso) {
      alertaSucesso.classList.remove('d-none');
    }

    formulario.reset();
    formulario.classList.remove('was-validated');
  });
}