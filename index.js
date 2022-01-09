// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function  destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function  destructivelyRemoveLastCat(){
    cats.pop();
}
function  destructivelyRemoveFirstCat(){
    cats.shift();
}
/*function appendCat(name){
   let newArray= cats.concat(name);
   return newArray;
} */
function appendCat(name){
   let catss =[...cats,name];
    return catss ;
 }

function  prependCat(name){
    let catss = [name,...cats];
    return catss;
}
function removeLastCat(){
   let catz = cats.slice(0,-1);
   return catz;
}
function removeFirstCat(){
    let catz = cats.slice(1);
    return catz; 
}