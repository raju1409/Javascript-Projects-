
let mylabel = document.getElementById("myLabel");

display();
function display(){
  let date = new Date();
  mylabel.innerHTML = formatTime(date);

  function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amORpm = hours>=12 ? "PM":"AM";

    hours = hours%12 || 12;
    return `${hours} :${minutes} :${seconds} ${amORpm}`;
  }
}
