// Seleção dos elementos do DOM
const header = document.getElementById('main-header');
const ballButton = document.getElementById('pokeball-button');
const secretMiniBall = document.getElementById('secret-mini-ball');

// Lista com os estados sequenciais das esferas
const ballStates = ['pokeball', 'greatball', 'ultraball', 'masterball'];
let currentStateIndex = 0;

// Evento de clique na Pokébola principal do cabeçalho
ballButton.addEventListener('click', () => {
    // Remove a classe do estado atual
    header.classList.remove(`${ballStates[currentStateIndex]}-mode`);
    
    // Avança para o próximo estado (retorna ao zero se passar do limite)
    currentStateIndex = (currentStateIndex + 1) % ballStates.length;
    
    // Adiciona o novo estilo visual correspondente ao cabeçalho
    header.classList.add(`${ballStates[currentStateIndex]}-mode`);
    
    // Se atingir a Master Ball (último índice da lista), exibe o segredo no rodapé
    if (ballStates[currentStateIndex] === 'masterball') {
        secretMiniBall.classList.remove('hidden');
    } else {
        // Oculta novamente se o usuário continuar clicando e resetar o ciclo
        secretMiniBall.classList.add('hidden');
    }
});

// Evento de clique na mini Pokébola secreta do rodapé
secretMiniBall.addEventListener('click', () => {
    alert('Alguém esteve aqui... 🐾');
});
