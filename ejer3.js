const studentsList = [
    {
     name: 'Jose',
     age: 21
   },
 
 {
     name: 'Zoe',
     age: 33
   },
   
{
     name: 'Alicia',
     age: 19
   },
  
{
     name: 'Pablo',
     age: 45
   },
 
 {
     name: 'Pedro',
     age: 18
   } 
 ] 
const lista = document.getElementById('lista')

studentsList.sort(function (a, b) {
    if (a.age < b.age) {
        return 1;
      }
      if (a.age > b.age) {
        return -1;
      }
     
})
console.log(studentsList);
for(let i=0; i<studentsList.length; i++){
let nombre = document.createElement('h1')
let edad= document.createElement('h1')
lista.append(nombre)
lista.append(edad)
nombre.innerHTML=`${studentsList[i].name}`
edad.innerHTML=`${studentsList[i].age}`

}