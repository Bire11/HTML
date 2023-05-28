/*function minMax(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    let min=num1;
    let max=num1;
    if(num2>num1) && (num2>num3){
        max=num2;
    }
    if(num2<num1 && num2<num3){
        min=num2;
    }
    if(num3>num1 &&  num3>num2){
        max=num3;
    }
    if(num3<num1 && num3<num2){
        min=num3;
    }
}*/
function getToday() {
  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Suturday";
  }
  document.getElementById("demo").innerHTML = "Today is" + day;
}
