const usernav = document.getElementById("usernav");
const close = document.getElementById("close");

let username = JSON.parse(localStorage.getItem("user"));

if(username  != null){

    usernav.innerHTML='<li class="nav-item"><a class="nav-link" href="">'+username[0].usuario+'</a></li>'


}else{
     location.href="loginl.html";

}
close.addEventListener("click",function(){
    localStorage.clear("user");
    location.href="index.html";
});

