// arreglo global de participantes
let amigos = [];

// 1) Agregar un nombre nuevo
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

// 2) Validaciones básicas
function validarNombre(nombre) {
  if (nombre === "") {
    alert("Inserta un nombre válido.");
    return false;
  }
  if (amigos.includes(nombre)) {
    alert("Ese nombre ya fue agregado.");
    return false;
  }
  return true;
}

// 3) Mostrar la lista de participantes (ordenada alfabéticamente)
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos
    .slice()            // no mutar el original
    .sort()
    .forEach(nombre => {
      const li = document.createElement("li");
      li.textContent = nombre;
      lista.appendChild(li);
    });
}

// 4) Función de “mezclar” (shuffle)
function mezclar(array) {
  return array.sort(() => Math.random() - 0.5);
}

// 5) Generar un derangement: remezclar hasta que nadie quede igual
function derangement(original) {
  let intento;
  do {
    intento = mezclar(original.slice());
  } while (
    intento.some((valor, i) => valor === original[i])
  );
  return intento;
}

// 6) Ejecutar sorteo y mostrar pares
function realizarSorteo() {
  const salida = document.getElementById("resultado");
  salida.innerHTML = "";        // limpiar resultados previos

  if (amigos.length < 2) {
    alert("Necesitas al menos 2 participantes para sortear.");
    return;
  }

  const asignados = derangement(amigos);

  amigos.forEach((participante, i) => {
    const p = document.createElement("p");
    p.textContent = `${participante} → ${asignados[i]}`;
    salida.appendChild(p);
  });
}






