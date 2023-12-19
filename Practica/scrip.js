let lista = JSON.parse(localStorage.getItem("lista"));
if(lista === null){
  lista = []
}else{
  for(let i = 0; i< lista.length; i++){
    console.log(lista[i])
    const elemento = document.createElement("p")
    elemento.innerHTML = lista[i]
    document.querySelector("#resultado").appendChild(elemento)
  }
}

function añadir(){
  const valor = document.querySelector("#idNombre").value
  lista.push(valor)
  const elemento = document.createElement("p")
  elemento.innerHTML = valor
  document.querySelector("#resultado").appendChild(elemento)
   document.querySelector("#idNombre").value = ""
  localStorage.setItem("lista",JSON.stringify(lista) )
  console.log(valor)
}
function borrar(){
  lista = []
  document.querySelector("#resultado").innerHTML = ""
  document.querySelector("#Ganadores").innerHTML = ""
  localStorage.removeItem(`lista`)
  console.log("borrar")
}

function random(array){
  return array[Math.floor(Math.random()* array.length)]
}

function sortear(){
  const ganador = random(lista)
  
  const elemento = document.createElement("p")
  elemento.innerHTML = ganador
  document.querySelector("#Ganadores").appendChild(elemento)
  console.log(ganador)
}

function CapturarTecla(event){
  if(event.isComposing || event.keyCode === 13){
    añadir()
  }
}