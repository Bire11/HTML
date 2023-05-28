

let cars = []
function addCar() {

  let carName = document.getElementById('car-name').value;

  cars.push(carName  );
  document.getElementById('car-name').value=''

  displayCars();
}


function displayCars() {

  let carList = document.getElementById('car-list');

 
  carList.innerHTML = '';


  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    let li = document.createElement('li');
    li.textContent = cars[i];
    carList.appendChild(li);
    
  }
  
 
  var table=document.createElement("tabel");
  var tr=table.appendChild("tr");
  var td=tr.appendChild("td")
}
var el=document.getElementById("myImg");
el.src="s.jpg";