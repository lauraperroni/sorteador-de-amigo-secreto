let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }



    if (amigos.includes(amigo.value)) {
        alert("Nome já adicionado.");
        return;
    }

    let lista = document.getElementById('lista-amigos');

    if (lista.innerHTML === '') {
        lista.innerHTML = amigo.value;
    } else {
        lista.innerHTML += ', ' + amigo.value;
    }
    amigos.push(amigo.value);
    amigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos");
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        if (i === amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + ' -> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML += amigos[i] + ' -> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // Atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}