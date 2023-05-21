function findNumbers() {
    let num1 = Number(document.getElementById("num1").value);
    let  num2 = Number(document.getElementById("num2").value);
    let  num3 = Number(document.getElementById("num3").value);
  
    let  max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    document.getElementById("result").innerHTML = "Largest number: " + max + "<br>" + "Smallest number: " + min;
}