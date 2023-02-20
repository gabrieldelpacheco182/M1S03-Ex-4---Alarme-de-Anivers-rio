function alarme () {
    let birthday = parseInt(document.getElementById("birthday")).value;
    let day = parseInt(document.getElementById("day")).value;
    let daysLeft = day - birthday;
    let timeLeft = daysLeft / (1000*60*60*24);

    if(dayLeft == 0){
        alert("feliz aniversario.")
    } else {
        alert(`Falta, ${daysLeft} dias.`)
    }
    console.log(timeLeft);
    console.log(daysLeft);
}