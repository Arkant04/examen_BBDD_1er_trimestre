# Corrección examen BBDD 1er trimestre

Alumno: Alejandro De La Corte Grosso

## Teoria:
5/12, aunque sé que tienes un buen uso práctico de js, tienes conceptos confusos, esto es normal al principio, pero es necesario que asientes conocimientos y bases, te ayudará a entender mejor que haces y por qué lo haces.

## Práctica: 

Esta bien, pero has fallado con recuperar los datos en localStorage cuando actualizamos la web :( en clase ya hemos visto que generalmente vamos a cargar nuestros scripts desde el body, al cargar desde el head, no se puede encontrar el resto de elementos HTML, esto se ve corregido en Codepen porque el script se carga desde el body, pero en local no funciona.

Aunque tienes buena estructura y uso de HTML y CSS tienes bastantes inconsistencias de estilo a la hora de nombrar tanto archivos ("Indes" ya se corrigió, pero "scrip" me duele verlo), como clases, ids, variables... Toda esa mezcla de formas de nombrar a las cosas te llevará a fallos que son muy fáciles de evitar, simplemente elige una forma de nombrar cosas, y mantenla a lo largo de tu documento, te ayudará mucho a la hora de encontrar errores.

## Documentación:

Explicaste bien el proceso de creación, pero en general todos habeis compartido imagenes de código cuando estais escribiendo markdown y podeis hacer esto:

```js
function añadir(){
    let valor = document.getElementById("valor").value;
    let elemento = document.createElement("p");
    elemento.innerHTML = valor;
    document.getElementById("resultado").appendChild(elemento);
    document.getElementById("valor").value = "";
    lista.push(valor);
    localStorage.setItem("lista", JSON.stringify(lista));
}
```

```html
<div class="container">
    <input type="text" id="valor" placeholder="Introduce un nombre">
    <button onclick="añadir()">Añadir</button>
    <button onclick="sorteo()">Sortear</button>
    <button onclick="borrar()">Borrar</button>
</div>
```

```css
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2em;
}
```

Es más rapido, permite a quien visita la pagina entender que estas haciendo realmente, y te permite explicar mejor y mas rápido que hace cada cosa.

## Nota: 7/10