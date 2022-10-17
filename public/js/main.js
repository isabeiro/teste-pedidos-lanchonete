const API_URL = 'http://localhost:8080/api/clients'

const formCadastro = document.querySelector('#formCadastro')


formCadastro.onsubmit = function(e) {
    e.preventDefault()

    const name = document.forms['formCadastro'].name.value
    const email = document.forms['formCadastro'].email.value
    const phone = document.forms['formCadastro'].phone.value
    const adress = document.forms['formCadastro'].adress.value

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            phone,
            adress,
        })
    }).then(response => {
        response.json().then(data => {
            console.log(data)
        })
    })

    formCadastro.classList.add('hidden')
}






