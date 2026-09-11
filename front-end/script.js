// Seleciona todos os botões e páginas
const buttons = document.querySelectorAll('.tab-btn');
const pages = document.querySelectorAll('.page');

// Adiciona um evento de clique para cada botão do menu
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        
        // 1. Remove a classe "active" de todos os botões
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // 2. Esconde todas as páginas removendo a classe "active"
        pages.forEach(page => page.classList.remove('active'));
        
        // 3. Adiciona a classe "active" ao botão que foi clicado
        button.classList.add('active');
        
        // 4. Pega o ID da página alvo guardado no atributo "data-target"
        const targetPageId = button.getAttribute('data-target');
        
        // 5. Mostra a página correspondente adicionando a classe "active"
        document.getElementById(targetPageId).classList.add('active');
        
        // 6. Rola a tela suavemente de volta para o topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Geração Automática da Pokédex (1ª Geração - 151 Pokémon)
const pokedexGrid = document.getElementById('pokedex-grid');

// Variáveis de controle para o Modal Interativo
const modal = document.getElementById('pokemon-modal');
const closeBtn = document.querySelector('.close-btn');

const modalName = document.getElementById('modal-pokemon-name');
const modalNumber = document.getElementById('modal-pokemon-number');
const modalNormalImg = document.getElementById('modal-pokemon-normal-img');
const modalShinyImg = document.getElementById('modal-pokemon-shiny-img');

function carregarPokedexShiny() {
    for (let i = 1; i <= 151; i++) {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');
        
        const numeroFormatado = `#${String(i).padStart(3, '0')}`;
        const urlImagemNormal = `https://githubusercontent.com{i}.png`;
        const nomePokemon = obterNomePokemon(i);
        
        card.innerHTML = `
            <img src="${urlImagemNormal}" alt="${nomePokemon}" loading="lazy">
            <span class="number">${numeroFormatado}</span>
            <p class="name">${nomePokemon}</p>
        `;

        // Evento de clique para abrir o Modal com os dois detalhes lado a lado
        card.addEventListener('click', () => {
            abrirModalPokemon(i, nomePokemon, numeroFormatado);
        });

        pokedexGrid.appendChild(card);
    }
}

// Abre a janela modal alimentando os dois blocos de imagens simultaneamente
function abrirModalPokemon(id, nome, numero) {
    modalName.textContent = nome;
    modalNumber.textContent = numero;
    
    // Define os links das duas variantes ao mesmo tempo
    modalNormalImg.src = `https://githubusercontent.com{id}.png`;
    modalShinyImg.src = `https://githubusercontent.com{id}.png`;
    
    modal.style.display = "block";
}

// Fecha o modal ao clicar no botão "X"
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// Fecha o modal se o usuário clicar em qualquer área fora da caixinha central
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Lista de nomes para a primeira geração
const nomesKanto = ["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate","spearow","fearow","ekans","arbok","pikachu","raichu","sandshrew","sandslash","nidoran-f","nidorina","nidoqueen","nidoran-m","nidorino","nidoking","clefairy","clefable","vulpix","ninetales","jigglypuff","wigglytuff","zubat","golbat","oddish","gloom","vileplume","paras","parasect","venonat","venomoth","diglett","dugtrio","meowth","persian","psyduck","golduck","mankey","primeape","growlithe","arcanine","poliwag","poliwhirl","poliwrath","abra","kadabra","alakazam","machop","machoke","machamp","bellsprout","weepinbell","victreebel","tentacool","tentacruel","geodude","graveler","golem","ponyta","rapidash","slowpoke","slowbro","magnemite","magneton","farfetchd","doduo","dodrio","seel","dewgong","grimer","muk","shellder","cloyster","gastly","haunter","gengar","onix","drowzee","hypno","krabby","kingler","voltorb","electrode","exeggcute","exeggutor","cubone","marowak","hitmonlee","hitmonchan","lickitung","koffing","weezing","rhyhorn","rhydon","chansey","tangela","kangaskhan","horsea","seadra","goldeen","seaking","staryu","starmie","mr-mime","scyther","jynx","electabuzz","magmar","pinsir","tauros","magikarp","gyarados","lapras","ditto","eevee","vaporeon","jolteon","flareon","porygon","omanyte","omastar","kabuto","kabutops","aerodactyl","snorlax","articuno","zapdos","moltres","dratini","dragonair","dragonite","mewtwo","mew"];

function obterNomePokemon(id) {
    return nomesKanto[id - 1] || "Pokémon";
}

// Inicializa a Pokédex ao carregar a página
document.addEventListener('DOMContentLoaded', carregarPokedexShiny);