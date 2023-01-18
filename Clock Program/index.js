
let mylabel = document.getElementById("myLabel");
setInterval(display, 1000);
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

    hours = formatZero(hours);
    minutes = formatZero(minutes);
    seconds = formatZero(seconds);
    return `${hours} :${minutes} :${seconds} ${amORpm}`;
  }
  function formatZero(time){
    time = time.toString();
    return time.length<2 ? "0"+time : time;
  }
}
