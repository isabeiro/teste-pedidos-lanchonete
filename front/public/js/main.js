
const admin = document.querySelector('#admin')
const navbar = document.querySelector('#navbar')

const formCadastro = document.querySelector('#formCadastro')
const panel = document.querySelector('#panel')
const menu = document.querySelector('#menu')
const formCadastroProduct = document.querySelector('#formCadastroProduct')
const productsList = document.querySelector('#productsList')
const clientsList = document.querySelector('#clientsList')
const containerClientsList = document.querySelector('#containerClientsList')

adress


//  ADMIN

admin.onsubmit = function(e) {
    e.preventDefault()

    const login = document.querySelector('#login').value
    const password = document.querySelector('#password').value
    
    if (login === 'admin' && password === '1234') {
        admin.classList.add('hidden')
        navbar.classList.remove('hidden')
    } else {
        alert('Login e/ou senha incorretos!')
    }
    
}

//  PANEL

const buttonClientAdd = document.querySelector('#clientAdd')
const buttonClientList = document.querySelector('#clientList')   
const buttonProductAdd = document.querySelector('#productAdd')   
const buttonProductList = document.querySelector('#productList')   
const buttonOrderList = document.querySelector('#orderList')  

buttonClientAdd.onclick = function() {
    admin.classList.add('hidden')
    containerClientsList.classList.add('hidden')
    formCadastro.classList.remove('hidden')
}

buttonProductAdd.onclick = function() {
    admin.classList.add('hidden')
    containerClientsList.classList.add('hidden')
    formCadastroProduct.classList.remove('hidden')
}

// NEW CLIENT 

formCadastro.onsubmit = function(e) {
    e.preventDefault()

    const name = document.forms['formCadastro'].name.value
    const email = document.forms['formCadastro'].email.value
    const phone = document.forms['formCadastro'].phone.value
    const adress = document.forms['formCadastro'].adress.value
    
    formCadastro.classList.add('hidden')
    
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

// ADICIONA EVENTO DE CLICK NO BOTAO EXCLUIR-CLIENTE
function adicionaEventoBotaoExcluirClient() {
    const botoesExcluir = document.querySelectorAll('.botao-excluir')
    botoesExcluir.forEach(botao => {
        botao.onclick = function(e) {
            e.preventDefault()
            
            const id = this.dataset.id
            
            fetch(`${'http://127.0.0.1:8080/api/clients'}/${id}`, {
                method: 'DELETE',
            }).then(response => {
                response.json().then(data => {
                    if (data.message === 'success') {
                        getClientsList()
                        alert('Cliente excluido com sucesso!')
                    } else {
                        alert('Ops, ocorreu um erro, tente novamente!')
                    }
                })
            })
        }
    })
}

// CLIENTS LIST 
buttonClientList.onclick = function() {
    getClientsList()
}

function getClientsList() {
    fetch('http://127.0.0.1:8080/api/clients', {
        method: 'GET',
    }).then(response => {
        response.json().then(data => {
            const clientHtml = data.map(client => `
                <li>
                    ${client.name} - ${client.email} - ${client.phone} - ${client.adress}
                    <a
                        href="#" 
                        class="botao-excluir" 
                        data-id="${client._id}"
                        >
                        [excluir]
                    </a>
                </li>
            `).join('')

            clientsList.innerHTML = clientHtml
            containerClientsList.classList.remove('hidden')
            formCadastro.classList.add('hidden')

            adicionaEventoBotaoExcluirClient()
        })
    })
}

// NEW PRODUCT 

formCadastroProduct.onsubmit = function(e) {
    e.preventDefault()

    const item = document.forms['formCadastroProduct'].item.value
    const price = document.forms['formCadastroProduct'].price.value
        
    formCadastroProduct.classList.add('hidden')
    
    fetch('http://127.0.0.1:8080/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            item,
            price,
        })
    }).then(response => {
        response.json().then(data => {
            alert('Cadastro realizado com sucesso!')
        })
    })
}

// ADICIONA EVENTO DE CLICK NO BOTAO EXCLUIR-PRODUTO
function adicionaEventoBotaoExcluirProduct() {
    const botoesExcluir = document.querySelectorAll('.botao-excluir')
    botoesExcluir.forEach(botao => {
        botao.onclick = function(e) {
            e.preventDefault()
            
            const id = this.dataset.id
            
            fetch(`${'http://127.0.0.1:8080/api/products'}/${id}`, {
                method: 'DELETE',
            }).then(response => {
                response.json().then(data => {
                    if (data.message === 'success') {
                        getProductsList()
                        alert('Produto excluido com sucesso!')
                    } else {
                        alert('Ops, ocorreu um erro, tente novamente!')
                    }
                })
            })
        }
    })
}

// PRODUCTS LIST 

buttonProductList.onclick = function() {
    getProductsList()
}

function getProductsList() {
    fetch('http://127.0.0.1:8080/api/products', {
        method: 'GET',
    }).then(response => {
        response.json().then(data => {
            const productHtml = data.map(product => `
                <li>
                    ${product.item} - ${product.price} 
                    <a
                        href="#" 
                        class="botao-excluir" 
                        data-id="${product._id}"
                        >
                        [excluir]
                    </a>
                </li>
            `).join('')

            productsList.innerHTML = productHtml
            containerProductsList.classList.remove('hidden')
            formCadastroProduct.classList.add('hidden')

            adicionaEventoBotaoExcluirProduct()
        })
    })
}