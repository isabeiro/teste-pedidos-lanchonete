
const admin = document.querySelector('#admin')
const navbar = document.querySelector('#navbar')

const formCadastro = document.querySelector('#formCadastro')
const panel = document.querySelector('#panel')
const menu = document.querySelector('#menu')
const productsList = document.querySelector('#productsList')

/*****ADMIN******/

admin.onsubmit = function(e) {
    e.preventDefault()

    const login = document.querySelector('#login').value
    const password = document.querySelector('#password').value
    
    if (login === 'admin' && password === '1234') {
        console.log('admin ok')
        admin.classList.add('hidden')
        navbar.classList.remove('hidden')
    } else {
        alert('Login e/ou senha incorretos!')
    }
    
}

/*****PANEL******/

const buttonClientAdd = document.querySelector('#clientAdd')
const buttonClientList = document.querySelector('#clientList')   
const buttonProductAdd = document.querySelector('#productAdd')   
const buttonProductList = document.querySelector('#productList')   
const buttonOrderList = document.querySelector('#orderList')  

buttonClientAdd.onclick = function() {
    admin.classList.add('hidden')
    formCadastro.classList.remove('hidden')
}

/*****NEW CLIENT *****/

formCadastro.onsubmit = function(e) {
    e.preventDefault()

    const name = document.forms['formCadastro'].name.value
    const email = document.forms['formCadastro'].email.value
    const phone = document.forms['formCadastro'].phone.value
    const adress = document.forms['formCadastro'].adress.value
    
    formCadastro.classList.add('hidden')
    menu.classList.remove('hidden')
    
    console.log(e)

    fetch('http://127.0.0.1:8080/api/clients', {
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
            alert('Cadastro realizado com sucesso!')
        })
    })
}