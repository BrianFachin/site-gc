function mostrarOcultarSenha(){
    var senha=document.getElementById("senha");
    if(senha.type=="password"){
        senha.type="text";
    }else{
        senha.type="password";
    }
}

function mostrarOcultarConfirmarSenha(){
    var senha=document.getElementById("confirmar-senha");
    if(senha.type=="password"){
        senha.type="text";
    }else{
        senha.type="password";
    }
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      center.classList.add('mudaCor'); // adiciona classe "mudaCor"
    } else {
      center.classList.remove('mudaCor'); // remove classe "mudaCor"
    }
});