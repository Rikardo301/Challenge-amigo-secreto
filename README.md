# 🎁 Amigo Secreto

Una aplicación web interactiva para organizar sorteos de amigo secreto desarrollada como parte del programa **Oracle Next Education**.

![Amigo Secreto](assets/amigo-secreto.png)

## 📋 Descripción

**Amigo Secreto** es una aplicación diseñada para armar una lista de participantes y efectuar un sorteo al azar que asigna a cada persona su “amigo secreto”. Resulta ideal para coordinar intercambios de obsequios en celebraciones, encuentros familiares o reuniones con amistades.

## ✨ Funcionalidades

- **➕ Agregar nombres**: Los usuarios pueden escribir un nombre en el campo de texto y agregarlo a la lista haciendo clic en "Añadir".
- **✅ Validar entrada**: Si el campo está vacío, se mostrará una alerta solicitando un nombre válido.
- **📝 Visualizar lista**: Todos los nombres ingresados aparecen en una lista organizada debajo del campo de entrada.
- **🎲 Sorteo aleatorio**: Al hacer clic en "Sortear amigo", se selecciona aleatoriamente un nombre de la lista y se muestra el resultado.

## 🚀 Cómo usar

1. **Escribir nombre**: Ingresa el nombre de un amigo en la caja de texto.
2. **Añadir a la lista**: Haz clic en el botón "Añadir" para agregarlo.
3. **Repetir**: Continúa agregando tantos nombres como quieras.
4. **Sortear**: Una vez que tengas todos los nombres debes hacer clic en "Sortear amigo" para obtener un resultado.

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica de la aplicación.
- **CSS3**: Diseño adaptable a distintos dispositivos.
- **JavaScript**: Estructura lógica de la aplicación y su interacción con el DOM.
- **Google Fonts**: Tipografías Inter y Merriweather.

## 📁 Estructura del proyecto

```
amigo-secreto/
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── app.js              # Lógica JavaScript
├── README.md           # Documentación
└── assets/
    ├── amigo-secreto.png
    └── play_circle_outline.png
```

## 🔧 Instalación y ejecución

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Rikardo301/Challenge-amigo-secreto.git
   ```

2. **Navegar al directorio**:
   ```bash
   cd Challenge-amigo-secreto
   ```

3. **Abrir en el navegador**:
   - Abre el archivo `index.html` directamente en tu navegador preferido.
   - O utiliza un servidor local como Live Server en VS Code.

## 💻 Características técnicas

### Funciones principales

- `agregarAmigo()`: Añade un nuevo nombre a la lista.
- `validarNombre()`: Valida que el campo no esté vacío.
- `actualizarLista()`: Actualiza la visualización de la lista.
- `sortearAmigo()`: Realiza el sorteo aleatorio.

### Validaciones

- Campo obligatorio para nombres.
- Limpieza automática del campo después de añadir.
- Validación de lista vacía antes del sorteo.

## 🎯 Objetivos del challenge

Este proyecto forma parte del programa **Oracle Next Education** y tiene como objetivos:

- Practicar manipulación del DOM con JavaScript.
- Implementar validaciones de formularios.
- Crear interfaces de usuario interactivas.
- Aplicar conceptos de programación funcional.
- Desarrollar habilidades en desarrollo web front-end.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👤 Autor

**Ricardo Barceló T.** - [Rikardo301](https://github.com/Rikardo301)

---

### 🎓 Oracle Next Education

Este proyecto fue desarrollado como parte del programa de formación **Oracle Next Education**, una iniciativa educativa que busca capacitar a nuevos talentos en tecnología.

**#OracleNextEducation** **#Challenge** **#JavaScript** **#FrontEnd**
