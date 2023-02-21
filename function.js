
function alarme () {
let birthday = parseInt(document.getElementById("birthday").value);
let day = parseInt(document.getElementById("day").value);
const dias =  new Date(birthday) -new Date(day)
const diffInDays = dias / (1000*60*60*24);
if (diffInDays > 0){
    console.log(`Falta ${diffInDays} dias`);
}else {
    console.log("Feliz aniversario.");
}
}