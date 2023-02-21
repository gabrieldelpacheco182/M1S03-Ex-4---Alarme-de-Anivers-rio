function alarme() {
  let birthday = parseInt(document.getElementById("birthday").value);
  let day = parseInt(document.getElementById("day").value);
  const dias = new Date(birthday) - new Date(day);
  const finalDay = dias / (1000 * 60 * 60 * 24);
  if (finalDay > 0) {
    alert(`Falta ${finalDay} dias`);
  } else {
    alert("Feliz aniversario.");
  }
}
