let amigos = [];

function agregarAmigo() {
  const campo = document.getElementById("amigo");
  const nombre = campo.value.trim();

  if (!validarNombre(nombre)) {
    campo.value = "";
    campo.focus();
    return;
  }

  amigos.push(nombre);
  campo.value = "";
  campo.focus();
  actualizarLista();
}

function validarNombre(nombre) {
  if (nombre === "") {
    alert("Por favor, escribe un nombre.");
    return false;
  }
  if (amigos.includes(nombre)) {
    alert("Ese nombre ya está en la lista.");
    return false;
  }
  return true;
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  const salida = document.getElementById("resultado");
  salida.innerHTML = "";

  if (amigos.length < 1) {
    alert("Agrega al menos un amigo para hacer el sorteo.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indiceAleatorio];

  const p = document.createElement("p");
  p.textContent = `El amigo elegido es: ${elegido}`;
  salida.appendChild(p);
}

