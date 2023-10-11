let amigos = [];

function adicionar() {

    let amigo = document.getElementById('nome-amigo');
    
    // validando o nome do amigo
    if (amigo.value == '') {
        alert('Este campo precisa ser preenchido. Informe o nome do Amigo.');
        return;
    }

    // permitir somente a inclusão de nomes diferentes na lista de amigos
    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado.');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
   
}

function sortear() {

    // condicionar a execução do sorteio se houver um número mínimo de participantes
    if (amigos.length < 4) {
        alert('Adicione ao menos 4 amigos.');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {

        if ( i == amigos.length - 1) {

            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';

        } else {
            
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
        
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice --) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}

