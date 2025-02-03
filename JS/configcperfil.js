const nomeperfil = document.querySelector("#nomeperfil");
const contador = document.querySelector("#contador");
const atual = document.querySelector("#atual");
const maximo = 34;

nomeperfil.addEventListener("keyup", (event) => {
    const caracteres = nomeperfil.value.length;
        if (caracteres > maximo) {
            return false;
        }
    atual.textContent = caracteres;
});

const biografia = document.querySelector("#biografia");
const contador2 = document.querySelector("#contador2");
const atual2 = document.querySelector("#atual2");
const maximo2 = 255;

biografia.addEventListener("keyup", (event) => {
    const caracteres2 = biografia.value.length;
        if (caracteres2 > maximo2) {
            return false;
        }
    atual2.textContent = caracteres2;
});

const inputFile = document.querySelector("#escolherfoto");
const pictureImage = document.querySelector(".imagem");
const pictureImageTxt = "";
pictureImage.innerHTML = pictureImageTxt;
var semfoto = document.querySelector("img[id='semfoto']")
var texto = document.querySelector("p[id='txtfoto']")

inputFile.addEventListener('change', function(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(e) {
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('foto');
            pictureImage.innerHTML = '';

            pictureImage.appendChild(img);

            semfoto.style.display = "none";
            texto.style.display = "none";
        });

        reader.readAsDataURL(file);
    }
    else {
        pictureImage.innerHTML = pictureImageTxt;
    }
});

function Remover() {
    pictureImage.innerHTML = '';
    semfoto.style.display = "";
    texto.style.display = "";
}