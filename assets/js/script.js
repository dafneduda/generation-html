let nome = window.document.getElementById('nome')
let email = window.document.getElementById('email')
let comentario = window.document.getElementById('comentario')
let dicas = window.document.getElementById('dicas')

nome.style.width = '100%'
email.style.width = '100%'
comentario.style.width = '100%'
dicas.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
    }

    function validaEmail() {
        let txtEmail = document.querySelector('#txtEmail')
        if (email.value.indexOf('@') == -1) {
            txtNome.innerHTML = 'E-mail inválido'
            txtNome.style.color = 'red'
        } else {
            txtNome.innerHTML = 'E-mail válido'
            txtNome.style.color = 'green'
        }
    }

    function validaComentario() {
        let txtComentario = document.querySelector('#txtComentario')

        if(comentario.value.length >= 100){
            txtComentario.innerHTML = 'Texto é muito grande.'
        }
    }
}
