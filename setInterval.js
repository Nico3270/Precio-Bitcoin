// var XHR = new XMLHttpRequest();
// XHR.onreadystatechange = function () {
//   if (XHR.readyState == 4) {
//     if (XHR.status == 200) {
//       console.log(XHR.responseText);
//     } else {
//       console.log("There was a problem");
//     }
//   }
// }
// XHR.open("GET", "https://api.github.com/zen");
// XHR.send();

// var btn = document.querySelector("#btn");
// var img = document.querySelector("#photo");

// btn.addEventListener("click", function(){
//   var XHR = new XMLHttpRequest();

//   XHR.onreadystatechange = function(){
//     if(XHR.readyState == 4 && XHR.status == 200){
      
//       var url = JSON.parse(XHR.responseText).message;
//       img.src = url;
      
//     }
//   }
//   XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
//   XHR.send();
// })



let api = "https://api.coindesk.com/v1/bpi/currentprice.json";
var precio = document.querySelector(".precio");
var btn = document.querySelector(".btn-precio");

btn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4) {
      if (XHR.status == 200) {
        let datos = JSON.parse(XHR.responseText);
        let precioBitcoin = datos.bpi.USD.rate;
        precio.textContent = "El valor del Bitcoin es: " + precioBitcoin + " dólares";
      } else {
        console.log("There was a problem");
      }
    }
  }
  XHR.open("GET", api);
  XHR.send();
})