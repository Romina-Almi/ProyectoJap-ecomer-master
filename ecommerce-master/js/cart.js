let productUnitCost = 0;
let productCurrency = "";
let subtotal = 0;
let shippingPercentage = 0.15;
let total = 0;
let paymentTypeSelected = false;
const CREDIT_CARD_PAYMENT = "Tarjeta de crédito";
const BANKING_PAYMENT = "Transferencia bancaria";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";

//Función que se utiliza para actualizar los costos de publicación
function updateTotalCosts(){
  let shippingCostHTML = document.getElementById("shippingCostText");
  let shippingToShow = product.currency + Math.round((shippingPercentage * 100));

  shippingCostHTML.innerHTML = shippingToShow;

 

 total = product.currency +  Math.round(((product.unitCost * cantidad.value) * shippingPercentage * 100) / 100);
 document.getElementById('totalCostText').innerHTML= total;


}

function updateSubtotal(){
  subtotal= product.currency + product.unitCost * cantidad.value;
  document.getElementById("subtotal").innerHTML=subtotal;

  subtotal= product.currency + product.unitCost * cantidad.value;
  document.getElementById("subtotalCostText").innerHTML=subtotal;
}

function showPaymentTypeNotSelected(){


}

function hidePaymentTypeNotSelected(){

}

function showProducts(product){
  let imgid = document.getElementById('img');
  let img = '<img src="'+ product.src+'" class="img-fluid img-thumbnaail">';
  let name = document.getElementById('name');
  let precio = document.getElementById("precio");
  let cantidad = document.getElementById("cantidad");

  imgid.innerHTML = img;
  name.innerHTML = product.name
  precio.innerHTML =  product.currency + product.unitCost;
  cantidad.value = product.count;
  updateSubtotal();
  updateTotalCosts();

  cantidad.onclick = function(){
    updateSubtotal();
    updateTotalCosts();
  }
  cantidad.onkeyup = function(){
    updateSubtotal();
    updateTotalCosts();
  }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(response){
       product = response.data.articles[0];
    showProducts(product); 
  });


  document.getElementById("Premiumradio").addEventListener("change", function(){
    shippingPercentage = 0.15;
    updateTotalCosts();
  });

  document.getElementById("Expressradio").addEventListener("change", function(){
    shippingPercentage = 0.7;
    updateTotalCosts();
  });

  document.getElementById("Standardradio").addEventListener("change", function(){
    shippingPercentage = 0.5;
    updateTotalCosts();
  });

});
