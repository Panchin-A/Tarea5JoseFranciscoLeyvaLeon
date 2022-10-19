//document.write("<h1>Escriba sus calificaciones una por una</h1>")
let c =prompt("ingrese el primer numero");
let c1= parseFloat(c);
let a =prompt("ingrese el primer numero");
let a1= parseFloat(a);
let b =prompt("ingrese el segundo numero");
let b1= parseFloat(b);
let R=((a1+b1+c1)/3);
console.log(R);
if(R>=5){
    alert(`Aprovado con: ${R}`);}
else if(R<5){
    alert(`Reprovado con: ${R}`);}
else{
    alert(`Datos no validos `);}
