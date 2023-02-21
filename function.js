/* function alarme () {
    let birthday = parseInt(document.getElementById("birthday").value);
    let day = parseInt(document.getElementById("day").value);
    let daysLeft = day - birthday;
    let timeLeft = daysLeft / (1000*60*60*24);

    if(daysLeft > 0){
        alert(`Falta, ${daysLeft} dias.`)
    } else {
        alert("feliz aniversario.")
    }
    console.log(timeLeft);
    console.log(daysLeft);
} */
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