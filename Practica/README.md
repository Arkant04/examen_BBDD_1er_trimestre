# Examen 1er trimestre BBDD

1º de DAM en ESCAV Granada

Nombre: Alejandro De La Corte Grosso 

Fecha: 19/02/2023

En primer lugar, añadimos el "html":
![Alt text](<imagenes/Captura de pantalla 2023-12-19 a las 13.06.40.png>)

En esta imagen vemos de primeras creo dos div diferentes a los que les metere diferente info/datos. 
  
  -Primero creo un div llamado container donde metere dentro los diferentes inputs e botones que vaya hacer uso en este proyecto.
  
  -Segundo creo un segundo div al cual le intertare un "h1" escribiendo en el "Participantes", despues a este div le añadire otro div donde más adelante a traves de "js" insertare dentro de este el nombre de los participantes.
  
  -Tercero Le pondre a estos dos div id´s diferentes para poder acceder a ellos independientemente en css



En segundo lugar, añadimos el "css":
 ![Alt text](<imagenes/Captura de pantalla 2023-12-19 a las 13.39.35.png>)

De primeras empezare reiniciando el margin y el bottom, despues de hacer esto empezare definiendo el espacio que en el que estara cada cosa llamando a los contenedores y luego a los botones, inputs, etc. que pondre en lugares especificos en los que querre que esten.


En Tercer lugar, añadimos el "js":
![Alt text](<imagenes/Captura de pantalla 2023-12-19 a las 14.27.05.png>)

De primeras empece creando las funciones de añadir, borrar, y sortear y luego cree una lista en "localStorage" donde empezaria a mandar los elementos que vaya creando el ususario
  
  -En añadir empece creando una constante llamada valor la cual la mandare a la "lista" (nombre que le puse a la variable), despues creare otra constante llamada "elemeneto" a la que le dire que cree un elemento "p" en mi html para despues, en esta funcion y en otras, empezar a modificarla y decirle que ese elemento que he creado se añada al div llamado "resultado"  
  
  -En la funcion de borrar lo que hare sera acceder a los div´s llamados resultado y ganador e modificar estos dos comentandoles que sean igual a un string vacio(""), despues de esto hare a traves de ".removeItem" que la variable que se llama lista la borre del "localStorage"

  -En la funcion de sorteo lo que hago es crear una constante llamada ganador a la cual le dire que es igual a un nombre aleatorio de la lista que cree con anterioridad, despues lo que hago es decirle que enseñe este resultado en el "div" de ganador.

  -Por ultimo en el "js" añadimos if y un else para que nos guarde la info y no se borre cuando refresquemos la pagina, ademas he añadido una funcion para que al pulsar una tecla acceda a la funcion de añadir y tambien que al darle a añadir el texto que tenemos en la barra de texto se borre para que no tengamos que estar borrando constantemente el texto nosotros.








 