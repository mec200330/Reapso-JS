//Ejercicio 1
    const capturar = document.querySelector('#enviar')
     let aleatorio = (Math.floor(Math.random()*50))*1
    console.log(aleatorio);
      
alert('Adivina el número que estoy pensando')
capturar.onclick = () =>{

    var user =(document.getElementById("userNum").value)*1
    
         function adivina(num) {

        if(num===user){
            alert("adivinaste 👍")
            location.reload()
      }else if(num<user){
        alert('El número que estoy pensando es menor 😁')
    }else{
        alert('El número que estoy pensando es mayor 😁')
    }
    }
    adivina(aleatorio)
}
    

