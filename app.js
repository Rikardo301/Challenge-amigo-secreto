let amigos = [];

function agregarAmigo() {
    let campo = document.getElementById("amigo");
    let nombre = campo.value.trim();
    if (validarNombre(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        campo.value = "";
        campo.focus();
    } else {
        alert("Inserta un nombre válido.");
    }
}

function validarNombre(nombre) {
    if (nombre === "") return false;
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        return false;
    }
    return true;
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.sort().forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }
    let indiceAmigo = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAmigo];
    document.getElementById("resultado").textContent = "Amigo sorteado: " + amigoSorteado;
}


