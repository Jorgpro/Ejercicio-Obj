const obj=[
{nombre: "Jorge",Apellido: "Zapata",edad: 36,altura: 1.78,eresDesarrollador: true,  }

];
const edad= 36; 
const objPersona=[
    {nombre: "Ezequiel",Apellido: "Torres",edad: 35,altura: 1.60,eresDesarrollador: false,},
    {nombre: "Andres",Apellido: "Gonzales",edad: 43,altura: 1.70,eresDesarrollador: false,},
    {nombre: "Jorge",Apellido: "Zapata",edad: 36,altura: 1.78,eresDesarrollador: true,},
];
const listaObj= objPersona.sort((a,b)=> a.edad -b.edad);
console.log(listaObj)
