function Mostrar() {
    const senha = document.getElementById("senha");
    const alterartxt = document.getElementById("mostrar");

    if (senha.type === "password") {
        senha.type = "text";
        alterartxt.textContent = "Ocultar";
        senha.style.marginLeft = "-8px";
    } else {
        senha.type = "password";
        alterartxt.textContent = "Mostrar";
        senha.style.marginLeft = "-6px";
    }
}