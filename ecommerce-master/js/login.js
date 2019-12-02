const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let users = Array(
        {
            usuario:username.value,
           contraseña: password.value
        }
    );
    localStorage.setItem("user",JSON.stringify(users));
    location.href ="index.html";
});
(function(){
    var input = document.getElementById("password");
    var form = document.getElementById("form");
    var elem = document.createElement("div");
    elem.id = 'notify';
    elem.style.display = 'none';
    form.appendChild(elem);

    input.addEventListener('invalid', function(event){
        event.preventDefault();
        if ( !event.target.validity.valid ) {
            input.className = 'invalid animated shake';
            elem.textContent = 'La contrasña debe contener al menos un número , una letra mayúscula y una minúscula y al menos 8 o más caracteres'; 
           elem.className = 'error';
            elem.style.display = 'block';
        }


    });
    input.addEventListener('input', function(event){
        if ( 'block' === elem.style.display ) {
            input.className = '';
            elem.style.display = 'none';
        }
    });

})();