let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (validarNombre(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        document.getElementById("amigo").value = ""; //Limpiar el campo de entrada
    } else {
        alert("Inserta un nombre.");
    }
}

function validarNombre(nombre) {
    return nombre.trim() !== "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista actual
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres para sortear.");
    }
    else {
        let indiceAmigo = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAmigo];
        document.getElementById("resultado").textContent = "Amigo sorteado: " + amigoSorteado;
    }
}

