function Mostrar() {
    const senha = document.getElementById("senha");
    const alterartxt = document.getElementById("mostrar");

    if (senha.type === "password") {
        senha.type = "text";
        alterartxt.textContent = "Ocultar";
        senha.style.marginLeft = "-7.37px";
    } else {
        senha.type = "password";
        alterartxt.textContent = "Mostrar";
        senha.style.marginLeft = "-5px";
    }
}
function Mostrar2() {
    const senha = document.getElementById("senha2");
    const alterartxt = document.getElementById("mostrar2");

    if (senha.type === "password") {
        senha.type = "text";
        alterartxt.textContent = "Ocultar";
        senha.style.marginLeft = "-7.37px";
    } else {
        senha.type = "password";
        alterartxt.textContent = "Mostrar";
        senha.style.marginLeft = "-5px";
    }
}