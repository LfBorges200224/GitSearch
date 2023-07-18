function takeLocalStorage(){
    const user = localStorage.getItem('login')
    profileUser(user)
}


async function profileUser(user){
    fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(data => {
        const head = document.querySelector('header');

        const headerContainer = document.createElement('div')
        headerContainer.classList.add('container__header')
        head.appendChild(headerContainer)

        const imgandText = document.createElement('div')
        imgandText.classList.add('container__photo')
        headerContainer.appendChild(imgandText)

        const imgContainer = document.createElement('div')
        imgContainer.classList.add('photo__space')
        imgandText.appendChild(imgContainer)

        const img = document.createElement('img')
        img.classList.add('img__Style')
        img.setAttribute('src', data.avatar_url)
        imgContainer.appendChild(img)

        const name = document.createElement('h1')
        name.classList.add('name__information')
        name.textContent = data.name
        imgandText.appendChild(name)

        const btn = document.createElement('button')
        btn.classList.add('change__user')
        headerContainer.appendChild(btn)
        btn.innerHTML = "Trocar de Usuario"
        btn.addEventListener('click', ()=>{
            localStorage.clear()
            window.location.replace(`../../index.html`)
        })

    })

    fetch(`https://api.github.com/users/${user}/repos`)
    .then(response => response.json())
    .then(data =>{
        data.forEach(element => {
            const ul = document.querySelector('ul')

            const card = document.createElement('li')
            card.classList.add('card__contain')
            ul.appendChild(card)

            const title = document.createElement('h2')
            title.textContent = element.name;
            card.appendChild(title)

            const paragraph = document.createElement('p')
            paragraph.textContent = element.decription ? element.description : "esse projeto esta sem descricao no momento recomendamos aguardar para mais atualizacoes me futuras melhoras nessa IPI"
            card.appendChild(paragraph)

            const buttonRepositories = document.createElement('button')
            buttonRepositories.classList.add('go__repositor')
            buttonRepositories.innerHTML = "Repositorio"
            card.appendChild(buttonRepositories)
            buttonRepositories.addEventListener('click', () =>{
                window.open(element.html_url)
            })

        });
        console.log(data)
    })
}
takeLocalStorage()