function validar(){
     
   var nombre , apellido , dirección , número , país , localidad , teléfono ,tipodeTrajeta , NúmerodeTarjeta,
   código,exMonth,exYear,date,month,year;
       
   

   nombre = document.getElementById("nombre").value;
   apellido = document.getElementById("apellido").value;
   dirección = document.getElementById("calle").value;
   número = document.getElementById("número").value;
   país = document.getElementById("país").value;
   localidad = document.getElementById("localidad").value;
   teléfono = document.getElementById("teléfono").value;
   tipodeTrajeta = document.getElementById("tipodeTarjeta").value;
   NúmerodeTarjeta = document.getElementById("creditCardNumber").value;
   código = document.getElementById("código").value;
   exMonth=document.getElementById("exMonth");
   exYear=document.getElementById("exYear");
   date = new Date ();
   month = date.getMonth();
   year = date.getFullYear();
  
    
     

   if( nombre ==="" || !nombre.match(/^[a-zA-Z]+$/) || nombre.length > 30){
       document.getElementById("nombre").style.boxShadow="0px  0px 5px  red";
       alert ("INGRESE UN NOMBRE VÁLIDO");
       document.getElementById("nombre").focus();
       return false;
    }else{
        document.getElementById("nombre").style.boxShadow="0px 0px 5px green";
    }
    if(apellido ==="" || !apellido.match(/^[a-zA-Z]+$/) || apellido.length > 30){
       document.getElementById("apellido").style.boxShadow="0px 0px 5px red";
       alert ("INGRESE UN APELLIDO VÁLIDO");
       document.getElementById("apellido").focus();
        return false;
    }else{
        document.getElementById("apellido").style.boxShadow="0px 0px 5px green";
    }
    if(dirección ===""){
        document.getElementById("calle").style.boxShadow="0px 0px 5px red";
        alert ("INGRESE  DIRECCIÓN VÁLIDA");
        document.getElementById("calle").focus();
        return false;
    }else{
        document.getElementById("calle").style.boxShadow="0px 0px 5px green";
    }

     if(número === "" || isNaN(número) || número.length >5){
        document.getElementById("número").style.boxShadow="0px 0px 5px red";
        alert ("INGRESE NÚMERO VÁLIDO");
       document.getElementById("número").focus();
       return false;
    }else{
        document.getElementById("número").style.boxShadow="0px 0px 5px green";
    }

    if(país ===""){
        document.getElementById("país").style.boxShadow="0px 0px 5px red";
        alert ("DEBE SELECCIONAR UN PAÍS");
        document.getElementById("país").focus();
        return false;
   }else{
       document.getElementById("país").style.boxShadow="0px 0px 5px green"; 
   }

    if(localidad ==="" || localidad.length > 15){
        document.getElementById("localidad").style.boxShadow="0px 0px 5px red";
       alert ("INGRESE  LOCALIDAD VÁLIDA");
       document.getElementById("localidad").focus();
       return false;
   }else{
        document.getElementById("localidad").style.boxShadow="0px 0px 5px green";
   }

    if(isNaN(teléfono)){
        document.getElementById("teléfono").style.boxShadow="0px 0px 5px red";
        alert ("INGRESE UN TELÉFONO VÁLIDO");
        document.getElementById("teléfono").focus();
        return false;
    }else{
        document.getElementById("teléfono").style.boxShadow="0px 0px 5px green";
    }

    if(tipodeTrajeta ===""){
        document.getElementById("tipodeTarjeta").style.boxShadow="0px 0px 5px red";
        alert ("SELECCIONAR UNA TARJETA VÁLIDA");
        document.getElementById("tipodeTarjeta").focus();
        return false;
    }else{
        document.getElementById("tipodeTarjeta").style.boxShadow="0px 0px 5px green";
    }

    if(NúmerodeTarjeta==="" || isNaN(NúmerodeTarjeta)){
        document.getElementById("ceditCardNumber").style.boxShadow="0px 0px 5px red";
        alert("INGRESE NÚMERO TARJETA VÁLIDA")
        document.getElementById("creditCardNumber").focus();
        return false;
    }else{
        document.getElementById('creditCardNumber').style.boxShadow="0px 0px 5px green";
    }

     if( código === "" || isNaN(código)){
        document.getElementById("código").style.boxShadow="0px 0px 5px red";
        alert ("CÓDIGO INCORRECTO");
        document.getElementById("código").focus();
        return false;
    }else{
        document.getElementById('código').style.boxShadow="0px 0px 5px green";
    }

     if (exMonth.selectedIndex  === 0){
        document.getElementById("exMonth").style.boxShadow="0px 0px 5px red";
        alert("PORFAVOR SELECCIONE MES");
        document.getElementById("exMonth").focus();
        return false;
    }else{
        document.getElementById('exMonth').style.boxShadow="0px 0px 5px green";
    }

     if (exYear.selectedIndex === 0){
        document.getElementById("exYears").style.boxShadow="0px 0px 5px red";
        alert("PORFAVOR SELECCIONE AÑO");
        document.getElementById("exYear").focus();
        return false;
    }else{
        document.getElementById('exYears').style.boxShadow="0px 0px 5px green";
    }
     if (year> exYear || (year === exYear && month >= exMonth)){
        alert("SELECCIONE FECHA VÁLIDA");
        return false;  
    }



   
    



}

