//Ejercicio 2
const numMay = document.getElementById("mayornum")

firstNum = parseInt(prompt('Número 1'))
Secondnum = parseInt(prompt('Número 2'))
Thirdnum3 = parseInt(prompt('Número 3'))

function numeroMayor(num1, num2, num3) {
    if(num1>num2 && num1>num3){
       let mayor =  document.createElement('h1')
       mayor.innerHTML=`
       El numero mayor es: ${num1}
       `
       numMay.append(mayor)
    }else if(num2>num1 && num2>num3){
        
       let mayor=  document.createElement('h1')
       mayor.innerHTML=`
       El numero mayor es: ${num2}
       `
       numMay.append(mayor)
    }else{
        let mayor=  document.createElement('h1')
       mayor.innerHTML=`
       El numero mayor es: ${num3}
       `
       numMay.append(mayor)
    }

}
numeroMayor(firstNum, Secondnum, Thirdnum3)