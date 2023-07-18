function erronewTry(){
    const buttonErro = document.querySelector('.try__again')

    buttonErro.addEventListener('click', ()=>{
        location.replace('../../../')
    })
}
erronewTry()