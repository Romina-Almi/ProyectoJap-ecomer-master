const ORDER_ASC_BY_COST = "0-100";
const ORDER_DESC_BY_COST = "100-0";
const ORDER_BY_COST = "PRECIO";
var currentProductsArray = [];
var currentSortCriteria = undefined;
var bajocost = undefined;
var altocost = undefined;

function sortProducts(criteria, array){
    let result = [];
    if ( criteria === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });        
    }else if (criteria === ORDER_DESC_BY_COST){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_COST){
        result = array.sort(function(a, b) {
            let acost = parseInt(a.cost);
            let bcost = parseInt(b.cost);

            if ( acost > bcost ){ return -1; }
            if ( acost < bcost ){ return 1; }
            return 0;
        });
    }
    
    return result;
}

function showProductsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let product = currentProductsArray[i];

        if (((bajocost == undefined) || (bajocost != undefined && parseInt(product.cost) >= bajocost)) &&
            ((altocost == undefined) || (altocost != undefined && parseInt(product.cost) <= altocost))){
        
            htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
               <div class="row">
                   <div class="col-3">
                       <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.name +`</h4>
                            <small class="text-muted">` + product.soldCount +  ` artículos vendidos</small>
                        </div>
                        <p class="mb-1">` + product.description + `</p>
                        <p class="mb-1">` + product.cost + product.currency + `</p>
                    </div>
                </div>
            </a>
            `
        }
        
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;

    }    
}

function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentProductsArray = productsArray;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);
    
    //Muestro los productos ordenados
    showProductsList();
}    

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowProducts(ORDER_ASC_BY_COST, resultObj.data);
        }
    });
    
    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_COST);
    });
    
    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_COST);
    });
    
    document.getElementById("sortByCost").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_COST);
    });
    
    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCostBajo").value = "";
        document.getElementById("rangeFilterCostAlto").value = "";

        bajocost = undefined;
        altocost = undefined;

        showProductsList();
    });
    
    document.getElementById("rangeFilterCost").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por precio
        //de productos por categoría.
        bajocost = document.getElementById("rangeFilterCostBajo").value;
        altocost = document.getElementById("rangeFilterCostAlto").value;

        if ((bajocost != undefined) && (bajocost != "") && (parseInt(bajocost)) >= 0){
            bajocost = parseInt(bajocost);
        }
        else {
            bajocost = undefined;
        } 
        if ((altocost != undefined) && (altocost != "") && (parseInt(altocost)) >= 0){
            altocost = parseInt(altocost);
        }
        else{
            altocost= undefined;
        }    
        
        showProductsList();
    });    
        

});