window.addEventListener('load',function(){

    console.log('passe')
    let elmTitre = document.querySelector('.site-branding .site-title')
    let elmDescription = document.querySelector('.site-branding .site-description')
    let elmNav = document.getElementById('site-navigation');

    elmTitre.classList.add('anim1');
    elmDescription.classList.add('anim3');
    elmNav.classList.add('anim3');
})