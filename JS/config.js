/*Início - Switch para troca de modo*/

function whiteMode() {
    var element = document.body;
    element.classList.toggle("white-mode");
  }

/*Fim - Switch para troca de modo*/



function Curtir(img) {
  var imagemAtual = img.getAttribute('src');
      if (imagemAtual === 'Imagens/NCurtiu.png') {
        img.setAttribute('src', 'Imagens/SCurtiu.png');
      } else {
        img.setAttribute('src', 'Imagens/NCurtiu.png');
      }
}




function ocultar(){
  pages = document.querySelectorAll('section article');
  for(var i=0; i<pages.length; i++){
      pages[i].classList.remove("show");
  }
}

links = document.querySelectorAll('.MENU a');
for(var i=0; i<links.length; i++){
  links[i].addEventListener('click', function(){
      id = this.getAttribute('href');
      ocultar();
      document.querySelectorAll(id)[0].classList.add("show");
      return false;
  });
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("midiaslide");
  if (n > slides.length)
  {
    slideIndex = 1;
  }
  if (n < 1)
  {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}








document.addEventListener('DOMContentLoaded', function () {
  const sendButton = document.getElementById('send');
  const send2Button = document.getElementById('send2');
  const messageInput = document.getElementById('message');
  const messageHistory = document.querySelector('.message-history');

  // Função para enviar a mensagem
  function sendMessage() {
      const messageText = messageInput.value;

      // Verifique se o campo de entrada está vazio
      if (messageText.trim() === '') {
          return; // Não faça nada se estiver vazio
      }

      const message = document.createElement('div');
      message.classList.add('message', 'sent');
      message.innerHTML = messageText;

      messageHistory.appendChild(message);

      messageInput.value = '';
  }

  // Adicione um ouvinte de evento de teclado para a tecla "Enter"
  messageInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
          event.preventDefault(); // Evite quebra de linha na caixa de texto
          sendMessage(); // Chame a função sendMessage quando "Enter" for pressionado
          send2Message();
      }
  });

  // Adicione um ouvinte de evento ao botão de envio também
  sendButton.addEventListener('click', sendMessage);
  send2Button.addEventListener('click', sendMessage);

  // Adicione um ouvinte de evento para alternar entre os chats
  const conversationList = document.querySelector('.conversation-list');
  conversationList.addEventListener('click', function (event) {
      if (event.target.closest('.conversation')) {
          const user = event.target.closest('.conversation').getAttribute('data-user');
          messageHistory.innerHTML = ''; // Limpa o histórico de mensagens ao trocar de usuário
          // Você pode adicionar lógica aqui para carregar o histórico de mensagens do usuário selecionado
      }
  });
});




const textarea = document.getElementById('message');

    textarea.addEventListener('input', () => {
        autoResizeTextarea(textarea);
    });

    textarea.addEventListener('input', () => {
        if (textarea.value.trim() === '') {
            textarea.style.height = 'auto';
        }
    });

    function autoResizeTextarea(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 150) + 'px';
        if (textarea.offsetHeight < 30) {
            textarea.style.height = '15px';
        }
    }

    autoResizeTextarea(textarea);












    // Simulação de uma lista de perfis
    const perfis = [
      { nome: "Samuel", foto: "Imagens/Screenshot_20230911_020010_Instagram.jpg", bio: "O céu noturno brilha com estrelas, um manto de mistérios cósmicos. Sob a lua, sonhos se tecem, e a noite guarda segredos. No silêncio, a Terra descansa, enquanto o universo dança em sua vastidão."},
      { nome: "Dennis", foto: "Imagens/Screenshot_20230911_104759_Instagram.jpg", bio: "No topo da montanha, o ar é puro e a vista é deslumbrante. A sensação de conquista é recompensa suficiente pela árdua escalada"},
      { nome: "Breno", foto: "Imagens/Screenshot_20230920_010326_Instagram.jpg", bio: "A chuva suave acalma a cidade, trazendo um sussurro reconfortante. Nas ruas, guarda-chuvas se abrem como flores em um jardim molhado"},
      { nome: "Davi", foto: "Imagens/Screenshot_20230922_230139_Instagram.jpg", bio: "O livro antigo contém histórias do passado, suas páginas amareladas são portadoras de sabedoria. Cada leitor encontra um mundo único dentro dele"},     
  ];


  // Função para realizar a pesquisa
  function pesquisar() {
      const termo = document.getElementById("barra-pesquisa").value.toLowerCase();
      const resultados = perfis.filter(perfil => perfil.nome.toLowerCase().includes(termo));


      // Limpar resultados anteriores
      const resultadosContainer = document.getElementById("resultado-pesquisa");
      resultadosContainer.innerHTML = "";

      // Exibir os resultados da pesquisa
        // Exibir os resultados da pesquisa
  resultados.forEach(perfil => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = 'perfil-container';
    div.innerHTML = `<img class='fotoperfil1' src="${perfil.foto}"><div class='txtperfil'>${perfil.nome}</div>`;
    
    // Adicione um evento de clique ao elemento div
    div.addEventListener("click", () => {
      mostrarPopup(perfil);
    });
    
    li.appendChild(div);
    resultadosContainer.appendChild(li);
  });
}

// Função para mostrar o pop-up com os detalhes do perfil
function mostrarPopup(perfil) {
  const popupContainer = document.getElementById("popup-container");
  const popupPhoto = document.getElementById("popup-photo");
  const popupName = document.getElementById("popup-name");
  const popupBio = document.getElementById("popup-bio");
  
  popupPhoto.src = perfil.foto;
  popupName.textContent = perfil.nome;
  popupBio.textContent = perfil.bio;
  
  popupContainer.style.display = "flex";
}

// Fechar o pop-up ao clicar no botão "X"
const popupClose = document.getElementById("popup-close");
popupClose.addEventListener("click", () => {
  const popupContainer = document.getElementById("popup-container");
  popupContainer.style.display = "none";
});





  document.getElementById("barra-pesquisa").addEventListener("keyup", function (event) {
    const termo = event.target.value.toLowerCase(); // Obtém o termo da barra de pesquisa
    const resultadosContainer = document.getElementById("resultado-pesquisa");

    if (event.key === "Enter") {
        if (termo !== "") {
            pesquisar(); // Realiza a pesquisa somente se houver um termo na barra de pesquisa
        } else {
            resultadosContainer.innerHTML = ""; // Limpa os resultados se a barra de pesquisa estiver vazia
        }
    } else if (event.key === "Backspace") {
        if (termo === "") {
            resultadosContainer.innerHTML = ""; // Limpa os resultados se a barra de pesquisa estiver vazia após pressionar Backspace
        } else {
            pesquisar(); // Realiza a pesquisa se a barra de pesquisa não estiver vazia após pressionar Backspace
        }
      } else if (event.key === "Tab") {
        if (termo === "") {
            resultadosContainer.innerHTML = ""; // Limpa os resultados se a barra de pesquisa estiver vazia após pressionar Tab
        } else {
            pesquisar(); // Realiza a pesquisa se a barra de pesquisa não estiver vazia após pressionar Tab
        }
    } else {
        pesquisar(); // Realiza a pesquisa quando qualquer outra tecla é pressionada
    }
});






var estadoBotao = false; // Inicialmente, o estado é "Adicionar amigo"

function Adicionar() {
  var botao = document.getElementById("botaoAmigo");
  
  if (estadoBotao) {
    botao.innerHTML = "Adicionar amigo";
  } else {
    botao.innerHTML = "Remover amigo";
  }
  
  estadoBotao = !estadoBotao; // Inverte o estado
}