let amigos = []; // Array para armazenar os amigos

function adicionarAmigo () {
   const amigo = document.querySelector ('#amigo').value; // Captura o valor do input
   amigos.push(amigo); // Adiciona o amigo ao array
   exibirAmigos(); // Chama a função para exibir a lista atualizada
   document.querySelector('#amigo').value = ''; // Limpa o campo de entrada 
   // Verifica se o campo está vazio
  if (amigo === '') {
   alert ('Por favor, insira um nome');
   return;
   }
}
function exibirAmigos() {
   const lista = document.querySelector('#listaAmigos'); // Seleciona o elemento onde a lista será exibida
   lista.innerHTML = ''; // Limpa a lista antes de exibir os amigos

   //Loop para percorrer o array de amigos
   for (let i = 0; i < amigos.length; i++) {
      const li = document.createElement('li');// Cria um novo item de lista
      li.textContent = amigos[i]; // Define o texto do item como o nome do amigo
      lista.appendChild(li);// Adiciona o item à lista
     }
   }
      function sortearAmigo () {
      if (amigos.length > 0) {
         let index = parseInt(Math.random() * amigos.length);
         let amigoSecreto = amigos[index];
         let resultado = document.querySelector('#resultado');
         resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSecreto}<li>`;
        
      }
      else {
         validarNome();
      }
      confetti({
         particleCount: 100,
         spread: 70,
         origin: { y: 0.6 }
      });   
   }
   function novoSorteio () {
      limparListas();
      amigos = [];
   }
   
         
       
   

   