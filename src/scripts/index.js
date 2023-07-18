function ProfileorErro(){
    const input = document.querySelector('#area__text');
    const buttonSearch = document.querySelector('.rose__button');
    buttonSearch.addEventListener('click', async() =>{
        const getData = await fetch(`https://api.github.com/users/${input.value.replaceAll(' ','')}`, {
            method: 'GET'
        })

        .then((response) =>{
            if(response.ok){
                return response.json();
            }else{
                throw new Error('Usuário Não Encontrado');
            }
        })
        .then((data) => {
            localStorage.setItem("name", data.name);
            localStorage.setItem("login", data.login);
            localStorage.setItem("img", data.avatar_url);

            window.location.replace('./src/pages/profile.html');
        })
        .catch(() => {
            window.location.replace('./src/pages/error.html')
        })
    })  

}
ProfileorErro()